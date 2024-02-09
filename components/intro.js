import styles from "../styles/intro.module.css";

const Intro = () => {
	return (
		<div className={styles.container}>
			<div className={styles.greeting}>Hi, my name is</div>
			<div className={styles.bigHeading}><h2>Evie Song.</h2></div>
			<div className={styles.bigHeading}><h3>I am a web developer.</h3></div>
			<div className={styles.content}><p>I spent the past couple years self teaching full stack development by making clones of websites. Currently I am looking for me first developer position.</p></div>
			<a href="EvieSongResume_2.pdf" target="_blank"><div className={`${styles.resume} resume-link`}>Check out my resume!</div></a>
		</div>
	)
}

export default Intro