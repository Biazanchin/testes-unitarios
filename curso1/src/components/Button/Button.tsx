import React from "react";
type ButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
  color?: "red" | "green";
};

const Button = ({
  children,
  isLoading = false,
  color = "green",
}: ButtonProps) => {
  return (
    <button style={{ backgroundColor: color }}>
      {isLoading ? "Carregando..." : children}
    </button>
  );
};

export default Button;
