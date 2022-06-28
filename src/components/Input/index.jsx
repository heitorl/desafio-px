import { Container, ContainerInput } from "./styles";

const Input = ({ label = false, img, ...rest }) => {
  return (
    <Container>
      <div>{label}</div>
      <ContainerInput>
        <input {...rest} />
      </ContainerInput>
    </Container>
  );
};

export default Input;
