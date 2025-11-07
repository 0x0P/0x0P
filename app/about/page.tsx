"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./about.module.css";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import SkillsSection from "@/components/sections/SkillsSection";
import ApproachSection from "@/components/sections/ApproachSection";
import VisionSection from "@/components/sections/VisionSection";
import ContactSection from "@/components/sections/ContactSection";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const heroRef = useRef<HTMLElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from("[class*='scrollIndicator']", {
        opacity: 0,
        y: -20,
        duration: 1,
        delay: 0.8,
        ease: "power2.out",
      });

      // Parallax effect for hero content
      gsap.to("[class*='heroContent']", {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Section animations
      sectionsRef.current.forEach((section) => {
        if (!section) return;

        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom top",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      // Cards stagger animation
      const philosophyCards = document.querySelectorAll(
        "[class*='philosophyCard']"
      );
      philosophyCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom top",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      // Skills animation
      const skillCategories = document.querySelectorAll(
        "[class*='skillCategory']"
      );
      skillCategories.forEach((skill, index) => {
        gsap.fromTo(
          skill,
          {
            opacity: 0,
            x: -20,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: skill,
              start: "top 85%",
              end: "bottom top",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      // Stats animation
      const stats = document.querySelectorAll("[class*='statCard']");
      stats.forEach((stat, index) => {
        gsap.fromTo(
          stat,
          {
            opacity: 0,
            scale: 0.95,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stat,
              start: "top 85%",
              end: "bottom top",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      // Contact links animation
      const contactLinks = document.querySelectorAll("[class*='contactLink']");
      contactLinks.forEach((link, index) => {
        gsap.fromTo(
          link,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: link,
              start: "top 85%",
              end: "bottom top",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.decorativeElements}>
          {Array.from({ length: 18 }, (_, i) => (
            <div
              key={`dot-${i}`}
              className={`${styles.decorDot} ${styles[`decorDot${i + 1}`]}`}
            />
          ))}

          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`star-${i}`}
              className={`${styles.decorStar} ${styles[`decorStar${i + 1}`]}`}
            />
          ))}

          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`circle-${i}`}
              className={`${styles.decorCircle} ${
                styles[`decorCircle${i + 1}`]
              }`}
            />
          ))}

          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`plus-${i}`}
              className={`${styles.decorPlus} ${styles[`decorPlus${i + 1}`]}`}
            />
          ))}

          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={`line-${i}`}
              className={`${styles.decorLine} ${styles[`decorLine${i + 1}`]}`}
            />
          ))}

          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={`diamond-${i}`}
              className={`${styles.decorDiamond} ${
                styles[`decorDiamond${i + 1}`]
              }`}
            />
          ))}

          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={`square-${i}`}
              className={`${styles.decorSquare} ${
                styles[`decorSquare${i + 1}`]
              }`}
            />
          ))}
        </div>

        <HeroSection ref={heroRef} />
        <IntroSection
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
        />
        <PhilosophySection
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
        />
        <SkillsSection
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
        />
        <ApproachSection
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
        />
        <VisionSection
          ref={(el) => {
            sectionsRef.current[4] = el;
          }}
        />
        <ContactSection
          ref={(el) => {
            sectionsRef.current[5] = el;
          }}
        />
      </div>
      <Footer />
    </>
  );
}
