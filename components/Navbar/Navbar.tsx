import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import { pages } from "../../constants/pages";
import { SideNavContext } from "../../context/SidebarContext";

const Navbar = () => {
  const router = useRouter();
  const isSidebarOpen = useContext(SideNavContext);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {pages.map((page) => {
          return (
            <li
              key={page.index}
              className={`${styles.navListItem} ${
                router.pathname === page.path ? styles.active : styles.passive
              }`}
            >
              <Link href={page.path}>
                <a className={styles.listItemIndex}>
                  <b>{page.index}</b> {page.name}
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
