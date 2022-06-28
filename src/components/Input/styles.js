import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
`;

export const ContainerInput = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid #cbcbcb;
  padding: 8px, 16px, 8px, 16px;
  width: 100%;
  display: flex;
  transition: 0.4s;
  height: 48px;

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--black);
    &::placeholder {
      padding-left: 5px;
    }
  }
`;
