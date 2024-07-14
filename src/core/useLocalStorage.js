import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
    
  const getStoredData = () => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  };

  const [storedData, setStoredData] = useState(getStoredData);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedData));
  }, [key, storedData]);

  return [storedData, setStoredData];
};
