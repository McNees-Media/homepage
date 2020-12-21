import styles from "../styles/PortfolioEntry.module.css";

const PortfolioEntry = (props) => {
  return (
    <article className={styles.entry}>
      <h2>{props.data.title}</h2>
      <p>{props.data.client}</p>
      <p>{props.data.date}</p>
      <p>{props.data.description}</p>
      <p>Skills: {props.data.skills}</p>
      <a className={styles.button} href={props.data.link} target="_blank">
        Visit Site
      </a>
    </article>
  );
};

export default PortfolioEntry;
