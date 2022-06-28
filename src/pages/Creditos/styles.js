import styled from "styled-components";

export const ContainerAll = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
`;

export const Container = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  background-color: var(--g100);
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;

    h1 {
      font-size: 37px;
      font-weight: bold;
      color: #424242;
    }
    .saldo {
      width: 440px;
      padding: 10px;
      background-color: var(--white);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      text-align: right;

      .saldo-disponivel {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        h2 {
          font-size: 28px;
        }
        h3 {
          font-size: 24px;

          color: #00ad17;
          font-weight: bold;
        }
      }
      .info {
        display: flex;
        justify-content: space-evenly;
        font-size: 14px;
        p {
          margin-left: 2px;
        }
      }
    }
  }
`;

export const ContainerCredito = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--g50);
  box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 80%;
  width: 90%;

  .search {
    width: 92%;
    display: flex;
    justify-content: flex-start;

    .inputs {
      width: 60%;
      display: flex;
      margin: 20px;

      input {
        width: 100%;
      }
    }
  }
  .ctn-button {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
    button {
      width: 160px;
    }
  }
`;
