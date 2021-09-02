import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import * as authSelectors from "../redux/auth/auth-selectors";

export default function PrivateRoute({ children, ...routeProps }) {
  const isLogIn = useSelector(authSelectors.isLogIn);

  return (
    <Route {...routeProps}>
      {isLogIn ? children : <Redirect to="/login" />}
    </Route>
  );
}
