"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import Footer from "@/components/Footer";

const PARALLAX_INTENSITY = {
  BACK: 15,
  CLOUD: 25,
  MOON: 55,
} as const;

type ParallaxLayer = {
  ref: React.RefObject<HTMLDivElement | null>;
  intensity: number;
};

export default function Home() {
  const backLayerRef = useRef<HTMLDivElement>(null);
  const cloudLayerRef = useRef<HTMLDivElement>(null);
  const moonLayerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      [backLayerRef, cloudLayerRef, moonLayerRef].forEach((ref) => {
        if (ref.current) {
          ref.current.style.transform = "translate(0px, 0px)";
        }
      });
      return;
    }

    const layers: ParallaxLayer[] = [
      { ref: backLayerRef, intensity: PARALLAX_INTENSITY.BACK },
      { ref: cloudLayerRef, intensity: PARALLAX_INTENSITY.CLOUD },
      { ref: moonLayerRef, intensity: PARALLAX_INTENSITY.MOON },
    ];

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const normalizedX = (clientX - centerX) / centerX;
      const normalizedY = (clientY - centerY) / centerY;

      layers.forEach(({ ref, intensity }) => {
        if (ref.current) {
          const translateX = normalizedX * intensity;
          const translateY = normalizedY * intensity;
          ref.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Striving for the ideal through
          <br />
          refined sensibility.
        </h1>
        <div className={styles.backgroundLayers}>
          <div ref={backLayerRef} className={styles.backLayer} />
          <div ref={cloudLayerRef} className={styles.cloudLayer} />
          <div ref={moonLayerRef} className={styles.moonLayer} />
        </div>
      </main>
      <Footer />
    </>
  );
}
