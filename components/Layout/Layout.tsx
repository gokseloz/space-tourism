import Header from "../Header/Header";
import styles from "./Layout.module.css";
import { useEffect, useState } from "react";

const Layout = ({ children, bg }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
