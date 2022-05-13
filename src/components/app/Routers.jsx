import { Route, Switch } from "react-router-dom";
import routes from "../../config/routes";

export default function Routers() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          path={route.path}
          key={route.path}
          exact={route.exact}
          component={route.view}
        />
      ))}
    </Switch>
  );
}
