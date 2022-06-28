import { Container } from "./styles";

const CardResponse = ({ list }) => {
  return (
    <Container>
      <div className="requests">
        {list.map((item, i) => (
          <ul>
            <li>{i + 1}</li>
            <li>Despesa</li>
            <li>{item}</li>
            <li>{new Date().toLocaleDateString("en-GB")}</li>
            <li>Pix</li>
            <li>{new Date().toLocaleDateString("en-GB")}</li>
            <li className="status">
              <p>Em Pagamento</p>
            </li>
          </ul>
        ))}
      </div>
    </Container>
  );
};

export default CardResponse;
