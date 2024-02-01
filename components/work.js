import { useState } from "react";
import styles from "../styles/work.module.css";

const Work = () => {
	const [sectionSelected, setSectionSelected] = useState("hidrate")


  return (
    <div className="section work" id="work">
      <div className="numbered-heading">
        <span className="number">03.</span>
        <span className="title">Where I've worked (before coding)</span>
        <div className="line-break"></div>
      </div>
      <div className={styles.body}>
        <div className={styles.companyList}>
          <div onClick={() => setSectionSelected("hidrate")} className={`${styles.company} ${sectionSelected == "hidrate"? styles.companySelected : ""}`}>Hidrate Inc.</div>
          <div onClick={() => setSectionSelected("bradford")} className={`${styles.company} ${sectionSelected == "bradford"? styles.companySelected : ""}`}>The Bradford Group</div>
          <div onClick={() => setSectionSelected("pinduoduo")} className={`${styles.company} ${sectionSelected == "pinduoduo"? styles.companySelected : ""}`}>Pinduoduo Inc.</div>
        </div>

        <div style={{height:"500px"}}>
          <div className={` ${styles.descList} ${sectionSelected == "hidrate"? styles.showDesc: styles.hideDesc}`}>
            <div className={styles.DescContainer}>
              <div className={styles.title}>
                Sr. Supply Chain Manager{" "}
                <span className={styles.companyName}>@ Hidrate</span>
              </div>
              <div className={styles.range}>Nov. 2017 - Jan. 2023</div>
              <ul>
                <li>
                  Initialized plans and solutions throughout supply chain
                  operations to support company growth. Below are some key
                  contributions in several areas:
                </li>
                <li>
                  Management: Recruited and overseen the supply chain team
                  across two office locations (US and China), and ensured smooth
                  operation in areas of vendor & product sourcing, sales
                  forecast & purchasing, production scheduling, shipping &
                  logistics and quality control.
                </li>
                <li>
                  Sourcing: Sourced and onboarded new key manufacturers in China
                  for new product needs.
                </li>
                <li>
                  Logistics & Shipping: established a balanced shipping strategy
                  to achieve significant freight savings as well as on schedule
                  arrivals.
                </li>
                <li>
                  3PL management: Led the transition of domestic 3PL provider,
                  as well as the sourcing and onboarding of two international
                  3PLs in Canada and Netherlands.
                </li>
                <li>
                  Systems implementations: designed new databases/workflows
                  through Quickbase and led internal ERP system integration,
                  which largely reduced manual data entry and errors.
                </li>
                <li>
                  Sales forecast and purchasing: established routine reports to
                  review historical sales, form purchasing plans and manage
                  ongoing production schedules.
                </li>
              </ul>
            </div>
          </div>

          <div className={` ${styles.descList} ${sectionSelected == "bradford"? styles.showDesc: styles.hideDesc}`}>
            <div className={styles.DescContainer}>
              <div className={styles.title}>
                Production Scheduler{" "}
                <span className={styles.companyName}>@ The Bradford Group</span>
              </div>
              <div className={styles.range}> Sep. 2016 - Oct. 2017</div>
              <ul>
                <li>
                  Collaborated with cross-functional teams to initiate purchase
                  plans.
                </li>
                <li>
                  Placed finished goods and component purchase orders to meet
                  sales forecasts.
                </li>
                <li>
                  Managed production timelines with manufacturers to ensure on
                  time deliveries.
                </li>
                <li>
                  Monitored shipping and order fulfillments with internal
                  warehouse.
                </li>
              </ul>
            </div>
          </div>

          <div className={` ${styles.descList} ${sectionSelected == "pinduoduo"? styles.showDesc: styles.hideDesc}`}>
            <div className={styles.DescContainer}>
              <div className={styles.title}>
                Imported Products Division Manager{" "}
                <span className={styles.companyName}>@ Pinduoduo Inc.</span>
              </div>
              <div className={styles.range}>Aug. 2015 – Mar. 2016</div>
              <ul>
                <li>
                  Head of imported products division for company’s rapidly
                  growing e-commerce marketplace app, Pingduoduo.
                </li>
                <li>
                  Performed market research to select and evaluate profitable
                  products.
                </li>
                <li>Sourced and onboarded new sellers.</li>
                <li>
                  Managed and prioritized app listings and promotions for
                  maximum sales efficiency.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
