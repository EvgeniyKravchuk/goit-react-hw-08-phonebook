import { Switch, Redirect } from "react-router-dom";
import "./App.css";
import HeaderView from "./views/HeaderView";
import HomeView from "./views/HomeView";
import ContactsView from "./views/ContactsView";
import RegistrationView from "./views/RegistrationView";
import AuthorizationView from "./views/AuthorizationView";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentUser } from "./redux/auth/auth-operations";
import PrivateRoute from "./components/PrivateRoute";
import PublickRoute from "./components/PublickRoute";
import * as authSelectors from "./redux/auth/auth-selectors";

function App() {
  const token = useSelector(authSelectors.getToken);
  const isFetchingUser = useSelector(authSelectors.getIsFetchingUser);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, token]);

  return (
    <>
      {!isFetchingUser && (
        <>
          <HeaderView />
          <Switch>
            <PublickRoute exact path="/">
              <HomeView />
            </PublickRoute>

            <PrivateRoute path="/contacts">
              <ContactsView />
            </PrivateRoute>

            <PublickRoute exact path="/registr" restricted>
              <RegistrationView />
            </PublickRoute>

            <PublickRoute exact path="/login" restricted>
              <AuthorizationView />
            </PublickRoute>

            <Redirect to="/" />
          </Switch>
        </>
      )}
    </>
  );
}

export default App;
