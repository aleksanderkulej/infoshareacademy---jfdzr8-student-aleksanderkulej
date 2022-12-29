import { Outlet } from "react-router";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <hr/>
      <Outlet />
    </>
  );
};

export default Layout;
