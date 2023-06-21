import Section from "@/components/Sidebar/Section/Section";
import SideBarSection from "@/components/Sidebar/Section/SideBarSection";
import SidebarBadgeLogo from "@/components/Sidebar/SidebarBadgeLogo";
import SidebarFooter from "@/components/Sidebar/SidebarFooter/SidebarFooter";
import { hasCategory } from "@/utils/menuItemsUtils";

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
        bg-light-bg dark:bg-dark-bg 
        shadow-md
        text-light-font-clr dark:text-dark-font-clr
        flex flex-col
        max-h-screen overflow-y-scroll"
    >
      <SidebarBadgeLogo />
      <SideBarSection>
        <Section items={menuItems} hasCategories={hasCategory(menuItems)} />
        <SidebarFooter />
      </SideBarSection>
    </div>
  );
};

export default Sidebar;
