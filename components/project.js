import styles from "../styles/project.module.css";

const Project = () => {
  return (
    <div className="section">
      <div className="numbered-heading">
        <span className="number">02.</span>
        <span className="title">Some Projects I've Built </span>
        <div className="line-break"></div>
      </div>
      <div className={styles.projectContainer}>
        <div className={styles.projectImg}>
          <img src="img/trello_1.png"></img>
        </div>
        <div className={`${styles.projectContent} ${styles.alignRight}`}>
          <div className={styles.projectType}>Clone Project</div>
          <div className={styles.projectTitle}>Trello Clone</div>
          <div className={` ${styles.projectDesc} ${styles.textAlignRight}`}>
            <span>
              This clone app resembles the ui design of the workflow app
              trello.com and incudes board, list and card creation, checkboxes,
              due date, drag + drop features and AJAX updates.
            </span>
          </div>
          <div className={styles.projectTech}>
            <ul className={styles.projectTechList}>
              <li>Python</li>
              <li>Django</li>
              <li>jQuery</li>
              <li>vanilla js</li>
            </ul>
          </div>
          <div className={styles.projectLink}>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.projectContainer}>
        <div className={`${styles.projectContent} `}>
          <div className={styles.projectType}>Clone Project</div>
          <div className={styles.projectTitle}>Airbnb Clone</div>
          <div className={` ${styles.projectDesc}`}>
            <span>
              This clone app is implemented host and guest functionality,
              listing and booking management features, host communication/chat
              with sockets, google maps integration.
            </span>
          </div>
          <div className={styles.projectTech}>
            <ul className={styles.projectTechList}>
              <li style={{ marginLeft: "0" }}>Ruby on Rails</li>
              <li>Bootstrap</li>
              <li>jQuery</li>
              <li>vanilla js</li>
            </ul>
          </div>
          <div className={styles.projectLink}>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.projectImg}>
          <img src="img/airbnb_1.png"></img>
        </div>
      </div>
			<div className={styles.projectContainer}>
        <div className={styles.projectImg}>
          <img src="img/trello_1.png"></img>
        </div>
        <div className={`${styles.projectContent} ${styles.alignRight}`}>
          <div className={styles.projectType}>Clone Project</div>
          <div className={styles.projectTitle}>Reddit Clone</div>
          <div className={` ${styles.projectDesc} ${styles.textAlignRight}`}>
            <span>
              This clone app features user registration, community and post creation, upvotes/downvotes, SPA + API architecture.
            </span>
          </div>
          <div className={styles.projectTech}>
            <ul className={styles.projectTechList}>
              <li>C#</li>
              <li>.NET</li>
              <li>Next.js</li>
              <li>React</li>
            </ul>
          </div>
          <div className={styles.projectLink}>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Project;