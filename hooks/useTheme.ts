"use client";

import { useEffect, useState } from "react";
import useStorage from "./useStorage";
import { MEDIA, NAMESPACE, THEME } from "@/constants";

export default function useTheme() {
  const { setItem, getItem } = useStorage(NAMESPACE);
  const [theme, setTheme] = useState<string>(THEME.DARK);

  // function to toggle theme
  function toggleTheme() {
    if (theme === THEME.DARK) {
      setTheme(THEME.LIGHT);
      setItem("theme", THEME.LIGHT);
    } else {
      setTheme(THEME.DARK);
      setItem("theme", THEME.DARK);
    }
  }

  useEffect(() => {
    const prevTheme = getItem("theme");
    if (!!prevTheme && prevTheme.length > 0) {
      setTheme(prevTheme);
    } else {
      const systemTheme = getSystemTheme();
      setTheme(systemTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === THEME.DARK) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return { theme, toggleTheme };
}

// HELPER FUNCTIONS

/**
 * function to get the system theme
 * @returns string
 */
const getSystemTheme = () => {
  if (typeof window !== "undefined") {
    const isDark = window.matchMedia(MEDIA).matches;
    if (isDark) return THEME.DARK;
  }
  return THEME.LIGHT;
};
