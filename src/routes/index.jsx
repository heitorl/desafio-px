import { Routes as RoutesReactRoutes, Route } from "react-router-dom";
import Creditos from "../pages/Creditos";
import Saldos from "../pages/Saldos";

const Routes = () => {
  return (
    <RoutesReactRoutes>
      <Route path="/" element={<Creditos />} />
      <Route path="/saldo" element={<Saldos />} />
    </RoutesReactRoutes>
  );
};

export default Routes;
