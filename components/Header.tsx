"use client";

import React from "react";
import {
  MdLightMode as LightIcon,
  MdDarkMode as DarkIcon,
} from "react-icons/md";
import { THEME } from "@/constants";
import useTheme from "@/hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="flex min-w-full px-8 py-3 justify-between bg-gray-50 dark:bg-gray-950">
      <div className="text-2xl text-emerald-600 dark:text-red-300">
        360-degree
      </div>
      <div className="flex gap-4">
        <button
          className="text-2xl text-black dark:text-white"
          title={`${theme === THEME.DARK ? THEME.LIGHT : THEME.DARK} mode`}
          onClick={toggleTheme}
        >
          {theme === THEME.DARK ? <LightIcon /> : <DarkIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
