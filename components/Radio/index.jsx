import React from "react";

const Radio = ({ children, className, ...rest }) => {
  return (
    <label className={`p-1 m-1 inline-block cursor-pointer ${className || ""}`}>
      <input
        type="radio"
        className={`mr-2 leading-tight`}
        {...rest}
      >
      </input>
      {children}
    </label>
  );
};

export default Radio;
