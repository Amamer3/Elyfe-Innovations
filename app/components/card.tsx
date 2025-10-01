"use client";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";

import { MouseEventHandler, PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ children, className = "", style: customStyle }) => {
	const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
	const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

	function onMouseMove({ currentTarget, clientX, clientY }: any) {
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}
	const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
	const motionStyle = { maskImage, WebkitMaskImage: maskImage };

	return (
		<div
			onMouseMove={onMouseMove}
			className={`overflow-hidden relative duration-700 border rounded-xl hover:bg-white/10 dark:hover:bg-zinc-800/20 group md:gap-8 hover:border-zinc-400/50 border-zinc-200/50 dark:border-zinc-700/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all ${className}`}
			style={customStyle}
		>
			<div className="pointer-events-none">
				<div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
				<motion.div
					className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
					style={motionStyle}
				/>
				<motion.div
					className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
					style={motionStyle}
				/>
			</div>

			{children}
		</div>
	);
};
