import { useState } from "react";
import { Form, Label, Input, List, Item } from "./RegistrationPage.styled";
import { Button } from "../../general/styledComponents/Buttons.styled";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth-operations";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  function handleChange(evt) {
    const { name, value } = evt.target;

    switch (name) {
      case "name":
        return setName(value);

      case "password":
        return setPassword(value);

      case "email":
        return setEmail(value);

      default:
        return;
    }
  }

  function handleSubmit(evt) {
    const userData = { name, email, password };

    evt.preventDefault();
    dispatch(register(userData));
    clearInputs();
  }

  function clearInputs() {
    setName("");
    setPassword("");
    setEmail("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <List>
        <Item>
          <Label htmlFor="name">Имя:</Label>
          <Input
            name="name"
            id="name"
            placeholder="Введите имя"
            value={name}
            onChange={handleChange}
          />
        </Item>

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
