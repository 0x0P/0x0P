import { RefObject } from "react";
import styles from "./StatCard.module.css";

interface StatCardProps {
  number: string;
  label: string;
  numberRef?: RefObject<HTMLSpanElement | null>;
}

export default function StatCard({ number, label, numberRef }: StatCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.number} ref={numberRef}>
        {number}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

