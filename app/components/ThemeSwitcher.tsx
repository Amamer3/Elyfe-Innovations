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
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`relative flex w-16 h-8 items-center rounded-full p-1 cursor-pointer bg-zinc-200 dark:bg-zinc-700`}
        onClick={(e) => toggle(e)}
      >
        <motion.div
          className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-md"
          layout
          transition={spring}
          style={{ left: theme === "light" ? "2px" : "calc(100% - 26px)" }}
        >
          {theme === "dark" ? (
            <Moon size={14} className="text-slate-800" />
          ) : (
            <Sun size={14} className="text-yellow-500" />
          )}
        </motion.div>
      </div>
    </div>
  );
}
