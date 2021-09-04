import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  List,
  Item,
  DeleteButton,
  Text,
  TextWrapper,
} from "./ContactsList.styled";
import {
  getContacts,
  getFilter,
} from "../../../redux/contacts/contacts-selectors";
import {
  fetchContacts,
  deleteContact,
} from "../../../redux/contacts/contacts-operations";

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(({ name }) => name.includes(filter));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function deleteButtonClick(evt) {
    const { id } = evt.target;
    const updatedContacts = contacts.filter((item) => item.id !== id);

    const deleteParams = {
      id: id,
      contacts: updatedContacts,
    };

    dispatch(deleteContact(deleteParams));
  }

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <TextWrapper>
              <Text>{name}</Text>
              <Text>{number}</Text>
            </TextWrapper>
            <DeleteButton id={id} onClick={deleteButtonClick}>
              Удалить
            </DeleteButton>
          </Item>
        );
      })}
    </List>
  );
}
