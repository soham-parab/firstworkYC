import React from "react";
import { createContext, useContext, ReactNode, useState } from "react";

interface UserContextType {
  userName: string;
  isAuthenticated: boolean;
  setUserName: (name: string) => void;
  clearUser: () => void;
  createUser: (name: string) => void;
  goTo: (name: string) => void;
  page: string;
}

const UserContext = createContext<UserContextType>({
  userName: "",
  isAuthenticated: false,
  setUserName: () => {},
  clearUser: () => {},
  createUser: () => {},
  goTo: () => {},
  page: "home",
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState<string>(
    localStorage.getItem("userName") || ""
  );
  const [currentPage, setCurrentPage] = useState<string>("home");

  const isAuthenticated = Boolean(userName && localStorage.getItem("userName"));

  const handleSetUserName = (name: string) => {
    setUserName(name);
    localStorage.setItem("userName", name);
  };

  const handleClearUser = () => {
    setUserName("");
    localStorage.removeItem("userName");
  };

  const value = {
    userName,
    isAuthenticated,
    setUserName: setUserName,
    createUser: handleSetUserName,
    clearUser: handleClearUser,
    page: currentPage,
    goTo: setCurrentPage,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
