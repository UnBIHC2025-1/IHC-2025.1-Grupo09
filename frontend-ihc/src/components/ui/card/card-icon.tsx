import * as React from "react";
import { twMerge } from "tailwind-merge";

/**
 * Props para o componente de ícone do card
 * - `icon`: qualquer ReactNode (ex.: <CloudIcon />)
 * - `className`: para sobrescrever estilos via Tailwind Merge
 */
export interface CardIconProps extends React.HTMLAttributes<HTMLDivElement> {
	icon: React.ReactNode;
}

/**
 * CardIcon - um quadrado (ou círculo) que contém um ícone centralizado
 */
export function CardIcon({ icon, className, ...props }: CardIconProps) {
	return (
		<div
			className={twMerge(
				// Estilos padrão: tamanho, cor de fundo, arredondamento, centralização
				"p-4 bg-white-005 w-fit rounded-2xl text-4xl",
				className
			)}
			{...props}
		>
			{icon}
		</div>
	);
}
