"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import ScrambleText from "./ScrambleText";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.container} ${isScrolled ? styles.scrolled : ""}`}>
      <Link href="/">
        <h1>
          <ScrambleText text="PERCENTZERO" />
        </h1>
      </Link>
    </nav>
  );
}
