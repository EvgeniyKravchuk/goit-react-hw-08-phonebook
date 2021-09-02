import { NavList, NavItem, Nav } from "./header.styled";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink exact to="/" activeStyle={{ color: "orange" }}>
            Главная
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contacts" activeStyle={{ color: "orange" }}>
            Контакты
          </NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}
