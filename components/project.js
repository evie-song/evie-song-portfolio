import styles from "../styles/project.module.css";

const Project = () => {
  return (
    <div className="section">
      <div className="numbered-heading">
        <span className="number">02.</span>
        <span className="title">Some Clone Projects I've Built </span>
        <div className="line-break"></div>
      </div>
			<div className={styles.body}></div>
				<div className={styles.projectContainer}>
					<div className={styles.projectImg}>image</div>
					<div className={styles.projectContent}>content</div>


				</div>
    </div>
  );
};

export default Project;
