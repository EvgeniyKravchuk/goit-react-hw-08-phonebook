import styled from "@emotion/styled";

export const List = styled.ul`
  width: 100%;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: 50px;
`;

export const Item = styled.li`
  width: 400px;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid black;

  background-color: whitesmoke;

  &:nth-last-of-type(n + 2) {
    margin-bottom: 20px;
  }
`;

export const DeleteButton = styled.button`
  width: 70px;
  height: 98px;

  margin-left: auto;
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 600;

  &:not(:last-of-type) {
    border-bottom: 1px solid black;
  }
`;

export const TextWrapper = styled.div`
  width: 328px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
