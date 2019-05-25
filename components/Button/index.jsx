import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, className, primary, dark, disabled, outline, success, ...rest }) => {
  let defaultClass = "bg-gray-200 text-gray-800 hover:bg-gray-400";
  if (outline) defaultClass = "border border-gray-400 bg-transparent text-gray-800 hover:bg-gray-400";
  if (primary) defaultClass = "bg-blue-500 text-white hover:bg-blue-600";
  if (primary && outline) defaultClass = "border border-blue-500 bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white";
  if (success) defaultClass = "bg-green-500 text-white hover:bg-green-600";
  if (success && outline) defaultClass = "border border-green-500 bg-transparent text-green-500 hover:bg-green-500 hover:text-white";
  if (dark) defaultClass = "bg-gray-800 text-white hover:bg-gray-900";
  if (disabled) defaultClass = "bg-gray-100 text-gray-800 cursor-not-allowed";
  return (
    <button
      {...rest}
      className={`rounded px-4 py-1 mx-2 my-1 antialiased focus:outline-none ${defaultClass} ${className ||
        ""}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  outline: PropTypes.bool,
  dark: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Button;
