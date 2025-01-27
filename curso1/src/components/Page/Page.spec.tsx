import "@testing-library/jest-dom";
import { getLocalStorage, setLocalStorage, STORAGE_KEY } from "./Page";

describe("getLocalStorage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("should return item from localStorage", () => {
    window.localStorage.setItem(`${STORAGE_KEY}key`, JSON.stringify("Junior"));

    //setLocalStorage('key', 'Junior');

    expect(getLocalStorage("key")).toStrictEqual("Junior");
  });
});

describe("setLocalStorage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("should add the item to localStorage", () => {
    setLocalStorage("key", "Pleno");

    expect(window.localStorage.getItem(`${STORAGE_KEY}key`)).toStrictEqual(
      JSON.stringify("Pleno")
    );

    //expect(getLocalStorage('key')).toStrictEqual('Pleno');
  });
});
