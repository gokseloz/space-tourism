import React, { useState } from "react";
import data from "../../data/data.json";
import styles from "./TechnologyBody.module.css";
import Image from "next/image";
import PageHeader from "../PageHeader/PageHeader";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";

const TechnologyBody = () => {
  const [activeTechnologyIndex, setActiveTechnologyIndex] = useState<number>(0);
  const technologyData = data.technology[activeTechnologyIndex];

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  return (
    <>
      <Head>
        <title>Technology</title>
        <meta
          name="description"
          content="The technologies that space-tourism have to give you a comfortable journey"
        />
      </Head>
      <PageHeader pageHeader="SPACE LAUNCH 101" pageIndex="03" />

      <div className={styles.contentWrapper}>
        <section className={styles.firstSection}>
          <div className={styles.bodyWrapper}>
            <div className={styles.technologyBtnWrapper}>
              {data.technology.map((tech, index) => (
                <button
                  key={index}
                  className={`${styles.technologyBtn} ${
                    activeTechnologyIndex === index ? styles.activeBtn : ""
                  }`}
                  onClick={() => setActiveTechnologyIndex(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className={styles.bodyTextWrapper}>
              <h3 className={styles.subTitle}>THE TERMINOLOGY...</h3>
              <h1 className={styles.mainTitle}>
                {technologyData.name.toUpperCase()}
              </h1>
              <p className={styles.bodyText}>{technologyData.description}</p>
            </div>
          </div>
        </section>

        <section className={styles.secondSection}>
          <div className={styles.technologyImageWrapper}>
            {isTablet ? (
              <Image
                src={technologyData.images.landscape}
                alt={technologyData.name}
                width={1024}
                height={414}
                className={styles.technologyImageLandscape}
                objectFit="cover"
              />
            ) : (
              <Image
                src={technologyData.images.portrait}
                alt={technologyData.name}
                width={518}
                height={527}
                className={styles.technologyImagePortrait}
              />
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default TechnologyBody;
