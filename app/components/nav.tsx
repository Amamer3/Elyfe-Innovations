"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";
import MobileSidebar from "./MobileSidebar";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const Navigation: React.FC = () => {
	const pathname = usePathname();
	const homeHref = pathname === "/" ? "#home" : "/";
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			<header className="fixed inset-x-0 top-0 z-50 backdrop-blur-lg bg-white/60 dark:bg-black/40 border-b border-zinc-200 dark:border-zinc-700">
				<nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
					{/* Logo and Company Name - Left */}
					<Link href={homeHref} className="flex items-center gap-2 flex-shrink-0">
						<Image
							src="/favicon.png"
							alt="Elyfe Innovations Logo"
							width={32}
							height={32}
							className="w-8 h-8"
						/>
						<span className="font-heading text-lg md:text-xl text-zinc-900 dark:text-white">
							Elyfe Innovations
						</span>
					</Link>
					
					{/* Navigation Items - Center (Desktop Only) */}
					<ul className="hidden md:flex gap-6 text-sm absolute left-1/2 transform -translate-x-1/2">
						{navItems.map(({ label, href }) => (
							<li key={href}>
							<Link
								href={href}
								className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white duration-300 transition-all relative group font-sans"
							>
									{label}
									<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary dark:bg-primary-dark transition-all duration-300 group-hover:w-full"></span>
								</Link>
							</li>
						))}
					</ul>
					
					{/* Right Section - Theme Switcher + Mobile Menu */}
					<div className="flex items-center gap-4 flex-shrink-0">
						{/* Theme Switcher - Hidden on mobile, shown on desktop */}
						<div className="hidden md:block">
							<ThemeSwitcher />
						</div>
						
						{/* Mobile Menu Button / Close Button */}
						{isMobileMenuOpen ? (
							<button
								onClick={closeMobileMenu}
								className="md:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
								aria-label="Close mobile menu"
							>
								<X size={24} className="text-zinc-700 dark:text-zinc-300" />
							</button>
						) : (
							<button
								onClick={toggleMobileMenu}
								className="md:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
								aria-label="Toggle mobile menu"
							>
								<Menu size={24} className="text-zinc-700 dark:text-zinc-300" />
							</button>
						)}
					</div>
				</nav>
			</header>

			{/* Mobile Sidebar */}
			<MobileSidebar isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
		</>
	);
};
