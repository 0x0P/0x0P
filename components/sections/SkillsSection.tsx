import { forwardRef } from "react";
import styles from "./SkillsSection.module.css";
import SectionHeader from "@/components/SectionHeader";
import SkillCategory from "@/components/SkillCategory";

const SkillsSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.sectionContent}>
        <SectionHeader
          label="기술 스택"
          title="Technical Stack"
          number="03"
        />
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <SkillCategory
              title="Language"
              skills={["Javascript", "TypeScript", "CSS"]}
            />
          </div>
          <div className={styles.skillCategory}>
            <SkillCategory
              title="Backend"
              skills={[
                "NestJS",
                "Prisma ORM",
                "WebSocket",
                "Redis",
                "PostgreSQL",
              ]}
            />
          </div>
          <div className={styles.skillCategory}>
            <SkillCategory
              title="Frontend"
              skills={[
                "React",
                "Next.js",
                "Tailwind CSS",
                "GSAP Animation",
              ]}
            />
          </div>
          <div className={styles.skillCategory}>
            <SkillCategory
              title="Learning"
              skills={["Swift", "AWS", "Kubernetes"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;

