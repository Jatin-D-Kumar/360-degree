"use client";

import { useState } from "react";
import { Storage } from "@/types";

// Custom hook for managing a personal namespace in localStorage
const useStorage = (namespace: string) => {
  const [storageItems, setStorageItems] = useState<Storage>(
    getLocalStorageData(namespace)
  );

  // Function to set an item in localStorage
  const setItem = (key: string, value: any) => {
    setStorageItems((prevStorageItems) => {
      const updatedStorageItems = { ...prevStorageItems, [key]: value };
      setLocalStorageData(namespace, updatedStorageItems);
      return updatedStorageItems;
    });
  };

  // Function to get an item from localStorage
  const getItem = (key: string) => {
    return storageItems[key];
  };

  // Function to remove an item from localStorage
  const removeItem = (key: string) => {
    setStorageItems((prevStorageItems) => {
      const { [key]: removedItem, ...remainingStorageItems } = prevStorageItems;
      setLocalStorageData(namespace, remainingStorageItems);
      return remainingStorageItems;
    });
  };

  return {
    setItem,
    getItem,
    removeItem,
  };
};

export default useStorage;

// HELPER FUNCTIONS

/**
 * function to get the localStorage data
 * @param namespace customNamespace
 * @returns storageData
 */
function getLocalStorageData(namespace: string) {
  if (typeof localStorage !== "undefined") {
    const storedItems = localStorage.getItem(namespace);
    return storedItems ? JSON.parse(storedItems) : {};
  }
  return {};
}

/**
 * function to set the localStorage data
 * @param namespace customNamespace
 * @param storageData storageData
 */
function setLocalStorageData(namespace: string, storageData: Storage) {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(namespace, JSON.stringify(storageData));
  }
}
