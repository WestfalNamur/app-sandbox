import type { NextPage } from "next";
import Paper from "@material-ui/core/Paper";

import styles from "../styles/Home.module.css";

import SurfacePointTable from "../features/tables/SurfacePointTable";

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Some Content</h1>
      <Paper>
        <SurfacePointTable />
      </Paper>
    </div>
  );
};

export default IndexPage;
