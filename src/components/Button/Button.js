import React from "react";

export const Button = (props) => {
  const { label, onClick, className, value, type, disabled } = props;
  return (
    <button
      className={className}
      onClick={onClick}
      value={value}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
