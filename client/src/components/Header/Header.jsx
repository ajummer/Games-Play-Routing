import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext.js";
import { useContext } from "react";

export default function Header() {
  const { isAuthenticated, userEmail } = useContext(AuthContext);
  return (
    <header>
      {/* Navigation */}
      <h1>
        <Link to={"/"}>
          <span className="home">GamesPlay</span>
        </Link>
      </h1>
      <nav>
        <Link to={"/games"}>
          <span>All games</span>
        </Link>
        {isAuthenticated && (
          <div id="user">
            <Link to={"/games/create"}>
              <span>Create Game</span>
            </Link>
            <p>{userEmail}</p>
            <span>Logout</span>
          </div>
        )}
        {!isAuthenticated && (
          <div id="guest">
            <Link to={"/login"}>
              <span>Login</span>
            </Link>
            <Link to={"/register"}>
              <span>Register</span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
