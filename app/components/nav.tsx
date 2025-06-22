"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "/contact" },
];

export const Navigation: React.FC = () => {
	const pathname = usePathname();
	const homeHref = pathname === "/" ? "#home" : "/";

	return (
		<header className="fixed inset-x-0 top-0 z-50 backdrop-blur-lg bg-white/60 dark:bg-black/40 border-b border-zinc-200 dark:border-zinc-700">
			<nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
				<Link href={homeHref} className="flex items-center gap-2">
					<Image
						src="/favicon.png"
						alt="Elyfe Innovations Logo"
						width={32}
						height={32}
						className="w-8 h-8"
					/>
					<span className="font-display text-lg md:text-xl text-zinc-900 dark:text-white">
						Elyfe Innovations
					</span>
				</Link>
				<ul className="hidden md:flex gap-6 text-sm">
					{navItems.map(({ label, href }) => (
						<li key={href}>
							<Link
								href={href.startsWith("#") && pathname !== "/" ? `/${href}` : href}
								className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white duration-150"
							>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};
