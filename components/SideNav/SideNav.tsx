import React, { useContext, useLayoutEffect } from "react";
import styles from "./SideNav.module.css";
import { pages } from "../../constants/pages";
import { useRouter } from "next/router";
import { SideNavContext } from "../../context/SidebarContext";
import Link from "next/link";

const SideNav = () => {
  const router = useRouter();
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SideNavContext);

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth > 768) {
        console.log("haha");
        setIsSidebarOpen(false);
      }
    }
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <ul
      className={styles.navList}
      style={
        isSidebarOpen
          ? { transform: "translateX(0%)" }
          : { transform: "translateX(100%)" }
      }
    >
      {pages.map((page) => {
        return (
          <li
            onClick={() => setIsSidebarOpen(false)}
            key={page.index}
            className={`${styles.navListItem} ${
              router.pathname === page.path ? styles.active : styles.passive
            }`}
          >
            <Link href={page.path}>
              <a className={styles.sideNavlistItemIndex}>
                <b>{page.index}</b> {page.name}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SideNav;
