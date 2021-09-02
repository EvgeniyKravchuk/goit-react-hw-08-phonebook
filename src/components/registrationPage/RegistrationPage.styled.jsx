import styled from "@emotion/styled";

export const Form = styled.form`
  width: 100%;
`;

export const Label = styled.label`
  font-size: 24px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 500px;
  height: 50px;

  font-size: 24px;
  font-weight: 500;

  border-radius: 5px;

  padding-left: 20px;
`;

export const List = styled.ul`
  margin-bottom: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: baseline;

  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;
