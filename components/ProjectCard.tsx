import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  year: string;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  year,
}: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.year}>{year}</span>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{description}</p>
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
