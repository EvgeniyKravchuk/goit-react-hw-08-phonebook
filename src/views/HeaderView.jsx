import React from "react";
import { Header } from "../components/contactsPage/header/header.styled";
import Navigation from "../components/contactsPage/header/Navigation";
import Authorization from "../components/contactsPage/header/Authorization";
import UserMenu from "../components/contactsPage/header/UserMenu";
import * as authSelectors from "../redux/auth/auth-selectors";
import { useSelector } from "react-redux";

export default function HeaderView() {
  const state = useSelector((state) => state);
  const isLogIn = authSelectors.isLogIn(state);

  return (
    <Header>
      <Navigation />
      {isLogIn ? <UserMenu /> : <Authorization />}
    </Header>
  );
}
