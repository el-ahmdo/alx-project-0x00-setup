import React from "react";

type ButtonProps = {
  title: string;
  size?: "sm" | "md" | "lg";
  rounded?: "rounded-sm" | "rounded-md" | "rounded-full";
};

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({ title, size = "md", rounded }) => {
  const sizeClass = sizeClasses[size];

  return (
    <button
      className={`bg-blue-400 text-white ${sizeClass} ${rounded} hover:bg-blue-700 transition`}>
      {title}
    </button>
  );
};

export default Button;
