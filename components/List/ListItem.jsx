import React from "react";

const ListItem = ({ children, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={`px-2 py-1 text-gray-800 antialiased hover:bg-gray-200 select-none ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default ListItem;
