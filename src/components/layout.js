import React from "react";
import "../css/layout.css";
import Navbar from "./navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import ReactDOM from "react-dom";
import disableScroll from "disable-scroll";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      disableScroll.on();
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
