export interface DigestUpdate {
  id: string;
  name: string;
  description: string;
  mobileImage: string;
  webImage: string;
  backgroundColor: string;
  monthName: string;
  digestImage: string;
  date: string;
}

export interface DigestResponse {
  data: {
    digestUpdates: DigestUpdate[];
    hasNext: boolean;
  };
}