export type State = {
  status: "error" | "success" | undefined;
  erros?: {
    [key: string]: string[];
  };
  message?: string | null;
};
