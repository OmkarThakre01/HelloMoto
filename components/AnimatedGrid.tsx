"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { FaClipboard, FaFileAlt, FaPen, FaTable, FaBoxes } from "../Icons/Icons";

const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: {
      x: 10,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: {
      x: -10,
      rotate: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-1.5 sm:p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <div className="w-full bg-gray-100 h-3 sm:h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-1.5 sm:p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-3 sm:h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: { width: 0 },
    animate: {
      width: "100%",
      transition: { duration: 0.2 },
    },
    hover: {
      width: ["0%", "100%"],
      transition: { duration: 2 },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{ maxWidth: Math.random() * (100 - 40) + 40 + "%" }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-1.5 sm:p-2 items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-3 sm:h-4"
        />
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg" />
    </motion.div>
  );
};

interface BentoGridItemProps {
  id: string;
  title: string;
  description: string;
  header: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

interface BentoGridProps {
  className?: string;
  children: React.ReactNode;
}

const BentoGrid: React.FC<BentoGridProps> = ({ className, children }) => {
  return (
    <div className={cn("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto", className)}>
      {children}
    </div>
  );
};

const BentoGridItem: React.FC<BentoGridItemProps> = ({ id, title, description, header, className, icon }) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <FaClipboard className="h-3 w-3 sm:h-4 sm:w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <FaFileAlt className="h-3 w-3 sm:h-4 sm:w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <FaPen className="h-3 w-3 sm:h-4 sm:w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    header: <SkeletonOne />,
    className: "md:col-span-2",
    icon: <FaTable className="h-3 w-3 sm:h-4 sm:w-4 text-neutral-500" />,
  },
  {
    title: "The Future of Technology",
    description: "Explore what's next in the world of technology.",
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <FaBoxes className="h-3 w-3 sm:h-4 sm:w-4 text-neutral-500" />,
  },
];

export function AnimatedGrid() {
  return (
    <section id="about" className="py-6 sm:py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-black/5 p-3 sm:p-4 md:p-6 backdrop-blur-sm",
                item.className
              )}
            >
              <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
                {item.icon}
              </div>
              <div className="flex-1 h-full">
                {item.header}
              </div>
              <div className="mt-2 sm:mt-3 md:mt-4">
                <div className="text-xs sm:text-sm md:text-base font-semibold text-white">
                  {item.title}
                </div>
                <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm text-white/80">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 