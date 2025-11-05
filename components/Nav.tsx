import Link from "next/link";
import styles from "./Nav.module.css";
import ScrambleText from "./ScrambleText";

export default function Nav() {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <h1>
          <ScrambleText text="PERCENTZERO" />
        </h1>
      </Link>
    </nav>
  );
}
