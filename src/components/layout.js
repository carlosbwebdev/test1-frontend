import React from "react";
import "../css/layout.css";
import Navbar from "./navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (setIsOpen) {
      global.document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
