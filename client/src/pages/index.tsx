import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

const IndexPage: NextPage = () => {
  return (
    <>
      <div className={styles.divNavbar}></div>
      <div className={styles.divMain}>
        <div className={styles.divSidebar}></div>
        <div className={styles.featureView}>
          <div className={styles.flexContainer}>
            <div className={styles.divMainChild}></div>
            <div className={styles.divMainChild}></div>
            <div className={styles.divMainChild}></div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.divMainChild}></div>
            <div className={styles.divMainChild}></div>
            <div className={styles.divMainChild}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
