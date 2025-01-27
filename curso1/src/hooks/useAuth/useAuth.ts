import { useState } from "react";

type UserProps = {
  name: string;
  permissions: string[];
  isAdmin: boolean;
  token: string;
};

//type LoginParamsProps = {
//  login: string;
//  password: string;
//};

export const useAuth = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const isAuthenticated = !!user;

  const login = (/*{ login, password }: LoginParamsProps*/) => {
    const response = {
      name: "Jhon",
      permissions: ["all"],
      isAdmin: true,
      token: "token",
    };

    setUser(response);
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
};
