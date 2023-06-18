import Section from "@/components/Sidebar/Section";
import SideBarSection from "@/components/Sidebar/SideBarSection";
import SidebarBadgeLogo from "@/components/Sidebar/SidebarBadgeLogo";
import SidebarFooter from "@/components/Sidebar/SidebarFooter";
import { hasCategory } from "@/utils/menuItemsUtils";
import SidebarMenuList from "./SidebarMenuList";

export type Items = {
  category: string;
  menuItems: Record<"label", string>[];
}[];

export type ItemsNoCategory = Record<"label", string>[];

type SidebarProps = {
  menuItems: Items | ItemsNoCategory;
};

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  return (
    <div
      className="        
        bg-[color:var(--light-bg)] dark:bg-[color:var(--dark-bg)] 
        shadow-md
        text-[color:var(--light-font-clr)] dark:text-[color:var(--dark-font-clr)]
        flex flex-col"
    >
      <SidebarBadgeLogo />
      <SideBarSection>
        {hasCategory(menuItems) ? (
          <Section items={menuItems as Items} />
        ) : (
          <SidebarMenuList menuItems={menuItems as ItemsNoCategory} />
        )}
        <SidebarFooter />
      </SideBarSection>
    </div>
  );
};

export default Sidebar;
