import { useEffect, useMemo, useState } from "react";
import { getDigestUpdates } from "../api/digestApi";
import type { DigestUpdate } from "../types/digest";

type UseDigestUpdatesResult = {
  digests: DigestUpdate[];
  activeDigest: DigestUpdate | null;
  isLoading: boolean;
  error: string | null;
};

export const useDigestUpdates = (): UseDigestUpdatesResult => {
  const [digests, setDigests] = useState<DigestUpdate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    getDigestUpdates()
      .then(res => {
        if (!isMounted) return;
        setDigests(res.data.digestUpdates);
      })
      .catch(() => {
        if (!isMounted) return;
        setError("Failed to load digest");
      })
      .finally(() => {
        if (!isMounted) return;
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const activeDigest = useMemo(() => {
    if (!digests.length) return null;

    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    return (
      digests.find(digest => {
        const digestDate = new Date(digest.date);
        return (
          digestDate.getMonth() === currentMonth &&
          digestDate.getFullYear() === currentYear
        );
      }) ?? digests.at(-1)!
    );
  }, [digests]);

  return {
    digests,
    activeDigest,
    isLoading,
    error,
  };
};