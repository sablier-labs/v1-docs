import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import React from "react";

import styles from "./HomepageHeader.module.css";

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          Sablier is a money streaming protocol available on Ethereum, Optimism, Arbitrum, Polygon, Avalanche and BSC.
          It is the first of kind to have ever been built in DeFi, tracing its origins back to 2019. Similar to how you
          stream a movie on Netflix or a song on Spotify, Sablier lets you stream money every second.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/protocol/introduction">
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
}
