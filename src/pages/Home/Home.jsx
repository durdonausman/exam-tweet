import "./Home.css";
import { Link } from "react-router-dom";
import backImg from "../../Images/back-twitter.png";
import logo from "../../Images/twitter-logo.png";

function Home() {
  return (
    <section className="home-page">
      <div className="home">
        <img src={backImg} alt="" width="640" height="594" />
        <div className="home__main">
          <img src={logo} alt="" width="40" height="31" />
          <h1 className="home__heading">Happening now</h1>
          <p className="home__join">Join Twitter today</p>
          <Link className="link home__google-log" to="/google">
            Sign up with Google
          </Link>
          <br />
          <Link className="link home__apple-log" to="/Apple">
            Sign up with Apple
          </Link>
          <br />
          <Link className="link home__email-log" to="/email">
            Sign up with phone or email
          </Link>
          <p className="home__cookie">
            By singing up you agree to the
            <span className="home__cookie-link">Terms of Service </span> and
            <span className="home__cookie-link"> Privacy Policy</span>,
            including <span className="home__cookie-link">Cookie Use</span>.
          </p>
          <div className="home__login">
            <p className="home__login-account">Already have an account?</p>
            <Link className="home__login-link" to="/login">
              Log in
            </Link>
          </div>
        </div>
      </div>
      <nav className="home__nav">
        <ul className="home__nav-list">
          <li className="home__nav-list-item">Help Center</li>
          <li className="home__nav-list-item">Terms of Service</li>
          <li className="home__nav-list-item">Privacy Policy</li>
          <li className="home__nav-list-item">Cookie Policy</li>
          <li className="home__nav-list-item">About</li>
          <li className="home__nav-list-item">Ads info</li>
          <li className="home__nav-list-item">Blog</li>
          <li className="home__nav-list-item">Status</li>
          <li className="home__nav-list-item">Carrers</li>
          <li className="home__nav-list-item">Brand Resources</li>
          <li className="home__nav-list-item">Advertsing</li>
          <li className="home__nav-list-item">Marketing</li>
          <li className="home__nav-list-item">Twitter for Business</li>
          <li className="home__nav-list-item">Developers</li>
          <li className="home__nav-list-item">Directory</li>
          <li className="home__nav-list-item">Settings</li>
          <li className="home__nav-list-item">© 2021 Twitter, Inc.</li>
        </ul>
      </nav>
    </section>
  );
}

export default Home;
