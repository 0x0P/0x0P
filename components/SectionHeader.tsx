import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  label: string;
  title: string;
  number: string;
}

export default function SectionHeader({ label, title, number }: SectionHeaderProps) {
  return (
    <>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionLabel}>{label}</div>
        <div className={styles.sectionNumber}>{number}</div>
      </div>
      {title && <h2 className={styles.sectionTitle}>{title}</h2>}
    </>
  );
}

