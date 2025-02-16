export const useIsUserStored = (): boolean => {
  return !!localStorage.getItem("userName");
};
