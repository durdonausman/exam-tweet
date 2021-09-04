import { Redirect, Route } from "react-router-dom";

// Custom Hooks
import useAuth from "../hooks/useAuth";

function Private(props) {
  const [token] = useAuth(true);

  if (token) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
}

export default Private;
