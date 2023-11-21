import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext.js";
import { useEffect } from "react";
import * as authService from "../../services/authService.js";
export const Logout = () => {
  const { onLogout } = useContext(AuthContext);
  useEffect(() => {
    authService.logout().then(() => onLogout());
  }, []);
  return <Navigate to={"/"} />;
};
