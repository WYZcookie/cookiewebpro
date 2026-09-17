"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

import { siteConfig } from "@/data/site";

const titleVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.09,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-field" aria-hidden="true">
        <span className="hero-field__disc" />
        <span className="hero-field__line hero-field__line--one" />
        <span className="hero-field__line hero-field__line--two" />
      </div>

      <div className="page-shell hero-layout">
        <motion.div
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.12, duration: 0.7 }}
        >
          <span>{siteConfig.role}</span>
          <span>个人主页系统 / 2026</span>
        </motion.div>

        <motion.h1
          id="hero-title"
          className="hero-title"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          {siteConfig.heroTitle.map((line, index) => (
            <motion.span key={line} variants={lineVariants}>
              {line}
              {index === siteConfig.heroTitle.length - 1 ? (
                <i aria-hidden="true" />
              ) : null}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.58 }}
        >
          <p>{siteConfig.heroDescription}</p>
          <div className="hero-actions">
            <a className="button button--primary" href="#work">
              查看精选作品
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="text-link" href="#approach">
              了解开发理念
            </a>
          </div>
        </motion.div>

        <motion.a
          className="scroll-cue"
          href="#approach"
          aria-label="向下滚动到开发理念区块"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <ArrowDown size={16} aria-hidden="true" />
          <span>探索更多</span>
        </motion.a>
      </div>
    </section>
  );
}