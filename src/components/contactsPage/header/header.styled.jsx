import styled from "@emotion/styled";

export const Header = styled.header`
  width: 100vw;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: whitesmoke;

  border-bottom: 1px solid black;
`;

export const Nav = styled.nav`
  height: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

export const NavItem = styled.li`
  width: 200px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-of-type) {
    margin-right: 20px;
  }
`;

export const TextItem = styled.p`
  width: 120px;
  text-align: center;

  font-size: 20px;
  font-weight: 600;
`;

export const UserWrapper = styled.div`
  position: absolute;

  padding-left: 50px;
  padding-top: 185px;

  justify-content: center;
  flex-direction: column;

  top: -175px;
  right: -175px;

  width: 350px;
  height: 350px;

  border: 1px solid black;

  border-radius: 50%;

  background-color: whitesmoke;
`;
