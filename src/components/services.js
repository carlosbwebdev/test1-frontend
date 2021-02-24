import React from "react";
import Title from "./Title";
import services from "../constants/services";
import styles from "../css/services.module.css";
const Services = () => {
  return (
    <section className={`styles.section ${styles.bgGrey}`}>
      <Title title="services" />
      <div className={`styles.sectioCenter ${styles.servicesCenter}`}>
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article key={id} className={styles.service}>
              {icon}
              <h4>{title}</h4>
              <div className={styles.underline}></div>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
