import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const router = useRouter();

  const navOptions = [
    {
      route: "/",
      name: "home",
    },
    {
      route: "/destination",
      name: "destination",
    },
    {
      route: "/crew",
      name: "crew",
    },
    {
      route: "/technology",
      name: "technology",
    },
  ];

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {navOptions.map((option, index) => {
          return (
            <li
              key={index}
              className={`${styles.navListItem} ${
                router.pathname === option.route
                  ? styles.active
                  : styles.passive
              }`}
            >
              <Link href={option.route}>
                <a className={styles.listItemIndex}>
                  0{index} {option.name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
