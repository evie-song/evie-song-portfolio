import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <div className={`${styles.container} justify-content-between`}>
      <div className={styles.logoContainer}>
				<img src="img/logo.png"></img>
			</div>
      <div className="d-flex flex-grow-1 justify-content-end align-items-center">
          <a>
            <span className={styles.counter}>01.</span>
            <span className={styles.title}>About</span>
          </a>
          <a>
            <span className={styles.counter}>02.</span>
            <span className={styles.title}>Experience</span>
          </a>
          <a>
            <span className={styles.counter}>03.</span>
            <span className={styles.title}>Work</span>
          </a>
          <a>
            <span className={styles.counter}>04.</span>
            <span className={styles.title}>Contact</span>
          </a>
				<a className={styles.resumeWrapper} href="Evie+Song+Resume.pdf" target="_blank">
					<span className={styles.resumeTitle}>Resume</span>
				</a>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
