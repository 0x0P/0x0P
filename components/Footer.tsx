import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandSection}>
            <h2 className={styles.brandName}>PERCENTZERO</h2>
            <p className={styles.tagline}>읽어도 아무 의미 없는 문장</p>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linkGroup}>
              <h3 className={styles.linkGroupTitle}>Navigation</h3>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/" className={styles.link}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={styles.link}>
                    About me
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className={styles.link}>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="https://blog.0x0p.dev" className={styles.link}>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.linkGroupTitle}>Connect</h3>
              <ul className={styles.linkList}>
                <li>
                  <Link href="https://github.com/0x0p" className={styles.link}>
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="mailto:me@0x0p.dev" className={styles.link}>
                    Email
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} PERCENTZERO. All rights reserved.
          </p>
          <div className={styles.bottomLinks}></div>
        </div>
      </div>
    </footer>
  );
}
