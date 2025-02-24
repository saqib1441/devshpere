"use client";

import { useTheme } from "next-themes";
import { FC } from "react";
import { CiLight, CiDark } from "react-icons/ci";

const ThemeButton: FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className="lg:w-9 lg:h-9 w-8 h-8 flex items-center justify-center border rounded-full select-none cursor-pointer transition-all duration-300"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <CiLight className="" />
      ) : (
        <CiDark className="text-gray-900 dark:text-white" />
      )}
    </div>
  );
};

export default ThemeButton;
