import { useEffect } from "react";
import "./Toast.css";

interface ToastProps {
  message: string;
  type: "warning" | "success" | "error";
  onClose?: () => void;
  show: boolean;
  delay?: number;
}

const Toast = ({
  message,
  type,
  onClose = () => {},
  show,
  delay = 1200,
}: ToastProps) => {
  useEffect(() => {
    let timer = 0;
    if (show) {
      timer = setTimeout(() => {
        onClose();
      }, delay);
    }
    return () => clearTimeout(timer);
  }, [show, onClose]);

  if (!show) return null;

  return <div className={`toast toast-${type}`}>{message}</div>;
};

export default Toast;
