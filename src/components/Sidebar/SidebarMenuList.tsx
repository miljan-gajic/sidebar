import { useLocalStorage } from "@/hooks/localStorage";
import { useUI } from "@/hooks/uiContext";
import { useState } from "react";
import SectionItem from "./SectionItem";
import { ItemsNoCategory } from "./Sidebar";

type SidebarMenuListProps = {
  menuItems: ItemsNoCategory;
};

const SidebarMenuList: React.FC<SidebarMenuListProps> = ({ menuItems }) => {
  const [localState] = useLocalStorage("UI", {});
  const [activeMenuItem, setActiveMenuItem] = useState(
    localState["activeMenuItem"]
  );

  const {
    state: { collapsed },
  } = useUI();

  return (
    <div
      className={`${
        collapsed ? "pt-6 pr-1 pb-6 pl-2" : "pt-6 pr-3 pb-6 pl-4"
      } flex flex-col gap-y-12`}
    >
      <div className="flex flex-col gap-y-4 justify-start items-start">
        {menuItems.map(({ label }) => (
          <SectionItem
            key={label}
            menuItemLabel={label}
            activeMenuItem={activeMenuItem}
            setActiveMenuItem={setActiveMenuItem}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarMenuList;
