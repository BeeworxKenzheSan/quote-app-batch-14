import { Outlet } from "react-router-dom";
import Header from "../copmonents/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
