import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Form,
  Label,
  Input,
  List,
  Item,
} from "../../registrationPage/RegistrationPage.styled";
import { Button } from "../../../general/styledComponents/Buttons.styled";
import { addContact } from "../../../redux/contacts/contacts-operations";
import { changeFilter } from "../../../redux/contacts/contacts-actions";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  function handleChange(evt) {
    switch (evt.target.name) {
      case "name":
        setName(evt.target.value);
        break;
      case "number":
        setNumber(evt.target.value);
        break;

      default:
        break;
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    dispatch(addContact({ name, number }));
    clearInputs();
  }

  function clearInputs() {
    setName("");
    setNumber("");
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <List>
          <Item>
            <Label htmlFor="name">Имя:</Label>
            <Input
              type="text"
              name="name"
              id="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              placeholder="Введите имя"
              onChange={handleChange}
              value={name}
            />
          </Item>

          <Item>
            <Label htmlFor="number">Телефон:</Label>
            <Input
              type="tel"
              name="number"
              id="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              placeholder="Введите номер телефона"
              onChange={handleChange}
              value={number}
            />
          </Item>
        </List>

        <Button type="submit">Подтвердить</Button>
        <Button type="button">Очистить</Button>
      </Form>

      <Label htmlFor="filter">Поиск:</Label>
      <Input
        name="filter"
        id="filter"
        placeholder="Начните ввод имени для поиска"
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
      />
    </>
  );
}
