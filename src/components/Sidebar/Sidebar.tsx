import Section from "@/components/Sidebar/Section";
import SideBarSection from "@/components/Sidebar/SideBarSection";
import SidebarBadgeLogo from "@/components/Sidebar/SidebarBadgeLogo";
import SidebarFooter from "@/components/Sidebar/SidebarFooter";

type SidebarProps = {
  menuItems: {
    category: string;
    menuItems: {}[];
  }[];
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
        <Section />
        <SidebarFooter />
      </SideBarSection>
    </div>
  );
};

export default Sidebar;
