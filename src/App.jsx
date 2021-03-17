import React from "react";
import { Switch, Route } from "react-router-dom";
import { sankhajaRoutes } from "./pages/Sankhaja/routes";
import { routes } from "./routes/AppRoutes";

function App() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact
          component={route.component}
        />
      ))}

      {sankhajaRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact
          component={route.component}
        />
      ))}
    </Switch>
  );
}

export default App;
