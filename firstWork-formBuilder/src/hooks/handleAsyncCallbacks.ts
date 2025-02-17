import { useState } from "react";

interface UseAsyncCallbackReturn {
  isLoading: boolean;
  executeCallback: () => Promise<void>;
  delay: number;
}

export const useAsyncCallback = (
  callback: () => void,
  delay: number = 1000
): UseAsyncCallbackReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const executeCallback = async (): Promise<void> => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, delay));
    callback();

    setIsLoading(false);
  };

  return {
    isLoading,
    executeCallback,
    delay,
  };
};
