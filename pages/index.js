import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>McNees Media</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <main>
        <a href="/" className="logo">
          <img src="/assets/images/logo/logo.png" alt="McNees Media" />
        </a>
        <h1 className={styles.heading}>And the work of Michael McNees</h1>
        <div className={styles.links}>
          <a
            className={styles.link}
            href="https://www.dropbox.com/s/874z72ozftqsikf/MichaelMcNees_Resume_2020.pdf?dl=0"
            target="_blank"
          >
            Resume
          </a>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/michaelmcnees/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className={styles.link}
            href="https://twitter.com/bsknuckles"
            target="_blank"
          >
            Twitter
          </a>
          <a className={styles.link} href="/portfolio">
            Portfolio
          </a>
        </div>
      </main>
    </div>
  );
}
