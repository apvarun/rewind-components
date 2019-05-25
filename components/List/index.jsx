import React from "react";

const List = ({ children, className, ...rest }) => {
  return (
    <div {...rest} className={`mx-2 my-1 bg-gray-100 ${className || ""}`}>{children}</div>
  );
};

export default List;
