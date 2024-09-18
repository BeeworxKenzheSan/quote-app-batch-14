import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ Component, isAuth, token, to }) => {
  if (!isAuth && !token) {
    return Component;
  }

  return <Navigate to={to} replace />;
};

export default ProtectedRoute;
