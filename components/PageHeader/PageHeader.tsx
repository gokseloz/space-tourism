import React from "react";
import styles from "./PageHeader.module.css";

const PageHeader = (props) => {
  return (
    <h3 className={styles.subTitle}>
      <span className={styles.pageIndex}>{props.pageIndex}</span>{" "}
      {props.pageHeader}
    </h3>
  );
};

export default PageHeader;
