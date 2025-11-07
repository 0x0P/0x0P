import { forwardRef } from "react";
import styles from "./VisionSection.module.css";
import SectionHeader from "@/components/SectionHeader";

const VisionSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.sectionContent}>
        <div className={styles.visionContent}>
          <SectionHeader label="비전" title="" number="05" />
          <h2 className={styles.visionTitle}>
            Striving for the ideal through
            <br />
            <span className={styles.textGradient}>refined sensibility.</span>
          </h2>
          <p className={styles.visionText}>
            감각적 이상 추구 <br />
            세련된 감각을 통해 이상적인 미래를 추구합니다.
          </p>
        </div>
      </div>
    </section>
  );
});

VisionSection.displayName = "VisionSection";

export default VisionSection;

