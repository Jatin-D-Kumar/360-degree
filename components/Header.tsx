"use client";

import React from "react";
import DarkMode from "./shared/DarkMode";
import InternetConnected from "./shared/InternetConnected";
import Battery from "./shared/Battery";

const Header = () => {
  return (
    <header className="flex min-w-full px-8 py-3 justify-between bg-gray-50 dark:bg-gray-950">
      <div className="text-2xl text-emerald-600 dark:text-red-300">
        360-degree
      </div>
      <div className="flex gap-4 items-center">
        <DarkMode />
        <InternetConnected />
        <Battery />
      </div>
    </header>
  );
};

export default Header;
