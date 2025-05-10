export interface ApiResponse<T> {
    IsError: boolean;
    Messages: string[];
    Data: T;
  }
  