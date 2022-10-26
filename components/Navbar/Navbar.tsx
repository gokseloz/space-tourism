import Link from "next/link";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import { pages } from "../../constants/pages";
import { SideNavContext } from "../../context/SidebarContext";
import SideNav from "../SideNav/SideNav";

const Navbar = () => {
  const router = useRouter();
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SideNavContext);

  return (
    <nav className={styles.navbar}>
      <div
        className={styles.hamburgerMenuIcon}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
              <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
            </g>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
            </g>
          </svg>
        )}
      </div>
      <SideNav />
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
