import Head from "next/head";
import styles from "../styles/Portfolio.module.css";

import PortfolioEntry from "../components/PortfolioEntry.jsx";

export default function Home() {
  const portfolio = [
    {
      title: "Stealth Furniture",
      client: "Lee Hershberger",
      date: "Spring 2020",
      description:
        "This project was a practice in project management. While attending school, a client I had worked for in the past asked about rebuilding his company website. I chose to hire out a freelance designer and developer as my time was already strained and took on the role of project manager for the site build.",
      link: "https://stealthfurniture.com",
      skills: ["Shopify", "Project Management"],
    },
    {
      title: "Musonus",
      client: "School Project",
      date: "December 2020",
      description: "School project",
      link: "https://musonus.mcnees.me",
      skills: ["React", "SCSS", "App Deployment", "React Router v4", "Hooks"],
    },
    {
      title: "Stealth Furniture",
      client: "Lee Hershberger",
      date: "Spring 2020",
      description:
        "This project was a practice in project management. While attending school, a client I had worked for in the past asked about rebuilding his company website. I chose to hire out a freelance designer and developer as my time was already strained and took on the role of project manager for the site build.",
      link: "https://stealthfurniture.com",
      skills: ["Shopify", "Project Management"],
    },
    {
      title: "Stealth Furniture",
      client: "Lee Hershberger",
      date: "Spring 2020",
      description:
        "This project was a practice in project management. While attending school, a client I had worked for in the past asked about rebuilding his company website. I chose to hire out a freelance designer and developer as my time was already strained and took on the role of project manager for the site build.",
      link: "https://stealthfurniture.com",
      skills: ["Shopify", "Project Management"],
    },
  ];

  return (
    <div className="container">
      <Head>
        <title>Portfolio - McNees Media</title>
      </Head>

      <main>
        <a href="/" className="logoLink">
          <img src="/assets/images/logo/logo.png" alt="McNees Media" />
        </a>
        <h1 className={styles.heading}>THIS PAGE IS UNDER CONSTRUCTION</h1>
        {portfolio.map((entry, i) => {
          return <PortfolioEntry key={i} data={entry} />;
        })}
      </main>
    </div>
  );
}
