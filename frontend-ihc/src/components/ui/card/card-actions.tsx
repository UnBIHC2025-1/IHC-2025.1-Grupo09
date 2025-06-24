import * as React from "react";
import { twMerge } from "tailwind-merge";

export function CardActions({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={twMerge("flex items-start w-full gap-4 text-sm", className)}
			{...props}
		>
			{children}
		</div>
	);
}
