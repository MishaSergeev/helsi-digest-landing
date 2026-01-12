import type { DigestResponse } from "../types/digest";
import { getTodayDate } from "../utils/formatDate";

const BASE_URL = "/api/content";

export const getDigestUpdates = async (): Promise<DigestResponse> => {
  const date = getTodayDate();

  const response = await fetch(
    `${BASE_URL}/DigestUpdates?skip=0&limit=12&date=${date}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch digest updates");
  }

  return response.json();
};