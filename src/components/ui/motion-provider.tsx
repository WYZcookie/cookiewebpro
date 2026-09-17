"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

const motionEase = [0.22, 1, 0.36, 1] as const;

type MotionProviderProps = {
  children: ReactNode;
};

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.72, ease: motionEase }}
    >
      {children}
    </MotionConfig>
  );
}
