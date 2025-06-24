"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextProps {
	theme: "light" | "dark";
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
	theme: "dark",
	toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<"light" | "dark">("dark");

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme") as "light" | "dark";
		if (storedTheme) {
			setTheme(storedTheme);

			if (storedTheme === "light") {
				document.documentElement.classList.remove("dark");
				document.documentElement.classList.add("light");
			} else {
				document.documentElement.classList.remove("light");
				document.documentElement.classList.add("dark");
			}
		} else {
			document.documentElement.classList.add("dark");
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.classList.remove("light", "dark");
		document.documentElement.classList.add(newTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	return useContext(ThemeContext);
}
