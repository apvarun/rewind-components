import React, { useState } from "react";
import PropTypes from "prop-types";

export const Tabs = ({
  children,
  className,
  defaultTab = 0,
  outline,
  ...rest
}) => {
  if (children && !children.length) {
    children = [children];
  }
  if (children.length < defaultTab) {
    defaultTab = 0;
  }

  const [activeTab, setActiveTab] = useState(children[defaultTab].props.label);

  const onClickTabItem = tab => {
    setActiveTab(tab);
  };

  return (
    <div className={`p-1 my-1 block ${className || ""}`} {...rest}>
      <div className={`flex flex-wrap`}>
        {children.map(child => {
          const { label, ...restProps } = child.props;
          let tabStyle;
          if (outline) {
            tabStyle = `${
              label === activeTab
                ? `border-l border-t border-r rounded-t border-b-0`
                : `border-b-2`
            }`;
          }

          return (
            <Tab
              active={label === activeTab}
              key={label}
              label={label}
              {...restProps}
              className={tabStyle}
              onClick={() => onClickTabItem(label)}
            />
          );
        })}
      </div>
      <div className={`my-2`}>
        {children.map(child => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array || PropTypes.object,
  defaultTab: PropTypes.number,
  outline: PropTypes.bool
};

export const Tab = ({ className, label, active, ...rest }) => {
  return (
    <div
      className={`px-4 inline-block border-solid hover:border-blue-300 cursor-pointer ${
        active ? "border-blue-500" : ""
      } ${className || "border-b-2"}`}
      {...rest}
    >
      {label}
    </div>
  );
};

Tab.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  active: PropTypes.bool
};
