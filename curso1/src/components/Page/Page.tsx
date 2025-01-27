"use client"; /*utilizando next*/
import { useState } from "react";

export const STORAGE_KEY = "APP:";
export function getLocalStorage(key: string) {
  const data = window.localStorage.getItem(`${STORAGE_KEY}${key}`);

  return JSON.parse(data!);
}

export function setLocalStorage(key: string, value: unknown) {
  const data = JSON.stringify(value);

  return window.localStorage.setItem(`${STORAGE_KEY}${key}`, data);
}

const Storage = () => {
  const [data, setData] = useState();

  function handleGetLocalStorage() {
    const item = getLocalStorage("item_key");

    setData(item);
  }

  function handleSetLocalStorage() {
    setLocalStorage("item_key", "Junior");
  }

  return (
    <div>
      <h2>Storage</h2>

      <p>{data}</p>

      <button onClick={handleSetLocalStorage}>SET</button>
      <button onClick={handleGetLocalStorage}>GET</button>
    </div>
  );
};

export default Storage;
