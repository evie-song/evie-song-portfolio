import styles from "../styles/about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="numbered-heading">
        <span className="number">01.</span>
        <span className="title">About Me </span>
        <div className="line-break"></div>
      </div>
      <div className={styles.body}>
        <div>
          <p>Hello! My name is Evie and I am a self taught web developer.</p>
          <p>
            Coming from a non-tech background, I was inspired to learn to code
            after getting involved in building tech solutions at my previous
            supply chain role and being encouraged by other passionate coders.
            Over the past two years, I have been self-teaching full stack web
            development and practicing by making clones of various websites,
            including <a href="#airbnb"><span className="text-highlight">Airbnb</span></a>, <a href="#trello"><span className="text-highlight">Trello</span ></a> and <a href="#reddit"><span className="text-highlight">Reddit</span></a>.
          </p>
          <p>
            Before making a career change, I was in supply chain related roles
            for 5 years. During which, I had worked with extensive data on a
            daily basis and have done projects including data modeling, building
            databases and system implementation to manage data and streamline
            business processes. Those were some of my favorite projects and are
            what initially sparked my interest in learning software development.
          </p>
          <p>
            In my spare time, I love travelling, disc-golfing, cooking, spending
            time with my baby (oh yes, I also had a newborn last year and self
            taught being a mom!) and cuddling with my kitties.
          </p>
          <p>Here are a few technologies I’ve been learning and using:</p>
          <ul className="skill-list">
            <span>Backend</span>
						<span>Frontend</span>
						<li>Python (Django)</li>
            <li>Javascript</li>
						<li>Ruby on Rails</li>
            <li>jQuery</li>
            <li>C# (.NET)</li>
						<li>React/Next.js</li>
						<li>PostgreSQL</li>
						<li>HTML/CSS</li>
          </ul>
        </div>
        <div>
					<div className={styles.selfie}>
						<Image width="300" height="225" src="img/selfie.png"></Image>
					</div>
				</div>
      </div>
    </div>
  );
};
export default About;
