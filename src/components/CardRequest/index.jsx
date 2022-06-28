import { Container } from "./styles";
import imgSort from "../../assets/Sort.svg";

const CardRequest = () => {
  return (
    <Container>
      <div className="requests">
        <ul>
          <li>
            <p>ID</p>
            <img src={imgSort} alt="sort" />
          </li>
          <li>
            <p>Destino</p>
            <img src={imgSort} alt="sort" />
          </li>
          <li>
            <p>Valor</p>
            <img src={imgSort} alt="sort" />
          </li>
          <li>
            <p>Solicitação</p>
            <img src={imgSort} alt="sort" />
          </li>
          <li>
            <p>Forma pgto</p>
            <img src={imgSort} alt="sort" />
          </li>
          <li>
            <p>Vencimento</p>
            <img src={imgSort} alt="sort" />
          </li>
          <li>
            <p>Status</p>
            <img src={imgSort} alt="sort" />
          </li>
        </ul>
      </div>
      <div className="border"></div>
    </Container>
  );
};

export default CardRequest;
