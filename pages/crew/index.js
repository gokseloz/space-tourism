import React from "react";
import Layout from "../../components/Layout/Layout";
import CrewBody from "../../components/CrewBody/CrewBody";
import styles from "./Crew.module.css";

const CrewPage = () => {
  return (
    <div className={styles.crewContainer}>
      <Layout>
        <CrewBody />
      </Layout>
    </div>
  );
};

export default CrewPage;
