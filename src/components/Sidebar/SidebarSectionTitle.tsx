import { useUI } from "@/hooks/uiContext";
import React from "react";

type SidebarSectionTitle = {
  categoryTitle: string;
};

const SidebarSectionTitle: React.FC<SidebarSectionTitle> = ({
  categoryTitle,
}) => {
  const {
    state: { collapsed },
  } = useUI();
  return (
    <>
      {collapsed
        ? null
        : categoryTitle && (
            <p className="text-xs font-extrabold text-[color:var(--section-light)] dark:text-[color:var(--section-dark)] pl-2 uppercase">
              {categoryTitle}
            </p>
          )}
    </>
  );
};

export default SidebarSectionTitle;
