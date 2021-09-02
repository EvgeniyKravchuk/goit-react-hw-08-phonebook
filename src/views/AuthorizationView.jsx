import React from "react";
import { Container } from "../general/styledComponents/Container.styled";
import AuthorizationForm from "../components/authorizationPage/AuthorizationForm";

export default function AuthorizationView() {
  return (
    <Container>
      <AuthorizationForm />
    </Container>
  );
}
