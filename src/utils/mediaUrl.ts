const MEDIA_BASE_URL = "https://helsi.me/media/";

export const getMediaUrl = (path?: string | null): string => {
  if (!path) return "";

  if (path.startsWith("http")) {
    return path;
  }

  return `${MEDIA_BASE_URL}${path}`;
};
