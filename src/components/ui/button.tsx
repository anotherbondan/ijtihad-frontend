import React from "react";

type ButtonProps = {
  label?: string;
  variant?: "primary" | "secondary";
  icon?: string;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  label = "Click me",
  variant = "primary",
  icon,
  className = "",
}) => {
  const baseClasses =
    "flex w-[237px] h-[54px] justify-center items-center gap-[20px] shrink-0 rounded font-semibold transition rounded-lg";

  const variantClasses =
    variant === "primary"
      ? "bg-[#72d3bd] active:bg-[#1a6e6a]"
      : "bg-white active:bg-[#b2b2b2] border border-[#72d3bd] active:border-[#1a6e6a]";

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`}>
      {icon && (
        <div className="flex p-1 justify-center items-center">
          <img src={icon} alt="icon" className="h-6 w-auto" />
        </div>
      )}
      <h5 className="text-h5 text-Text">{label}</h5>
    </button>
  );
};
