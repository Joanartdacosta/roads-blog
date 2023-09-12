import styles from "./footer.module.css";

export default function CurrentTime() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footerTime}>
      <p className={styles.namesStyle}> ESTRADAS - Rui Costa</p>

      <p>
        © {currentYear} website developed by{" "}
        <a
          href="https://github.com/Joanartdacosta"
          className={styles.nameStylesLink}
        >
          Joana Costa
        </a>
      </p>
    </div>
  );
}
