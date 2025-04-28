export interface GridItem {
  id: string;
  title: string;
  description: string;
  className: string;
  icon: string;
  image?: string;
  spanImg?: string;
}

export const gridItems: GridItem[] = [
  {
    id: "1",
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    className: "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 row-span-1 sm:row-span-2 md:row-span-3 lg:row-span-4 h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] bg-gradient-to-br from-blue-900/90 to-indigo-900/90 dark:from-blue-950/90 dark:to-indigo-950/90",
    icon: "FaClipboard",
    image: "/innovation.jpg"
  },
  {
    id: "2",
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    className: "col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] bg-gradient-to-br from-emerald-900/90 to-teal-900/90 dark:from-emerald-950/90 dark:to-teal-950/90",
    icon: "FaFileAlt",
    image: "/revolution.jpg",
    spanImg: "/icons/transform.svg"
  },
  {
    id: "3",
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    className: "col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] bg-gradient-to-br from-purple-900/90 to-pink-900/90 dark:from-purple-950/90 dark:to-pink-950/90",
    icon: "FaPen",
    image: "/design.jpg",
    spanImg: "/icons/design.svg"
  },
  {
    id: "4",
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    className: "col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] bg-gradient-to-br from-amber-900/90 to-orange-900/90 dark:from-amber-950/90 dark:to-orange-950/90",
    icon: "FaTable",
    image: "/communication.jpg",
    spanImg: "/icons/communication.svg"
  }
]; 