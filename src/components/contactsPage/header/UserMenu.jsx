import React from "react";
import { Button } from "../../../general/styledComponents/Buttons.styled";
import { TextItem, UserWrapper } from "./header.styled";
import { useDispatch, useSelector } from "react-redux";
import * as authSelectors from "../../../redux/auth/auth-selectors";
import { logOut } from "../../../redux/auth/auth-operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const token = authSelectors.getToken(state);

  function handleClick() {
    dispatch(logOut(token));
  }

  return (
    <UserWrapper>
      <TextItem>Добро пожаловать!</TextItem>
      <Button onClick={handleClick}>Выйти</Button>
    </UserWrapper>
  );
}
