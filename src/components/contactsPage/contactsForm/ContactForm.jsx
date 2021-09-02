import {
  Form,
  Label,
  Input,
  List,
  Item,
} from "../../registrationPage/RegistrationPage.styled";
import { Container } from "../../../general/styledComponents/Container.styled";

import React from "react";

export default function ContactForm() {
  return (
    <Container>
      <Form>
        <List>
          <Item>
            <Label></Label>
            <Input />
          </Item>
        </List>
      </Form>
    </Container>
  );
}
