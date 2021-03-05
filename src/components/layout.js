import React from "react";
import "../css/layout.css";
import Navbar from "./navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import ReactDOM from "react-dom";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    // const element = <body></body>;
    // if (!isOpen) {
    //   ReactDOM.render(element, document.getElementById("body"));
    // }
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
