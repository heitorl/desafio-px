import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  .requests {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    ul {
      display: flex;
      justify-content: space-around;
      list-style: none;
      border-bottom: 1px solid var(--g200);
      width: 95%;
      margin-top: 25px;
    }
    .status {
      background-color: #ffefc5;
      color: #b78811;
      padding: 8px, 16px, 8px, 16px;
      font-weight: bold;
      font-size: 16px;
      border-radius: 4px;
    }
    li {
      display: flex;
      width: 90%;
      align-items: center;
      justify-content: center;
      margin-bottom: 8px;
      font-size: 16px;
    }
  }
`;
