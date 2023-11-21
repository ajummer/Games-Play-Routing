import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Catalog from "./components/Catalog/Catalog.jsx";
import Create from "./components/Create/Create.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Details from "./components/Details/Details.jsx";
import { useState } from "react";
import { AuthContext } from "./contexts/authContext.js";
import { useNavigate } from "react-router-dom";
import * as authService from "./services/authService.js";
import * as gameService from "./services/gameService.js";
import { Logout } from "./components/Logout/Logout.jsx";
function App() {
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem("accessToken");
    return {};
  });
  const navigate = useNavigate();

  const onLoginHandler = async (data) => {
    try {
      const user = await authService.login(data);
      setAuth(user);
      localStorage.setItem("accessToken", user.accessToken);
      navigate("/games");
    } catch (err) {
      console.log("There is a problem");
    }
  };

  const onRegisterHandler = async (data) => {
    const { confirmPassword, ...registerData } = data;
    if (confirmPassword != registerData.password) {
      return;
    }
    try {
      const user = await authService.register(registerData);
      setAuth(user);
      localStorage.setItem("accessToken", user.accessToken);
      navigate("/games");
    } catch (err) {
      console.log("Unsuccessfull registration");
    }
  };

  const onLogout = async () => {
    setAuth({});
    localStorage.removeItem("accessToken");
  };

  const onCreateGameHandler = async (gameData) => {
    try {
      await gameService.create(gameData);
      navigate("/games");
    } catch (err) {
      console.log(err);
    }
  };

  const context = {
    onLoginHandler,
    onRegisterHandler,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
  };
  return (
    <AuthContext.Provider value={context}>
      <div id="box">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Catalog />} />
          <Route
            path="/games/create"
            element={<Create onCreateGameHandler={onCreateGameHandler} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/games/:gameId" element={<Details />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}
export default App;
