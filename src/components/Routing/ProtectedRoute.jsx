import { getUser } from "../../services/userServices";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  return getUser() ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
