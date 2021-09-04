import "./App.css";
// import { useContext } from "react";
import { Switch } from "react-router-dom";
// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/Signup";
import Feed from "./pages/Feed/feed";

// Auth
// import { Auth } from "./context/Authentification";
import Private from "./routes/Private";
import Public from "./routes/Public";

function App() {
  return (
    <div className="App">
      <Switch>
        <Public path="/login" component={Login} />
        <Private path="/" component={Feed} exact />
        <Private path="/signup" component={Home} />
        <Private path="/signupModal" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
