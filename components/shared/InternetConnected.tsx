"use client";

import React from "react";
import {
  BiSignal5 as SignalIcon,
  BiNoSignal as NoSignalIcon,
} from "react-icons/bi";
import useInternetConnection from "@/hooks/useInternetConnection";

const InternetConnected = () => {
  const { online } = useInternetConnection();

  return (
    <div
      className="text-2xl text-black dark:text-white"
      title={online ? "Online" : "Offline"}
    >
      {online ? <SignalIcon /> : <NoSignalIcon />}
    </div>
  );
};

export default InternetConnected;
