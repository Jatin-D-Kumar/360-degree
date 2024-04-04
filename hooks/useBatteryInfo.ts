"use client";

import { useState, useEffect } from "react";
import { BatteryInfo } from "@/types";

export default function useBatteryInfo() {
  const [batteryInfo, setBatteryInfo] = useState<BatteryInfo>({
    level: 0,
    charging: false,
  });

  useEffect(() => {
    let battery: any = null;
    if (typeof navigator !== "undefined" && "getBattery" in navigator) {
      (navigator as any).getBattery().then((batteryObj: any) => {
        battery = batteryObj;
        setBatteryInfo({
          level: battery.level,
          charging: battery.charging,
        });

        const propertyChangeHandler = (propertyName: keyof BatteryInfo) => {
          return () => {
            setBatteryInfo((prevBattery) => ({
              ...prevBattery,
              [propertyName]: battery[propertyName],
            }));
          };
        };

        battery.addEventListener("levelchange", propertyChangeHandler("level"));
        battery.addEventListener(
          "chargingchange",
          propertyChangeHandler("charging")
        );
      });
    }
    return () => {
      if (battery) {
        battery.removeEventListener("levelchange", () => {});
        battery.removeEventListener("chargingchange", () => {});
      }
    };
  }, []);

  return batteryInfo;
}
