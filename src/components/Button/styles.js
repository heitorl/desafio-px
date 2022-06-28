import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.orangeSchema ? "#FF7E2E" : "#FAFAFA")};
  color: ${(props) => (props.orangeSchema ? "#FAFAFA" : "#FF7E2E")};
  height: 100%;
  width: 100%;
  border-radius: 8px;
  border: solid 2px var(--orange);
  font-family: "Poppins";
  font-weight: bold;
  margin-top: 16px;
`;
