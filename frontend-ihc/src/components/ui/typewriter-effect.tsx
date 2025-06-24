"use client";
import React, { useState, useEffect } from "react";

interface TypewriterEffectProps {
	texts: string[]; // Array de textos a serem exibidos
	speed?: number; // Velocidade da digitação (ms)
	deleteSpeed?: number; // Velocidade da deleção (ms)
	pause?: number; // Pausa após terminar de digitar ou apagar (ms)
	minLengths?: number[]; // Comprimento mínimo a manter para cada texto
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
	texts,
	speed = 120,
	deleteSpeed = 100,
	pause = 2000,
	// Se minLengths não for fornecido, define para o primeiro texto minLength=2 e os demais 0
	minLengths = texts.map((_, idx) => (idx === 0 ? 0 : 0)),
}) => {
	const [displayedText, setDisplayedText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [currentTextIndex, setCurrentTextIndex] = useState(0);

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>;
		const currentText = texts[currentTextIndex];
		const currentMinLength = minLengths[currentTextIndex] ?? 0;

		if (!isDeleting && displayedText !== currentText) {
			// Digitação: adiciona uma letra por vez
			timeoutId = setTimeout(() => {
				setDisplayedText(currentText.slice(0, displayedText.length + 1));
			}, speed);
		} else if (!isDeleting && displayedText === currentText) {
			// Texto completo: aguarda e inicia deleção
			timeoutId = setTimeout(() => {
				setIsDeleting(true);
			}, pause);
		} else if (isDeleting && displayedText.length > currentMinLength) {
			// Deleção: apaga uma letra por vez até atingir o mínimo
			timeoutId = setTimeout(() => {
				setDisplayedText(currentText.slice(0, displayedText.length - 1));
			}, deleteSpeed);
		} else if (isDeleting && displayedText.length === currentMinLength) {
			// Ao atingir o mínimo, aguarda e passa para o próximo texto
			timeoutId = setTimeout(() => {
				setIsDeleting(false);
				setCurrentTextIndex((prev) => (prev + 1) % texts.length);
				setDisplayedText("");
			}, 100);
		}

		return () => clearTimeout(timeoutId);
	}, [
		displayedText,
		isDeleting,
		currentTextIndex,
		texts,
		speed,
		deleteSpeed,
		pause,
		minLengths,
	]);

	// O cursor pisca somente quando a digitação está completa (e não em deleção)
	const cursorClass =
		!isDeleting && displayedText === texts[currentTextIndex]
			? "blinking-cursor text-7xl"
			: "text-7xl";

	return (
		<span>
			{displayedText}
			<span className={cursorClass}>_</span>
		</span>
	);
};

export default TypewriterEffect;
