import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  .title h1 {
    font-size: 40px;
    color: #424242;
    margin-bottom: 30px;
  }

  .qr-code {
    display: flex;
    height: 400px;
    justify-content: center;
    width: 30%;
    flex-direction: column;
    align-items: center;

    .ctn-button {
      width: 100%;
      height: 70px;
      margin-top: 20px;
    }

    .ctn-text {
      width: 100%;
      display: flex;
      height: 60px;
      justify-content: center;
      margin-top: 20px;

      .text {
        width: 70%;
        height: 100%;
        display: flex;
        font-size: 14px;
        background-color: #eeeeee;
        text-align: left;
        p {
          margin-left: 5px;
        }
      }

      .ctn-img {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--orange);
        width: 20%;
        height: 100%;

        img {
          width: 30px;
        }
      }
    }
  }
`;
