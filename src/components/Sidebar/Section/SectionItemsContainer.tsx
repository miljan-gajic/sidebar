import React, { PropsWithChildren } from "react";

type SectionItemsContainerProps = {
  sectionTitle?: React.ReactNode | React.ReactElement;
} & PropsWithChildren;

const SectionItemsContainer: React.FC<SectionItemsContainerProps> = ({
  children,
  sectionTitle,
}) => {
  return (
    <div className="flex flex-col justify-start items-start">
      {sectionTitle && sectionTitle}
      {children}
    </div>
  );
};

export default SectionItemsContainer;
