import * as React from "react";
import { twMerge } from "tailwind-merge";

export function CardHeader({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={twMerge("flex flex-col gap-6", className)} {...props}>
			{children}
		</div>
	);
}
