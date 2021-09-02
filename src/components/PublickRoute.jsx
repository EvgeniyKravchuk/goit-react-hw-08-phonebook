import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";
import * as authSelectors from "../redux/auth/auth-selectors";

export default function PublickRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLogIn = useSelector(authSelectors.isLogIn);
  const shouldRedirect = isLogIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/" /> : children}
    </Route>
  );
}
