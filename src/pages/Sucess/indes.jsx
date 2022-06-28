import { Container } from "./styles";
import imgSucess from "../../assets/sign-up-okay_1.svg";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Sucess = () => {
  const history = useNavigate();
  return (
    <Container>
      <div className="ctn-img">
        <img src={imgSucess} alt="sucesso" />
      </div>
      <div className="ctn-msg">
        <h1>O PIX foi pago com sucesso!</h1>
      </div>
      <div className="ctn-button">
        <Button orangeSchema onClick={() => history("/")}>
          Voltar
        </Button>
      </div>
    </Container>
  );
};

export default Sucess;
