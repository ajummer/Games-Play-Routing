import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext.js";
import { useForm } from "../../hooks/useForm.js";
import { Link } from "react-router-dom";

export default function Login() {
  const { onLoginHandler } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    onLoginHandler
  );

  return (
    <section id="login-page" className="auth">
      <form id="login" method="POST" onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo" />
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Sokka@gmail.com"
            value={values.email}
            onChange={changeHandler}
          />
          <label htmlFor="login-pass">Password:</label>
          <input
            type="password"
            id="login-password"
            name="password"
            value={values.password}
            onChange={changeHandler}
          />
          <input type="submit" className="btn submit" defaultValue="Login" />
          <p className="field">
            <span>
              If you don't have profile click <Link to={"/register"}>here</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
}
