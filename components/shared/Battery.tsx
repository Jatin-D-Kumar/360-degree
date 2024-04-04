"use client";

import React from "react";
import useBatteryInfo from "@/hooks/useBatteryInfo";
import {
  MdBattery20,
  MdBattery30,
  MdBattery50,
  MdBattery60,
  MdBattery80,
  MdBattery90,
  MdBatteryFull,
  MdBatteryCharging20,
  MdBatteryCharging30,
  MdBatteryCharging50,
  MdBatteryCharging60,
  MdBatteryCharging80,
  MdBatteryCharging90,
  MdBatteryChargingFull,
} from "react-icons/md";

const Battery = () => {
  const { level, charging } = useBatteryInfo();

  let formattedLevel = Math.floor(level * 100);
  let title = charging
    ? `Charging ${formattedLevel}%`
    : `${formattedLevel}% remaining`;

  let batteryIcon = null;

  if (level === 1) {
    batteryIcon = charging ? <MdBatteryChargingFull /> : <MdBatteryFull />;
  } else if (level >= 0.9) {
    batteryIcon = charging ? <MdBatteryCharging90 /> : <MdBattery90 />;
  } else if (level >= 0.8) {
    batteryIcon = charging ? <MdBatteryCharging80 /> : <MdBattery80 />;
  } else if (level >= 0.6) {
    batteryIcon = charging ? <MdBatteryCharging60 /> : <MdBattery60 />;
  } else if (level >= 0.5) {
    batteryIcon = charging ? <MdBatteryCharging50 /> : <MdBattery50 />;
  } else if (level >= 0.3) {
    batteryIcon = charging ? <MdBatteryCharging30 /> : <MdBattery30 />;
  } else {
    batteryIcon = charging ? <MdBatteryCharging20 /> : <MdBattery20 />;
  }

  return (
    <div className="text-2xl text-black dark:text-white" title={title}>
      {batteryIcon}
    </div>
  );
};

export default Battery;
