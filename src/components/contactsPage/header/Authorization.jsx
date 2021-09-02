import React from "react";
import { NavLink } from "react-router-dom";
import { NavList, NavItem } from "./header.styled";

export default function Authorization() {
  return (
    <NavList>
      <NavItem>
        <NavLink to="/registr" activeStyle={{ color: "orange" }}>
          Регистрация
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/login" activeStyle={{ color: "orange" }}>
          Авторизация
        </NavLink>
      </NavItem>
    </NavList>
  );
}
