import React from "react";
import PropTypes from "prop-types";

const Progress = ({
  children,
  className,
  primary,
  dark,
  success,
  percent,
  ...rest
}) => {
  let defaultClass = "border border-gray-400 bg-transparent text-gray-800";
  if (primary)
    defaultClass = "border border-blue-500 bg-transparent text-blue-500";
  if (success)
    defaultClass = "border border-green-500 bg-transparent text-green-500";
  if (dark)
    defaultClass = "border border-gray-900 bg-transparent text-gray-900";
  let progressBarClass = "bg-gray-200 text-gray-800";
  if (primary) progressBarClass = "bg-blue-500 text-white";
  if (success) progressBarClass = "bg-green-500 text-white";
  if (dark) progressBarClass = "bg-gray-800 text-white";
  return (
    <div
      {...rest}
      className={`rounded-full mx-2 my-1 antialiased focus:outline-none ${defaultClass} ${className ||
        ""}`}
    >
      <div
        className={`text-xs font-semibold rounded-full antialiased flex px-4 ${children?'':'py-1'} ${
          percent ? `w-${parseInt((percent * 12) / 100)}/12` : ""
        } ${progressBarClass}`}
      >{children}</div>
    </div>
  );
};

Progress.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.any,
  ]),
  className: PropTypes.string,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  dark: PropTypes.bool,
  percent: PropTypes.number
};

export default Progress;
