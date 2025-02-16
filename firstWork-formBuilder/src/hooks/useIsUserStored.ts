import { useEffect, useState } from "react";

export const useIsUserStored = (): string => {
  const [user, setUser] = useState<string>(
    localStorage.getItem("userName") || ""
  );

  useEffect(() => {
    setUser(localStorage.getItem("userName") || "");
  }, []);

  return user;
};
