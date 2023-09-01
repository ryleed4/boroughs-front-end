import { createContext, useState } from "react";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const contextValue = {
    token,
    setToken,
  };
  console.log("token from AuthProvider ", token);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
