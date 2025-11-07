"use client";

import styles from "./PhilosophyCard.module.css";

interface PhilosophyCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function PhilosophyCard({ icon, title, description }: PhilosophyCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <div className={styles.icon}>{icon}</div>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

