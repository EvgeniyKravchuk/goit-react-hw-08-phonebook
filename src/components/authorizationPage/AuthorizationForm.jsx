import { useState } from "react";
import {
  Form,
  Label,
  Input,
  List,
  Item,
} from "../registrationPage/RegistrationPage.styled";
import { Button } from "../../general/styledComponents/Buttons.styled";
import { logIn } from "../../redux/auth/auth-operations";
import { useDispatch } from "react-redux";

export default function AuthorizationForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  function handleChange(evt) {
    const { name, value } = evt.target;

    switch (name) {
      case "password":
        return setPassword(value);

      case "email":
        return setEmail(value);

      default:
        return;
    }
  }

  function handleSubmit(evt) {
    const userData = { password, email };

    evt.preventDefault();
    dispatch(logIn(userData));
    clearInputs();
  }

  function clearInputs() {
    setPassword("");
    setEmail("");
  }
  return (
    <Form onSubmit={handleSubmit}>
      <List>
        <Item>
          <Label htmlFor="email">Email:</Label>
          <Input
            name="email"
            id="email"
            placeholder="Введите Email"
            value={email}
            onChange={handleChange}
          />
        </Item>

        <Item>
          <Label htmlFor="password">Пароль:</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Введите пароль"
            value={password}
            onChange={handleChange}
          />
        </Item>
      </List>
      <Button type="submit">Подтвердить</Button>
    </Form>
  );
}
