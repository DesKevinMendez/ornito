export type tApiPagination = {
  total: number;
  per_page: number;
  current_page: number;
  from: number;
  to: number;
  last_page: number;
};

export type tServerResponse<T> = {
  data: T;
  pagination: tApiPagination;
};

export type tServerErrorResponse = {
  errors: Record<string, string[]>;
  message: string;
};

export type tObjectServerResponse<T> = {
  data: T;
};
