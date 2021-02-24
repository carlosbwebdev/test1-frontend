import React from "react";
import "../css/layout.css";
import Navbar from "./navbar";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
