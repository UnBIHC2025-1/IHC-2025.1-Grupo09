import * as React from "react";
import { twMerge } from "tailwind-merge";

export function CardDescription({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p
			className={twMerge("text-sm md:text-lg font-light opacity-70", className)}
			{...props}
		>
			{children}
		</p>
	);
}
