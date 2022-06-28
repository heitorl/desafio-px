import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .requests {
    display: flex;
    width: 100%;
    justify-content: center;
    ul {
      display: flex;
      width: 95%;
      justify-content: space-around;
      list-style: none;
    }
    li {
      display: flex;
      align-items: center;
      font-size: 18px;
      justify-content: center;
      width: 90%;
      img {
        width: 12px;
        margin-left: 6px;
      }
    }
  }

  .border {
    margin-top: 20px;
    border-bottom: 1px solid red;
    width: 95%;
  }
`;
