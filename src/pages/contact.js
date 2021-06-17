import React from "react";
import Layout from "../components/layout";
import styles from "../css/contact.module.css";
import SEO from "../components/SEO";

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className={styles.contactPage}>
        <article className={styles.contactForm}>
          <h3>Contacta-me</h3>
          <form action="https://formspree.io/f/xqkgvnzn" method="POST">
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="nome"
                name="name"
                className={styles.formControl}
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className={styles.formControl}
              />
              <textarea
                name="message"
                id=""
                rows="5"
                placeholder="mensagem"
                name="message"
                className={styles.formControl}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`${styles.submitBtn} ${styles.btn} `}
            >
              enviar
            </button>
          </form>
        </article>
      </section>
    </Layout>
  );
};

export default Contact;
