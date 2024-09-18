import { Outlet } from "react-router-dom";
import { AuthHeader } from "../pages/auth/AuthHeader";

const AuthLayout = () => {
  return (
    <>
      <AuthHeader />
      <Outlet />
    </>
  );
};

export default AuthLayout;
