import React, { useState } from "react";
import styles from "./DestinationBody.module.css";
import Image from "next/image";
import data from "../../data/data.json";
import PageHeader from "../PageHeader/PageHeader";
import Head from "next/head";

const DestinationBody = () => {
  const [activeDestinationIndex, setActiveDestinationIndex] =
    useState<number>(0);
  const destinationData = data.destinations[activeDestinationIndex];

  return (
    <>
      <Head>
        <title>Destination</title>
        <meta
          name="description"
          content="The destinations that space-tourism can take you"
        />
      </Head>
      <PageHeader pageHeader="PICK YOUR DESTINATION" pageIndex="01" />
      <div className={styles.contentWrapper}>
        <div className={styles.bodyWrapper}>
          <section className={styles.firstSection}>
            <div className={styles.destinationImageWrapper}>
              <Image
                src={destinationData.images.png}
                alt={destinationData.name}
                width={700}
                height={700}
                className={styles.destinationImage}
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
            <hr className={styles.line} />
            <div className={styles.travelInfos}>
              <div className={styles.travelDistance}>
                <h4>AVG. DISTANCE</h4>
                <span>{destinationData.distance}</span>
              </div>
              <div className={styles.travelTime}>
                <h4>EST. TRAVEL TIME</h4>
                <span>{destinationData.travel}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default DestinationBody;
