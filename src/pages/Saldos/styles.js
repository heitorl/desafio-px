import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--g50);
  width: 100%;
  height: 100vh;
  flex-direction: column;

  h1 {
    color: var(--g200);
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  align-items: center;
  height: 75%;
  width: 35%;
  .form {
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 70%;

    .buttons {
      display: flex;
      width: 100%;
      height: 60px;
      padding-top: 40px;
      button + button {
        margin-left: 15px;
      }
    }
  }
  span {
    margin-top: 40px;
  }
  a {
    color: var(--orange);
    font-weight: bold;
  }
`;
