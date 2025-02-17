import { useEffect, useState } from "react";
import "./Toast.css";

interface ToastProps {
  message: string;
  type: "warning" | "success" | "error";
  onClose?: () => void;
}

const Toast = ({ message, type, onClose }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isVisible) return null;

  return <div className={`toast toast-${type}`}>{message}</div>;
};

export default Toast;
