"use client";

import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/contexts/theme-context";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className="flex items-center self-start gap-2 md:fixed md:right-6 top-6">
			{theme === "dark" && <FaRegMoon />}
			<Switch checked={theme === "light"} onCheckedChange={toggleTheme} />
			{theme === "light" && <MdOutlineWbSunny />}
		</div>
	);
}
