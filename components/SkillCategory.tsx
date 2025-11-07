import styles from "./SkillCategory.module.css";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h4 className={styles.title}>{title}</h4>
      </div>
      <div className={styles.skillGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillTag}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

