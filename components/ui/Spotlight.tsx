"use client";
import React from "react";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export function Spotlight({ className, fill = "white" }: SpotlightProps) {
  return (
    <div
      className={`pointer-events-none absolute h-[169%] w-[138%] lg:w-[84%] opacity-70 ${className}`}
    >
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          background: `radial-gradient(600px circle at ${fill}, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
    </div>
  );
}
