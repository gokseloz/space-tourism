import React, { useState } from "react";
import styles from "./DestinationBody.module.css";
import Image from "next/image";
import data from "../../data/data.json";
import PageHeader from "../PageHeader/PageHeader";

const DestinationBody = () => {
  const [activeDestinationIndex, setActiveDestinationIndex] =
    useState<number>(0);
  const destinationData = data.destinations[activeDestinationIndex];

  return (
    <div className={styles.contentWrapper}>
      <section className={styles.firstSection}>
        <PageHeader pageHeader="PICK YOUR DESTINATION" pageIndex="01" />
        <div className={styles.destinationImage}>
          <Image
            src={destinationData.images.png}
            alt={destinationData.name}
            width={700}
            height={700}
          />
        </div>
      </section>
      <section className={styles.secondSection}>
        <div className={styles.destinationBtnWrapper}>
          {data.destinations.map((destination, index) => (
            <button
              key={index}
              className={`${styles.destinationBtn} ${
                activeDestinationIndex === index ? styles.activeBtn : ""
              }`}
              onClick={() => setActiveDestinationIndex(index)}
            >
              {destination.name.toUpperCase()}
            </button>
          ))}
        </div>
        <h1 className={styles.mainTitle}>
          {destinationData.name.toUpperCase()}
        </h1>
        <p className={styles.description}>{destinationData.description}</p>
      </section>
    </div>
  );
};

export default DestinationBody;
