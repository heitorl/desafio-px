import Routes from "./routes";
import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Routes />
    </>
  );
}

export default App;
