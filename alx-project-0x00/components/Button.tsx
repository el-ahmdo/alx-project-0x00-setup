import React from "react";

type ButtonProps = {
  title: string;
  size?: "sm" | "md" | "lg";
  rounded?: "sm" | "md" | "full";
};

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const roundedClasses = {
  sm: "rounded-sm",
  md: "rounded-md",
  full: "rounded-full",
};

const Button: React.FC<ButtonProps> = ({
  title,
  size = "md",
  rounded = "md",
}) => {
  const sizeClass = sizeClasses[size];
  const roundedClass = roundedClasses[rounded];

  return (
    <button
      className={`bg-blue-400 text-white ${sizeClass} ${roundedClass} hover:bg-blue-700 transition`}>
      {title}
    </button>
  );
};

export default Button;
