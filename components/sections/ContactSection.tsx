import { forwardRef } from "react";
import styles from "./ContactSection.module.css";
import SectionHeader from "@/components/SectionHeader";

const ContactSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.sectionContent}>
        <div className={styles.contactContent}>
          <SectionHeader
            label="연락하기"
            title="Let's Create Together"
            number="06"
          />
          <p className={styles.contactText}>
            새로운 프로젝트나 협업 기회에 대해 이야기 나누고 싶으시다면
          </p>
          <div className={styles.contactLinks}>
            <a href="mailto:me@0x0p.dev" className={styles.contactLink}>
              <span className={styles.linkArrow}>→</span>
              <span>me@0x0p.dev</span>
            </a>
            <a
              href="https://github.com/0x0p"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span className={styles.linkArrow}>→</span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;

