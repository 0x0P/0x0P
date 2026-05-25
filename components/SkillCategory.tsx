import { ReactNode } from "react";
import styles from "./SkillCategory.module.css";

export interface Skill {
  name: string;
  icon: ReactNode;
}

export type AccentColor = "blue" | "purple" | "emerald" | "amber";

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  accent?: AccentColor;
}

const accentColors: Record<AccentColor, { from: string; to: string }> = {
  blue: { from: "rgba(96, 165, 250, 0.8)", to: "rgba(96, 165, 250, 0.2)" },
  purple: { from: "rgba(167, 139, 250, 0.8)", to: "rgba(167, 139, 250, 0.2)" },
  emerald: { from: "rgba(52, 211, 153, 0.8)", to: "rgba(52, 211, 153, 0.2)" },
  amber: { from: "rgba(251, 191, 36, 0.8)", to: "rgba(251, 191, 36, 0.2)" },
};

export default function SkillCategory({
  title,
  skills,
  accent = "blue",
}: SkillCategoryProps) {
  const colors = accentColors[accent];

  return (
    <div
      className={styles.card}
      style={
        {
          "--accent-from": colors.from,
          "--accent-to": colors.to,
        } as React.CSSProperties
      }
    >
      <div className={styles.accentLine} />
      <div className={styles.header}>
        <h4 className={styles.title}>{title}</h4>
        <span className={styles.count}>{skills.length}</span>
      </div>
      <div className={styles.skillList}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <span className={styles.skillIcon}>{skill.icon}</span>
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
