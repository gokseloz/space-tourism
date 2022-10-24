import React from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Technology.module.css";
import TechnologyBody from "../../components/TechnologyBody/TechnologyBody";

const TechnologyPage = () => {
  return (
    <div className={styles.technologyContainer}>
      <Layout>
        <TechnologyBody />
      </Layout>
    </div>
  );
};

export default TechnologyPage;
