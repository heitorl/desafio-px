import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, ContainerForm } from "./styles";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const Saldos = ({ addValue }) => {
  const history = useNavigate();
  const [valor, setValor] = useState("");

  return (
    <Container>
      <ContainerForm>
        <div className="form">
          <Input label="Forma de pagamento" value="Pix" disabled />
          <Input
            label="Valor"
            placeholder="valor"
            value={valor}
            onChange={(event) => setValor(event.target.value)}
          />
          <div className="buttons">
            <Button onClick={() => addValue(valor)}>Adcionar Saldo</Button>
            <Button orangeSchema onClick={() => history("/qrcode")}>
              Gerar QRcode
            </Button>
          </div>
        </div>
        <span>
          Voltar para pagina de{" "}
          <Link to="/" id="link">
            Créditos
          </Link>
        </span>
      </ContainerForm>
    </Container>
  );
};

export default Saldos;
