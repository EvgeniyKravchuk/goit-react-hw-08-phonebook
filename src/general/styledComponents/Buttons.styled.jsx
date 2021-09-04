import styled from "@emotion/styled";

export const Button = styled.button`
  width: 120px;
  height: 40px;

  cursor: pointer;

  border-radius: 5px;

  &:not(:last-of-type) {
    margin-right: 20px;
  }
`;
