"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const defaultTransition = {
  duration: 0.7,
  ease: [0.33, 1, 0.68, 1],
};

export const AnimateHeading = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration,
  threshold = 0.2, // How much of the element needs to be in view
  once = true, // Whether to animate only once or every time it comes into view
}: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once,
  });

  const variants = {
    hidden: {
      y: direction === "up" ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.span
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          ...defaultTransition,
          duration: duration || defaultTransition.duration,
          delay,
        }}
        className={`inline-block ${className}`}
      >
        {children}
      </motion.span>
    </div>
  );
};

// Helper component to create staggered text animations
export const StaggeredHeading = ({
  children,
  className = "",
  wordClassName = "",
  baseDelay = 0,
  staggerChildren = 0.1,
  threshold = 0.2,
  once = true,
}: any) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    amount: threshold,
    once,
  });

  // Convert children to string and split into words
  const words = React.Children.toArray(children)
    .map((child) => (typeof child === "string" ? child : ""))
    .join(" ")
    .split(" ")
    .filter((word) => word.length > 0);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: baseDelay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: "100%",
      opacity: 0,
      scale: 0.98,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: defaultTransition.duration,
        ease: defaultTransition.ease,
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className={`${className} leading-[1.1]`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <motion.span
            className={`inline-block overflow-hidden ${wordClassName}`}
            variants={wordVariants}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default AnimateHeading;
