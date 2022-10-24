import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 2">
            <circle id="Oval" cx="24" cy="24" r="24" fill="white" />
            <path
              id="Path"
              d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z"
              fill="#0B0D17"
            />
          </g>
        </svg>
      </div>
      <div className={styles.line}></div>
      <Navbar />
    </header>
  );
};

export default Header;