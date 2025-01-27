import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import { useAuth } from "./useAuth";

describe("useAuth", () => {
  it("should return default values", () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.user).toBe(null);
    expect(result.current.isAuthenticated).toBe(false);
    expect(typeof result.current.login).toBe("function");
    expect(typeof result.current.logout).toBe("function");
  });

  it("should isAuthenticated to be false and user to be null when logout was called", () => {
    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.logout();
    });

    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.user).toBe(null);
  });

  it("should isAuthenticated to be true and user contains complete infos when logoin was called correctly", () => {
    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.login(/*{ login: "email@email.com", password: "password" }*/);
    });

    expect(result.current.user).toMatchObject({
      name: "Jhon",
      permissions: ["all"],
      isAdmin: true,
      token: "token",
    });

    expect(result.current.isAuthenticated).toBe(true);
  });
});
