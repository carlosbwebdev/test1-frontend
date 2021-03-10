import React from "react";
import Title from "./title";
import services from "../constants/services";
import styles from "../css/services.module.css";
const Services = () => {
  return (
    <section className={`styles.section ${styles.bgGrey}`}>
      <div className={styles.underline}></div>
      <Title title="services" className={styles.titleUnderline} />

      <div className={`styles.sectioCenter ${styles.servicesCenter}`}>
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article key={id} className={styles.service} id="serviceDark">
              {icon}
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
