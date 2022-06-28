import { Routes as RoutesReactRoutes, Route } from "react-router-dom";
import Creditos from "../pages/Creditos";
import Saldos from "../pages/Saldos";
import { useState } from "react";
import { toast } from "react-toastify";
import QrCode from "../pages/Qrcode";
import Sucess from "../pages/Sucess/indes";
import { useNavigate } from "react-router-dom";
const Routes = () => {
  const history = useNavigate();
  const [list, setList] = useState([]);

  const addValue = (newValue) => {
    setList([...list, newValue]);
    toast.success("Saldo adcionado!");
    history("/sucesso");
  };
  console.log(list);
  return (
    <RoutesReactRoutes>
      <Route path="/" element={<Creditos list={list} />} />
      <Route path="/saldo" element={<Saldos addValue={addValue} />} />
      <Route path="/qrcode" element={<QrCode />} />
      <Route path="/sucesso" element={<Sucess />} />
    </RoutesReactRoutes>
  );
};

export default Routes;
