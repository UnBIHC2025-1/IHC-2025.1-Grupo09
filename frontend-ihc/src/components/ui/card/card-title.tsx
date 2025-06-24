import * as React from "react";
import { twMerge } from "tailwind-merge";

export function CardTitle({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h2
			className={twMerge(" text-lg md:text-xl font-bold", className)}
			{...props}
		>
			{children}
		</h2>
	);
}
