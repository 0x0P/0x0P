import { forwardRef } from "react";
import styles from "./SkillsSection.module.css";
import SectionHeader from "@/components/SectionHeader";
import SkillCategory, { Skill } from "@/components/SkillCategory";
import {
  SiJavascript,
  SiTypescript,
  SiCss,
  SiNestjs,
  SiPrisma,
  SiSocketdotio,
  SiRedis,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGreensock,
  SiSwift,
  SiKubernetes,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const languageSkills: Skill[] = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "CSS", icon: <SiCss /> },
];

const backendSkills: Skill[] = [
  { name: "NestJS", icon: <SiNestjs /> },
  { name: "Prisma ORM", icon: <SiPrisma /> },
  { name: "WebSocket", icon: <SiSocketdotio /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
];

const frontendSkills: Skill[] = [
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "GSAP", icon: <SiGreensock /> },
];

const learningSkills: Skill[] = [
  { name: "Swift", icon: <SiSwift /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
];

const SkillsSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.sectionContent}>
        <SectionHeader
          label="기술 스택"
          title="Technical Stack"
          number="03"
        />
        <div className={styles.bentoGrid}>
          <div className={styles.bentoLarge}>
            <SkillCategory title="Backend" skills={backendSkills} accent="purple" />
          </div>
          <div className={styles.bentoLarge}>
            <SkillCategory title="Frontend" skills={frontendSkills} accent="blue" />
          </div>
          <div className={styles.bentoSmall}>
            <SkillCategory title="Language" skills={languageSkills} accent="emerald" />
          </div>
          <div className={styles.bentoSmall}>
            <SkillCategory title="Learning" skills={learningSkills} accent="amber" />
          </div>
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
