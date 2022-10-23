import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import style from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={style.layout}>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
