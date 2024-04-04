"use client";

import React from "react";
import {
  MdLightMode as LightIcon,
  MdDarkMode as DarkIcon,
} from "react-icons/md";
import { THEME } from "@/constants";
import useTheme from "@/hooks/useTheme";

const DarkMode = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="text-2xl text-black dark:text-white"
      title={`${theme === THEME.DARK ? THEME.LIGHT : THEME.DARK} mode`}
      onClick={toggleTheme}
    >
      {theme === THEME.DARK ? <LightIcon /> : <DarkIcon />}
    </button>
  );
};

export default DarkMode;
