import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Services from "../components/services";
// import Sidebar from "./sidebar";
// import Footer from "./footer";
export default () => {
  return (
    <Layout>
      <Hero />
      <Services />
    </Layout>
  );
};
