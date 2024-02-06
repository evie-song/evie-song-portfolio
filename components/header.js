import styles from "../styles/header.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

	useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = typeof window !== 'undefined' ? window.pageYOffset : 0;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [prevScrollPos]);

  return (
    <div className={`${styles.container} justify-content-between ${visible? styles.show : styles.hide}`}>
      <div className={`${styles.logoContainer} hover-transform`}>
				<Image src="img/logo.png"></Image>
			</div>
      <div className="d-flex flex-grow-1 justify-content-end align-items-center">
          <a href="#about">
            <span className={styles.counter}>01.</span>
            <span className={styles.title}>About</span>
          </a>
          <a href="#projects">
            <span className={styles.counter}>02.</span>
            <span className={styles.title}>Projects</span>
          </a>
          <a href="#work">
            <span className={styles.counter}>03.</span>
            <span className={styles.title}>Work</span>
          </a>
          <a href="#contact">
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
