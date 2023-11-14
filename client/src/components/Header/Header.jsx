import { Link } from "react-router-dom"

export default function Header() {
  return (
<header>
  {/* Navigation */}
  <h1>
    <Link to={"/"}>
    <span className="home">
      GamesPlay
    </span>
    </Link>
  </h1>
  <nav>
    <Link to={"/games"}>
    <span>All games</span>
    </Link>
    <Link to={"/games/create"}>
      <span>Create Game</span>
    </Link>
    <Link to={"/login"}>
    <div id="guest">
      <span>Login</span>
    </div>
    </Link>
    <Link to={"/register"}>
    <div id="guest">
      <span>Register</span>
    </div>
    </Link>
    {/* Logged-in users */}
    <div id="user">
      <span>Logout</span>
    </div>
  </nav>
</header>

  )
}
