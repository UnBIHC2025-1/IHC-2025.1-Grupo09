import React from "react";

interface TitleProps {
	word1?: string;
	word2?: string;
}

function Title({ word1 = "RECENT", word2 = "PROJECTS" }: TitleProps) {
	return (
		<h1 className="text-4xl font-bold text-wrap md:text-7xl">
			{word1} <br />
			<span className=" opacity-50">{word2}</span>{" "}
		</h1>
	);
}

export default Title;
