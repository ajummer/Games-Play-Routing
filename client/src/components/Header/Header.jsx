import { Link } from "react-router-dom"

export default function Header() {
  return (
<header>
  {/* Navigation */}
  <h1>
    <Link to={"/"}>
    <a className="home">
      GamesPlay
    </a>
    </Link>
  </h1>
  <nav>
    <Link to={"/games"}>
    <a>All games</a>
    </Link>
    <Link to={"/games/create"}>
      <a>Create Game</a>
    </Link>
    <Link to={"/login"}>
    <div id="guest">
      <a>Login</a>
    </div>
    </Link>
    <Link to={"/register"}>
    <div id="guest">
      <a>Register</a>
    </div>
    </Link>
    {/* Logged-in users */}
    <div id="user">
      <a>Logout</a>
    </div>
  </nav>
</header>

  )
}
