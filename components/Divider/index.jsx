import React from "react";

const Divider = ({ children, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={`my-1 bg-gray-400 pt-px antialiased ${className || ""}`}
    ></div>
  );
};

export default Divider;
