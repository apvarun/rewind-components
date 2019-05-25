import React from "react";

const Chip = ({ children, className, onClose, ...rest }) => {
  return (
    <div
      {...rest}
      className={`mx-2 my-1 px-4 py-1 inline-block cursor-pointer bg-gray-200 text-gray-800 antialiased hover:bg-gray-300 rounded-full select-none ${className ||
        ""}`}
    >
      {children}
      {onClose && (
        <div
          onClick={onClose}
          className={`ml-2 -mr-4 -my-1 px-3 py-1 inline-block cursor-pointer bg-gray-400 text-gray-800 antialiased rounded-full`}
        >
          X
        </div>
      )}
    </div>
  );
};

export default Chip;
