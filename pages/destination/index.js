import React from "react";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import styles from "./Destination.module.css";
import DestinationBody from "../../components/DestinationBody/DestinationBody";

const DestinationPage = () => {
  return (
    <div className={styles.destinationContainer}>
      <Layout>
        <DestinationBody />
      </Layout>
    </div>
  );
};

export default DestinationPage;
