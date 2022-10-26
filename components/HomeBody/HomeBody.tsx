import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "./HomeBody.module.css";

const HomeBody = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Space tourism gives you the experience of excellent journey to space"
        />
      </Head>
      <div className={styles.contentWrapper}>
        <section className={styles.firstSection}>
          <h3 className={styles.subTitle}>SO, YOU WANT TO TRAVEL TO</h3>
          <h1 className={styles.mainTitle}>SPACE</h1>
          <p className={styles.bodyText}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <section className={styles.secondSection}>
          <Link href="/destination">
            <button className={styles.exploreBtn}>EXPLORE</button>
          </Link>
        </section>
      </div>
    </>
  );
};

export default HomeBody;
