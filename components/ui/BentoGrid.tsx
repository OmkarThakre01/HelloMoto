// src/components/ui/BentoGrid.tsx

import * as React from "react";
import { cn } from "@/lib/utils"; // Utility for conditional class names
import { motion } from "framer-motion";

// Define BentoGrid props
interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

// BentoGrid component
export const BentoGrid: React.FC<BentoGridProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Define BentoGridItem props
interface BentoGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  description: React.ReactNode;
  header: React.ReactNode;
  icon: React.ReactNode;
}

// BentoGridItem component
export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  id,
  title,
  description,
  header,
  icon,
  className,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-200 bg-white p-6 dark:border-white/[0.1] dark:bg-black",
        className
      )}
      {...props}
    >
      <div className="absolute top-4 right-4">{icon}</div>
      <div className="flex-1 h-full">{header}</div>
      <div className="mt-4">
        <div className="font-semibold text-neutral-700 dark:text-neutral-200">
          {title}
        </div>
        <div className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
