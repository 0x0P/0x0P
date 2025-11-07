import { forwardRef } from "react";
import styles from "./HeroSection.module.css";

const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className={styles.heroSection} ref={ref}>
      <div className={styles.heroContent}>
        <div className={styles.heroLabel}>DEVELOPER</div>
        <h1 className={styles.heroTitle}>PERCENTZERO</h1>
        <p className={styles.heroSubtitle}>
          Creating meaningful digital experiences
        </p>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Scroll to explore</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
