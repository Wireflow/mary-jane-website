type UseCaseError = {
  success: boolean;
  error: string;
  status: number;
};

type UseCaseSuccess<T> = {
  success: boolean;
  data: T;
};

export type UseCaseReturn<T> = {
  success: boolean;
  error?: string;
  status?: number;
  data?: T;
};
