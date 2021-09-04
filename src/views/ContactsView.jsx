import React from "react";
import ContactForm from "../components/contactsPage/contactsForm/ContactForm";
import { Container } from "../general/styledComponents/Container.styled";
import ContactList from "../components/contactsPage/contactsList/ContactList";

export default function ContactsView() {
  return (
    <Container>
      <ContactForm />
      <ContactList />
    </Container>
  );
}
