import { useEffect, useState } from "react";
import "./Loader.css";

interface LoaderProps {
  delay?: number;
  trigger?: boolean;
}

function Loader({ delay = 3000, trigger = false }: LoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (trigger) {
      setIsLoading(true);
    }
  }, [trigger]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, trigger]);

  if (!isLoading) return null;

  return (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  );
}

export default Loader;
