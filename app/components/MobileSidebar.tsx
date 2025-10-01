"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, User, Briefcase, FileText, BookOpen, Mail, Palette } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Services", href: "/services", icon: Briefcase },
  { label: "Case Studies", href: "/case-studies", icon: FileText },
  { label: "Blog", href: "/blog", icon: BookOpen },
  { label: "Contact", href: "/contact", icon: Mail },
];

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const pathname = usePathname();

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-72 max-w-[80vw] bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-2xl z-40 md:hidden border-l border-white/20 dark:border-zinc-700/50"
            style={{ top: '80px' }} // Start below navbar
          >

            {/* Navigation Items */}
            <nav className="p-4 flex-1">
              <ul className="space-y-1">
                {navItems.map(({ label, href, icon: Icon }, index) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={href}
                      onClick={handleLinkClick}
                      className="group flex items-center py-3 px-4 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white rounded-lg transition-all duration-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                    >
                      <span className="font-medium text-sm">{label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Theme Switcher */}
            <div className="p-4 border-t border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Palette size={16} className="text-zinc-500 dark:text-zinc-400" />
                  <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    Theme
                  </span>
                </div>
                <ThemeSwitcher />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}