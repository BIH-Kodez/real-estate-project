import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white/20 backdrop-blur-lg p-6 max-w-2xl rounded-2xl shadow-lg ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className = "" }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export { Card, CardContent };
