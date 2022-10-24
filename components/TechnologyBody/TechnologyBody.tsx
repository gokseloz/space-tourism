import React, { useState } from "react";
import data from "../../data/data.json";
import styles from "./TechnologyBody.module.css";
import Image from "next/image";
import PageHeader from "../PageHeader/PageHeader";

const TechnologyBody = () => {
  const [activeTechnologyIndex, setActiveTechnologyIndex] = useState<number>(0);
  const technologyData = data.technology[activeTechnologyIndex];

  return (
    <div className={styles.contentWrapper}>
      <section className={styles.firstSection}>
        <PageHeader pageHeader="SPACE LAUNCH 101" pageIndex="03" />

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
          <Image
            src={technologyData.images.landscape}
            alt={technologyData.name}
            width={1500}
            height={1500}
            className={styles.technologyImage}
          />
        </div>
      </section>
    </div>
  );
};

export default TechnologyBody;
