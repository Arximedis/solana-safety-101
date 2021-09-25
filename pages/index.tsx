import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import classNames from "classnames";
import styles from "../styles/Home.module.css";
import _ from "lodash";

import ListHeader from "../components/ListHeader";
import ListContent from "../components/ListContent";
import DummyData from "./api/dummy-data.json";

const Home: NextPage = () => {
  const [data, setData] = useState(Array());
  useEffect(() => {
    // try {
    //   fetch("./api/dataaa")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setData(data);
    //     });
    // } catch (error) {
    //   console.log(error);
    // }
    // Will uncomment later once API ready.
    setData(_.sortBy(DummyData, ["domain", "status"], ["asc", "asc"]));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Solana Safety 101</title>
        <meta name="description" content="Community maintained phishing and scams list." />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      </Head>
      <header className={styles.header}>
        <div className={classNames(styles.imageContainer, styles.headerImage)}>
          <img src="/solana-logo.png" alt="Solana Logo" />
        </div>
        <h1>Safety 101</h1>
      </header>
      <main className={styles.main}>
        <ListContent data={data} />
      </main>

      <footer className={styles.footer}>
        <a href="https://grapes.network/" target="_blank" rel="noopener noreferrer">
          <div className={classNames(styles.imageContainer, styles.footerImage)}>
            <img src="/grape-logo.png" alt="Grape Logo" />
          </div>
        </a>
      </footer>
    </div>
  );
};

export default Home;
