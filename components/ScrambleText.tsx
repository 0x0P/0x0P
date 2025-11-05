"use client";

import { useEffect, useState } from "react";

const SCRAMBLE_CHARS = "PERCENTZERO";

const PRESERVE_CHARS = new Set([" ", "\n", ".", "-"]);

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export default function ScrambleText({
  text,
  className = "",
  delay = 0,
  speed = 20,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    const timeoutId = setTimeout(() => {
      let iteration = 0;
      const maxIterations = text.length * 2;

      intervalId = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              // 보존할 문자는 그대로 반환
              if (PRESERVE_CHARS.has(char)) {
                return char;
              }

              // 현재 iteration에서 확정된 문자는 원본 반환
              if (index < iteration / 2) {
                return text[index];
              }

              // 아직 확정되지 않은 문자는 랜덤 문자로 스크램블
              return SCRAMBLE_CHARS[
                Math.floor(Math.random() * SCRAMBLE_CHARS.length)
              ];
            })
            .join("")
        );

        iteration++;

        if (iteration >= maxIterations) {
          if (intervalId) clearInterval(intervalId);
          setDisplayText(text);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, delay, speed]);

  return <span className={className}>{displayText}</span>;
}
