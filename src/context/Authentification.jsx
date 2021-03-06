import { createContext, useEffect, useState } from "react";

const Auth = createContext();

function Provider({ children }) {
  const [token, setToken] = useState(
    window.localStorage.getItem("token" || null)
  );
  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", JSON.stringify(token));
    } else {
      window.localStorage.removeItem("token");
    }
  }, [token]);

  return <Auth.Provider value={{ token, setToken }}>{children}</Auth.Provider>;
}

export { Provider, Auth };
