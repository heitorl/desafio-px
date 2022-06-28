import { Container } from "./styles";
import qcode from "../../assets/image_1.svg";
import imgCopy from "../../assets/icon-park-outline_copy.svg";
import Button from "../../components/Button";
const QrCode = () => {
  return (
    <Container>
      <div className="title">
        <h1>QRCode Gerado!</h1>
      </div>

      <div className="qr-code">
        <img src={qcode} alt="qrcode" />

        <div className="ctn-text">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              potenti bibendum Lorem ipsum dolor
            </p>
          </div>
          <div className="ctn-img">
            <img src={imgCopy} alt="ilustre" />
          </div>
        </div>
        <div className="ctn-button">
          <Button orangeSchema>Fechar</Button>
        </div>
      </div>
    </Container>
  );
};
export default QrCode;
