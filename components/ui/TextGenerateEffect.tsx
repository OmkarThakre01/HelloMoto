"use client";
import { useEffect, useState } from "react";

export function TextGenerateEffect({ words }: { words: string }) {
  const [text, setText] = useState("");
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= words.length) {
        setText(words.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsAnimating(false);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [words]);

  return <span>{text}</span>;
} 