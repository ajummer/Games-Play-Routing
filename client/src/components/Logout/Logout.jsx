import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext.js";
import { useEffect } from "react";
export const Logout = () => {
  const { onLogout } = useContext(AuthContext);
  useEffect(() => {
    onLogout();
  }, [onLogout]);
  return <Navigate to={"/"} />;
};
