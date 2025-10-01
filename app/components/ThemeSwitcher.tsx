"use client";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default function ThemeSwitcher() {
  const { theme, toggle } = useTheme();

  return (
    <div
      className="relative flex w-14 h-7 items-center rounded-full p-0.5 cursor-pointer bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 shadow-inner transition-all duration-300 hover:shadow-lg"
      onClick={(e) => toggle(e)}
    >
      <motion.div
        className="absolute flex items-center justify-center w-6 h-6 bg-white dark:bg-zinc-900 rounded-full shadow-lg border border-zinc-200 dark:border-zinc-600"
        layout
        transition={spring}
        style={{ left: theme === "light" ? "2px" : "calc(100% - 26px)" }}
      >
        {theme === "dark" ? (
          <Moon size={12} className="text-zinc-600 dark:text-zinc-300" />
        ) : (
          <Sun size={12} className="text-amber-500" />
        )}
      </motion.div>
    </div>
  );
}
