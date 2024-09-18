export type QuoteConfirmTypes = {
  id: string;
  жабыл: () => void;
  очур: () => void;
};

export type QuotesType = {
  author: string;
  quote: string;
  id: number;
  user_id: number;
};

export type InitialStateTypes = {
  isLoading: boolean;
  error: null | string;
  quotes: QuotesType[];
  quote: QuotesType | null;
};
