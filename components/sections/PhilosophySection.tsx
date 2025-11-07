import { forwardRef } from "react";
import styles from "./PhilosophySection.module.css";
import SectionHeader from "@/components/SectionHeader";
import PhilosophyCard from "@/components/PhilosophyCard";

const PhilosophySection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.sectionContent}>
        <SectionHeader label="철학" title="Philosophy" number="02" />
        <div className={styles.philosophyGrid}>
          <div className={styles.philosophyCard}>
            <PhilosophyCard
              icon="✦"
              title="Design"
              description="깔끔한 디자인과 쉬운 사용자 경험을 추구합니다. 모든 디테일이 사용자 경험을 개선하는 의미를 갖도록 설계합니다."
            />
          </div>
          <div className={styles.philosophyCard}>
            <PhilosophyCard
              icon="★"
              title="Technology"
              description="현대적인 기술을 활용하여 효율적이고 확장 가능한 솔루션을 구현합니다."
            />
          </div>
          <div className={styles.philosophyCard}>
            <PhilosophyCard
              icon="◆"
              title="Innovation"
              description="끊임없는 배움을 통해 개발의 미래를 찾아냅니다."
            />
          </div>
        </div>
      </div>
    </section>
  );
});

PhilosophySection.displayName = "PhilosophySection";

export default PhilosophySection;

