"use client";
import React from "react";
import { motion } from "framer-motion";
import { gridItems } from "@/data/gridData";
import { FaClipboard, FaFileAlt, FaPen, FaTable, FaBoxes } from "../Icons/Icons";

interface SkeletonProps {
  className?: string;
}

const SkeletonOne: React.FC<SkeletonProps> = () => {
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
      className="flex flex-1 w-full h-full min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] bg-dot-white/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-white/[0.2] p-1.5 sm:p-2 items-center space-x-2 bg-black/10 backdrop-blur-sm"
      >
        <div className="h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shrink-0" />
        <div className="w-full bg-white/20 h-3 sm:h-4 rounded-full" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-white/[0.2] p-1.5 sm:p-2 items-center space-x-2 w-3/4 ml-auto bg-black/10 backdrop-blur-sm"
      >
        <div className="w-full bg-white/20 h-3 sm:h-4 rounded-full" />
        <div className="h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo: React.FC<SkeletonProps> = () => {
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
  
  const widths = ["70%", "85%", "60%", "90%", "75%", "80%"];
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] bg-dot-white/[0.2] flex-col space-y-2"
    >
      {widths.map((width, i) => (
        <motion.div
          key={`skeleton-two-${i}`}
          variants={variants}
          style={{ maxWidth: width }}
          className="flex flex-row rounded-full border border-white/[0.2] p-1.5 sm:p-2 items-center space-x-2 bg-black/10 backdrop-blur-sm w-full h-3 sm:h-4"
        />
      ))}
    </motion.div>
  );
};

const SkeletonThree: React.FC<SkeletonProps> = () => {
  const variants = {
    initial: { backgroundPositionX: "0%", backgroundPositionY: "50%" },
    animate: {
      backgroundPositionX: ["0%", "100%", "0%"],
      backgroundPositionY: "50%"
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
      className="flex flex-1 w-full h-full min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] bg-dot-white/[0.2] rounded-lg flex-col space-y-2"
      style={{
        backgroundImage: "linear-gradient(-45deg, #1a365d, #2d3748, #4a5568, #718096)",
        backgroundSize: "400% 400%"
      }}
    >
      <motion.div className="h-full w-full rounded-lg" />
    </motion.div>
  );
};

interface GridItemProps {
  item: typeof gridItems[0];
}

const GridItem: React.FC<GridItemProps> = ({ item }) => {
  const icons = {
    FaClipboard,
    FaFileAlt,
    FaPen,
    FaTable,
    FaBoxes
  };
  
  const skeletons = [SkeletonOne, SkeletonTwo, SkeletonThree];
  const Icon = icons[item.icon as keyof typeof icons];
  const Skeleton = skeletons[parseInt(item.id) % skeletons.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-black/5 p-3 sm:p-4 md:p-6 backdrop-blur-sm ${item.className}`}
    >
      <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
        <Icon className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-white/80" />
      </div>
      <div className="flex-1 h-full">
        <Skeleton />
      </div>
      <div className="mt-2 sm:mt-3 md:mt-4">
        <div className="text-xs sm:text-sm md:text-base font-semibold text-white">
          {item.title}
        </div>
        <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm text-white/80">
          {item.description}
        </div>
      </div>
    </motion.div>
  );
};

export default function Grid() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gridItems.map((item, index) => (
          <div 
            key={item.id} 
            className={index === 0 ? "order-2 sm:order-2 md:order-2 lg:order-2" : "order-1"}
          >
            <GridItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
