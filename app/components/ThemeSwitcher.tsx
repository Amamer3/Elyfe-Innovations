"use client";
import { useRef, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";

export default function ThemeSwitcher() {
  const { theme, toggle } = useTheme();
  const [ripple, setRipple] = useState<{ x: number; y: number; key: number } | null>(
    null
  );
  const keyRef = useRef(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y, key: keyRef.current++ });
    toggle();
    // remove ripple after animation completes (600ms)
    setTimeout(() => setRipple(null), 650);
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Toggle Theme"
      className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shadow-md group"
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-zinc-800" />
      ) : (
        <Moon size={20} className="text-zinc-100 fill-current" />
      )}
      {ripple && (
        <span
          key={ripple.key}
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-primary dark:bg-secondary-dark animate-ripple pointer-events-none"
        />
      )}
    </button>
  );
}
