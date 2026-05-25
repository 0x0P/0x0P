import { ReactNode } from "react";
import styles from "./SkillCategory.module.css";

export interface Skill {
  name: string;
  icon: ReactNode;
  proficiency: number;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h4 className={styles.title}>{title}</h4>
        <span className={styles.count}>{skills.length}</span>
      </div>
      <div className={styles.skillList}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <div className={styles.skillInfo}>
              <span className={styles.skillIcon}>{skill.icon}</span>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillPercent}>{skill.proficiency}%</span>
            </div>
            <div className={styles.progressTrack}>
              <div
                className={styles.progressFill}
                style={{ width: `${skill.proficiency}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
