"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./ApproachSection.module.css";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";

gsap.registerPlugin(ScrollTrigger);

interface GitHubStats {
  totalContributions: number;
  publicRepositories: number;
  totalStars: number;
}

async function getGitHubStats(): Promise<GitHubStats> {
  try {
    const response = await fetch("/api/github-contributions");
    if (!response.ok) {
      console.error("Failed to fetch GitHub stats");
      return { totalContributions: 0, publicRepositories: 0, totalStars: 0 };
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return { totalContributions: 0, publicRepositories: 0, totalStars: 0 };
  }
}

const ApproachSection = forwardRef<HTMLElement>((props, ref) => {
  const [stats, setStats] = useState<GitHubStats | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const contributionsRef = useRef<HTMLSpanElement>(null);
  const repositoriesRef = useRef<HTMLSpanElement>(null);
  const starsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    getGitHubStats().then(setStats);
  }, []);

  useEffect(() => {
    if (!stats || !sectionRef.current) return;

    const statsGrid = sectionRef.current.querySelector("[class*='statsGrid']");
    if (!statsGrid) return;

    const ctx = gsap.context(() => {
      // Contributions counter
      if (contributionsRef.current) {
        const counter = { value: 0 };
        gsap.to(counter, {
          value: stats.totalContributions,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsGrid,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play reset play reset",
            onEnter: () => {
              gsap.to(counter, {
                value: stats.totalContributions,
                duration: 2,
                ease: "power2.out",
                onUpdate: () => {
                  if (contributionsRef.current) {
                    contributionsRef.current.textContent = Math.ceil(counter.value).toLocaleString("en-US");
                  }
                },
              });
            },
            onLeave: () => {
              if (contributionsRef.current) {
                contributionsRef.current.textContent = "0";
              }
            },
            onEnterBack: () => {
              gsap.to(counter, {
                value: stats.totalContributions,
                duration: 2,
                ease: "power2.out",
                onUpdate: () => {
                  if (contributionsRef.current) {
                    contributionsRef.current.textContent = Math.ceil(counter.value).toLocaleString("en-US");
                  }
                },
              });
            },
            onLeaveBack: () => {
              if (contributionsRef.current) {
                contributionsRef.current.textContent = "0";
              }
            },
          },
        });
      }

      // Repositories counter
      if (repositoriesRef.current) {
        const counter = { value: 0 };
        gsap.to(counter, {
          value: stats.publicRepositories,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsGrid,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play reset play reset",
            onEnter: () => {
              gsap.to(counter, {
                value: stats.publicRepositories,
                duration: 2,
                delay: 0.1,
                ease: "power2.out",
                onUpdate: () => {
                  if (repositoriesRef.current) {
                    repositoriesRef.current.textContent = Math.ceil(counter.value).toLocaleString("en-US");
                  }
                },
              });
            },
            onLeave: () => {
              if (repositoriesRef.current) {
                repositoriesRef.current.textContent = "0";
              }
            },
            onEnterBack: () => {
              gsap.to(counter, {
                value: stats.publicRepositories,
                duration: 2,
                delay: 0.1,
                ease: "power2.out",
                onUpdate: () => {
                  if (repositoriesRef.current) {
                    repositoriesRef.current.textContent = Math.ceil(counter.value).toLocaleString("en-US");
                  }
                },
              });
            },
            onLeaveBack: () => {
              if (repositoriesRef.current) {
                repositoriesRef.current.textContent = "0";
              }
            },
          },
        });
      }

      // Stars counter
      if (starsRef.current) {
        const counter = { value: 0 };
        gsap.to(counter, {
          value: stats.totalStars,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsGrid,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play reset play reset",
            onEnter: () => {
              gsap.to(counter, {
                value: stats.totalStars,
                duration: 2,
                delay: 0.2,
                ease: "power2.out",
                onUpdate: () => {
                  if (starsRef.current) {
                    starsRef.current.textContent = Math.ceil(counter.value).toLocaleString("en-US");
                  }
                },
              });
            },
            onLeave: () => {
              if (starsRef.current) {
                starsRef.current.textContent = "0";
              }
            },
            onEnterBack: () => {
              gsap.to(counter, {
                value: stats.totalStars,
                duration: 2,
                delay: 0.2,
                ease: "power2.out",
                onUpdate: () => {
                  if (starsRef.current) {
                    starsRef.current.textContent = Math.ceil(counter.value).toLocaleString("en-US");
                  }
                },
              });
            },
            onLeaveBack: () => {
              if (starsRef.current) {
                starsRef.current.textContent = "0";
              }
            },
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [stats]);

  return (
    <section
      className={styles.section}
      ref={(node) => {
        sectionRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        }
      }}
    >
      <div className={styles.sectionContent}>
        <div className={styles.approachContent}>
          <div className={styles.approachText}>
            <SectionHeader label="성장의 기록" title="GROWTH" number="04" />
            <p className={styles.largeText}>
              꾸준함이 만드는
              <br />
              <span className={styles.textGradient}>개발자의 성장 곡선</span>
            </p>
            <p className={styles.bodyText}>
              하루하루 쌓아온 코드와 경험이 저를 만들어왔습니다. 새로운 기술을
              배우고, 문제를 해결하며, 더 나은 코드를 작성하기 위해 끊임없이
              노력합니다. 아래의 숫자들은 그 여정의 흔적입니다.
            </p>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <StatCard
                numberRef={contributionsRef}
                number="0"
                label="Contributions (Last Year)"
              />
            </div>
            <div className={styles.statCard}>
              <StatCard
                numberRef={repositoriesRef}
                number="0"
                label="Public Repositories"
              />
            </div>
            <div className={styles.statCard}>
              <StatCard numberRef={starsRef} number="0" label="GitHub Stars" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ApproachSection.displayName = "ApproachSection";

export default ApproachSection;
