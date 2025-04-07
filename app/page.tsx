"use client";

import styles from "@/styles/main.module.css";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const animation = document.querySelectorAll("[data-scroll]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    });
    animation.forEach((object) => {
      observer.observe(object);
    });
    return () => {
      animation.forEach((object) => {
        observer.unobserve(object);
      });
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <div className={styles.half}>
          <div className={styles.content}>
            <div className={styles.texts}>
              <h1>안녕하세요</h1>
              <h1>PERCENTZERO</h1>
              <h1>입니다.</h1>
              <h2>{"더 알아보기 ↓"}</h2>
            </div>
          </div>
        </div>
        <div className={styles.back}>
          {Array.from({ length: 50 }, (_, i) => (
            <span
              key={i}
              style={{
                transform: `rotateZ(${i * 0.2}deg)`,
              }}>
              {"</>"}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.half}>
          <div data-scroll="true" className={styles.content}>
            <div className={styles.texts}>
              <h1 data-scroll="true" style={{ animationDelay: "100ms" }}>
                저는
              </h1>
              <h1 data-scroll="true" style={{ animationDelay: "150ms" }}>
                고등학생 개발자
              </h1>
              <h1 data-scroll="true" style={{ animationDelay: "200ms" }}>
                입니다
              </h1>
              <h2 data-scroll="true" style={{ animationDelay: "250ms" }}>
                🎓선린인터넷고등학교 재학중
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.half}>
          <div data-scroll="true" className={styles.content}>
            <div className={styles.texts}>
              <h1 data-scroll="true" style={{ animationDelay: "100ms" }}>
                제가
              </h1>
              <h1 data-scroll="true" style={{ animationDelay: "150ms" }}>
                개발한 것들을
              </h1>
              <h1 data-scroll="true" style={{ animationDelay: "200ms" }}>
                구경하세요!
              </h1>
              {/* <Link className={styles.linkText} href="/projects">
                <h2 data-scroll="true" style={{ animationDelay: "250ms" }}>
                  {"프로젝트 목록 →"}
                </h2>
              </Link> */}
              <Link className={styles.linkText} href="https://github.com/0x0p">
                <h2 data-scroll="true" style={{ animationDelay: "300ms" }}>
                  {"Github →"}
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
