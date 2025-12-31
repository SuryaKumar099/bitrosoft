import React, { forwardRef } from "react";

/* Card */
const Card = forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-xl border bg-white text-gray-900 shadow ${className}`}
    {...props}
  />
));
Card.displayName = "Card";

/* CardHeader */
const CardHeader = forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col space-y-1.5 p-4 ${className}`}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

/* CardTitle */
const CardTitle = forwardRef(({ className = "", ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-lg font-semibold leading-none ${className}`}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

/* CardDescription */
const CardDescription = forwardRef(({ className = "", ...props }, ref) => (
  <p
    ref={ref}
    className={`text-sm text-gray-500 ${className}`}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

/* CardContent */
const CardContent = forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`p-4 pt-0 ${className}`}
    {...props}
  />
));
CardContent.displayName = "CardContent";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
};
