import { Container, ContainerCredito, ContainerAll } from "./styles";

import Input from "../../components/Input";
import Button from "../../components/Button";
import MenuLeft from "../../components/leftMenu";
import { useNavigate } from "react-router-dom";
import CardRequest from "../../components/CardRequest";
import CardResponse from "../../components/CardResponse";
const Creditos = ({ list }) => {
  const history = useNavigate();

  return (
    <ContainerAll>
      <MenuLeft />

      <Container>
        <div className="header">
          <h1>Crédito</h1>

          <div className="saldo">
            <div className="saldo-disponivel">
              <h2>Saldo disponivel:</h2>{" "}
              <h3>
                R${list.reduce((acc, actual) => acc + +actual, 0).toFixed(2)}
              </h3>
            </div>
            <div className="info">
              <p>
                Aprovisionado: <b>R$99.700,00</b>
              </p>
              <p>
                Dias pendentes: <b>R$30.000,00</b>
              </p>
            </div>
          </div>
        </div>
        <ContainerCredito>
          <div className="search">
            <div className="inputs">
              <Input placeholder="Pesquisar" id="inputSearch" />
            </div>
            <div className="inputs">
              <Input className="i1" placeholder="Pesquisar Data" />
            </div>
            <div className="ctn-button">
              <Button orangeSchema onClick={() => history("saldo")}>
                Adcionar Saldo
              </Button>
            </div>
          </div>
          <CardRequest />
          <CardResponse list={list} />
        </ContainerCredito>
      </Container>
    </ContainerAll>
  );
};

export default Creditos;
