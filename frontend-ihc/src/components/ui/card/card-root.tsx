"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

/**
 * 1) Defina estilos base e variantes
 */
const cardVariants = tv({
	base: "p-6 flex min-h-fit gap-6 rounded-3xl hover:bg-white-005",
	variants: {
		layout: {
			default: "flex ",
			service: "flex flex-col",
		},
		cardColor: {
			pink: "border-1 border-pink-400 ",
			gray: "bg-white-005",
		},
	},
	defaultVariants: {
		layout: "default",
		color: "pink",
	},
});

/**
 * 2) Defina o tipo das props combinando HTMLAttributes + VariantProps
 */
export interface CardRootProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof cardVariants> {}

/**
 * 3) Crie o componente Root
 */
export function CardRoot({
	layout,
	cardColor,
	className,
	children,
	...props
}: CardRootProps) {
	return (
		<div
			className={twMerge(cardVariants({ layout, cardColor }), className)}
			{...props}
		>
			{children}
		</div>
	);
}
