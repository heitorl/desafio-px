import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .ctn-img {
  }
  .ctn-button {
    width: 280px;
  }

  .ctn-msg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    h1 {
      font-size: 40px;
      color: #424242;
      text-align: center;
      font-weight: bold;
    }
  }
`;
