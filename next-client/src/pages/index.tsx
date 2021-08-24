import type { NextPage } from "next";

import styles from "../styles/Home.module.css";
import Counter from "../features/counter/Counter";

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Hello, World!</h1>
      <Counter />
      <Counter />
    </div>
  );
};

export default IndexPage;
