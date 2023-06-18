import SvgIcon from "@/components/SvgIcon/SvgIcon";
import React from "react";

type SidebarFooterItemProps = {
  systemColorTheme: string;
  collapsed: boolean;
  text: string;
  icon: string;
};

const SidebarFooterItem: React.FC<SidebarFooterItemProps> = ({
  systemColorTheme,
  collapsed,
  icon,
  text,
}) => {
  return (
    <div className="flex items-center justify-start gap-[5px] pb-[19px] hover:cursor-pointer relative hover:text-[color:var(--light-hover-clr)] dark:hover:text-[color:var(--dark-hover-clr)] hover:before:absolute hover:before:bottom-4 hover:before:h-[1px] hover:before:w-full hover:before:bg-[color:var(--light-font-clr)] dark:hover:before:bg-[color:var(--dark-font-clr)] active:text-[color:var(--light-pressed-clr)] dark:active:text-[color:var(--dark-pressed-clr)]">
      <SvgIcon
        iconName={`${icon}_${systemColorTheme}`}
        svgProp={{ width: 10.5, height: 12 }}
      />
      {collapsed ? null : <p className="text-xs font-medium">{text}</p>}
    </div>
  );
};

export default SidebarFooterItem;
