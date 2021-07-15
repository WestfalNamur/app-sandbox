import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

const IndexPage: NextPage = () => {
  return (
    <>
      <div className={styles.divNavbar}></div>
      <div className={styles.divMain}>
        <div className={styles.divSidebar}></div>
        <div className={styles.featureView}></div>
      </div>
    </>
  );
};

export default IndexPage;
