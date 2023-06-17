import React, { PropsWithChildren } from "react";

const SideBarSection: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-col grow justify-between">{children}</div>;
};

export default SideBarSection;
