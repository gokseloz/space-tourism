import React, { useState } from "react";
import styles from "./CrewBody.module.css";
import data from "../../data/data.json";
import PageHeader from "../PageHeader/PageHeader";
import Image from "next/image";
import Head from "next/head";

const CrewBody = () => {
  const [activeCrewIndex, setActiveCrewIndex] = useState<number>(0);
  const crewData = data.crew[activeCrewIndex];
  return (
    <>
      <Head>
        <title>Crew</title>
        <meta
          name="description"
          content="The space-tourism crew that accompany you during the excellent journey"
        />
      </Head>
      <PageHeader pageHeader="MEET YOUR CREW" pageIndex="02" />
      <div className={styles.contentWrapper}>
        <section className={styles.firstSection}>
          <h3 className={styles.subTitle}>{crewData.role.toUpperCase()}</h3>
          <h1 className={styles.mainTitle}>{crewData.name.toUpperCase()}</h1>
          <p className={styles.bodyText}>{crewData.bio}</p>

          <div className={styles.crewBtnWrapper}>
            {data.crew.map((crew, index) => (
              <button
                key={index}
                className={`${styles.crewBtn} ${
                  activeCrewIndex === index ? styles.activeBtn : ""
                }`}
                onClick={() => setActiveCrewIndex(index)}
              />
            ))}
          </div>
        </section>

        <section className={styles.secondSection}>
          <div className={styles.crewImageWrapper}>
            <Image
              src={crewData.images.png}
              alt={crewData.name}
              width={500}
              height={500}
              className={styles.crewImage}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default CrewBody;
