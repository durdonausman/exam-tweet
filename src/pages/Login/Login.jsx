import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../Images/twitter-logo.png";
import { useRef } from "react";

// Custom hooks

import useAuth from "../../hooks/useAuth";

function Login() {
  const [setToken] = useAuth(false);

  const usernameRef = useRef;
  const passwordRef = useRef;
  const handleLogin = (evt) => {
    evt.preventDefault();

    const obj = {
      username: usernameRef.current.value,
    };

    setToken(obj);
  };

  return (
    <section className="login__page">
      <img src={logo} alt="" width="50" height="41" />
      <h2 className="login__heading">Log in to Twitter</h2>
      <form onSubmit={handleLogin} className="login__form">
        <input
          ref={usernameRef}
          className="login__input"
          type="text"
          placeholder="Phone number, email address"
          required
        />
        <input
          ref={passwordRef}
          className="login__input"
          type="password"
          placeholder="Password"
          required
        />
        <button className="login__submit-btn" type="submit">
          Log In
        </button>
      </form>
      <div className="login__links">
        <Link
          className="login__links-link login__password-link"
          to="/forgotPassword"
        >
          Forgot password?
        </Link>
        <Link className="login__links-link login__signup-link" to="/signup">
          Sign up to Twitter
        </Link>
      </div>
    </section>
  );
}

export default Login;
