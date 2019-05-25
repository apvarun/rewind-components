import React, { useState } from "react";
import PropTypes from "prop-types";

const Alert = ({
  children,
  className,
  primary,
  dark,
  disabled,
  outline,
  success,
  error,
  tag,
  onClose,
  ...rest
}) => {
  let defaultClass = "bg-gray-200 text-gray-800";
  if (outline)
    defaultClass = "border border-gray-400 bg-transparent text-gray-800";
  if (primary) defaultClass = "bg-blue-500 text-white";
  if (primary && outline)
    defaultClass = "border border-blue-500 bg-transparent text-blue-500";
  if (success) defaultClass = "bg-green-500 text-white";
  if (success && outline)
    defaultClass = "border border-green-500 bg-transparent text-green-500";
  if (error) defaultClass = "bg-red-500 text-white";
  if (error && outline)
    defaultClass = "border border-red-500 bg-transparent text-red-500";
  if (dark) defaultClass = "bg-gray-800 text-white";

  let tagClass = "bg-gray-300 text-gray-800";
  if (primary) tagClass = "bg-blue-600 text-white";
  if (dark) tagClass = "bg-black text-white";
  if (success) tagClass = "bg-green-600 text-white";
  if (error) tagClass = "bg-red-600 text-white";

  const [hideAlert, toggleAlert] = useState(false);

  const closeAlert = () => {
    toggleAlert(!hideAlert);
    onClose();
  };
  if (hideAlert) {
    return null;
  }
  return (
    <div
      className={`m-2 p-4 items-center leading-none flex rounded ${defaultClass} ${className ||
        ""}`}
      role="alert"
      {...rest}
    >
      {tag && (
        <span
          className={`flex rounded-full uppercase px-2 py-1 text-xs font-bold mr-3 ${tagClass}`}
        >
          {tag}
        </span>
      )}
      <span className="font-semibold mr-2 text-left flex-auto">{children}</span>
      {onClose && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={closeAlert}
          className={`cursor-pointer`}
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      )}
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  tag: PropTypes.string,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  outline: PropTypes.bool,
  dark: PropTypes.bool,
  disabled: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Alert;
