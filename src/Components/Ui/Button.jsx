import React, { forwardRef } from "react";

const Button = forwardRef(
  ({ children, onClick, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`px-3 py-3 rounded-xl border  hover:bg-blue-600 hover:text-white ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
