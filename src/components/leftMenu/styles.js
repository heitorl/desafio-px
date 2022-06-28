import styled from "styled-components";
export const LeftMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 8%;
  height: 90vh;
  /* align-items: center; */
  margin-top: 30px;
  background-color: var(--white);
  box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.1);
  border-radius: 0px 16px 16px 0px;

  .img-menu {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    align-items: center;
    img {
      margin-top: 19px;
      cursor: pointer;
    }
    .menu {
      width: 40px;
    }
    .avatar {
      width: 68px;
    }
    .money {
      width: 40px;
      margin-top: 50px;
    }

    .bar {
      border: 1px solid #cccccc;
      width: 70px;
      margin-top: 60px;
    }
    .logout {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      width: 100%;
      height: 100%;
      margin-bottom: 30px;

      img {
        width: 30px;
      }
    }
  }
`;
