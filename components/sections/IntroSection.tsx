import { forwardRef } from "react";
import styles from "./IntroSection.module.css";
import SectionHeader from "@/components/SectionHeader";

const IntroSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.sectionContent}>
        <SectionHeader label="소개" title="About Me" number="01" />
        <div className={styles.textBlock}>
          <p className={styles.largeText}>
            저는
            <br />
            세계정복이 꿈인
            <br />
            고등학생
            <span className={styles.textGradient}> 개발자입니다.</span>
          </p>
          <p className={styles.bodyText}>선린인터넷고등학교 재학중</p>
        </div>
      </div>
    </section>
  );
});

IntroSection.displayName = "IntroSection";

export default IntroSection;

