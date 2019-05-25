import React from "react";

const Card = ({ children, className, image, heading, ...rest }) => {
  return (
    <div
      {...rest}
      className={`inline-block border-none rounded mx-2 my-1 text-gray-800 antialiased shadow hover:shadow-md ${className ||
        ""}`}
    >
      {image && (
        <img
          src={image}
          className={`object-cover w-full rounded-tl rounded-tr`}
        />
      )}
      {heading && <div className="px-4 py-1 font-bold text-xl my-1">{heading}</div>}
      <div className={`px-4 py-2`}>{children}</div>
    </div>
  );
};

export default Card;
