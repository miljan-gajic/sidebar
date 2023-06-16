import { truncateWord } from "@/utils/textUtils";
import { useState } from "react";
import SvgIcon from "../SvgIcon/SvgIcon";

type SidebarProps = {
  collapsed: boolean;
  setCollapsed(collapsed: boolean): void;
  menuItems: {
    category: string;
    menuItems: {}[];
  }[];
};

const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  setCollapsed,
  menuItems,
}) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className="        
        bg-[color:var(--light-bg)] dark:bg-[color:var(--dark-bg)] 
        shadow-md
        text-[color:var(--light-font-clr)] dark:text-[color:var(--dark-font-clr)]"
    >
      <div
        className="
          h-[var(--badge-height)] 
          bg-[color:var(--badge-clr)] 
          w-full px-[24px] py-[16px]
          flex justify-center items-center"
      >
        <button
          className={`
            ${
              collapsed
                ? "w-[25px] h-[23px] py-1 px-2"
                : "w-[var(--badge-button-width)] p-1"
            }            
            rounded-2xl
            text-[color:var(--badge-clr)]              
            bg-[color:var(--light-bg-content)] 
            text-xs font-bold`}
        >
          {collapsed ? truncateWord("ADMINISTRATION", 0) : "ADMINISTRATION"}
        </button>
      </div>
      <div className="flex flex-col justify-between">
        {/* In the design there were paddings that are not symmetrical, 24px, 12px, 24px, 16px I don't know if this is some error or not */}
        <div className="pt-[24px] pr-[12px] pb-[24px] pl-[16px] flex flex-col grow gap-y-12">
          <div
            id="category 1"
            className="flex flex-col gap-y-[25px] justify-start items-start"
          >
            {collapsed ? null : (
              <p className="text-xs font-extrabold text-[color:var(--section-light)] dark:text-[color:var(--section-dark)] pl-2">
                PROCUREMENT
              </p>
            )}
            <div
              className={`
              flex items-center justify-start gap-x-2 
              pt-[8px] pr-[16px] pb-[8px] pl-[4px] 
              hover:bg-[color:var(--section-hover-dark)]
              hover:cursor-pointer
              hover:border-l-4
              w-full rounded-r-lg ${
                active ? "bg-[color:var(--section-active-dark)] border-l-4" : ""
              }
              transition duration-150 ease-in-out`}
              onClick={() => setActive(!active)}
            >
              <SvgIcon
                iconName="catalogs_dark"
                svgProp={{ width: 26, height: 26 }}
              />
              {collapsed ? null : (
                <p className="text-sm font-semibold">Catalog</p>
              )}
            </div>
            <div
              className={`
              flex items-center justify-start gap-x-2 
              pt-[8px] pr-[16px] pb-[8px] pl-[4px]
              hover:bg-[color:var(--section-hover-dark)]
              hover:cursor-pointer
              hover:border-l-4
              w-full rounded-r-lg ${
                active ? "bg-[color:var(--section-active-dark)] border-l-4" : ""
              }
              transition duration-150 ease-in-out`}
            >
              <SvgIcon
                iconName="projects_dark"
                svgProp={{ width: 26, height: 26 }}
              />
              {collapsed ? null : (
                <p className="text-sm font-semibold">Projects</p>
              )}
            </div>
            <div
              className={`
            flex items-center justify-start gap-x-2 
            pt-[8px] pr-[16px] pb-[8px] pl-[4px]
            hover:bg-[color:var(--section-hover-dark)]
            hover:cursor-pointer
            hover:border-l-4
            w-full rounded-r-lg ${
              active ? "bg-[color:var(--section-active-dark)] border-l-4" : ""
            }
            transition duration-150 ease-in-out`}
            >
              <SvgIcon
                iconName="jobs_dark"
                svgProp={{ width: 26, height: 26 }}
              />
              {collapsed ? null : <p className="text-sm font-semibold">Jobs</p>}
            </div>
          </div>
          <div
            id="category 2"
            className="flex flex-col gap-y-[25px] justify-start items-start"
          >
            {collapsed ? null : (
              <p className="text-xs font-extrabold text-[color:var(--section-light)] dark:text-[color:var(--section-dark)] pl-2">
                RESOURCES
              </p>
            )}
            <div
              className={`
              flex items-center justify-start gap-x-2 
              pt-[8px] pr-[16px] pb-[8px] pl-[4px]
              hover:bg-[color:var(--section-hover-dark)]
              hover:cursor-pointer
              hover:border-l-4
              w-full rounded-r-lg ${
                active ? "bg-[color:var(--section-active-dark)] border-l-4" : ""
              }
              transition duration-150 ease-in-out`}
            >
              <SvgIcon
                iconName="files_dark"
                svgProp={{ width: 26, height: 26 }}
              />
              {collapsed ? null : (
                <p className="text-sm font-semibold">Files</p>
              )}
            </div>
            <div
              className={`
              flex items-center justify-start gap-x-2 
              pt-[8px] pr-[16px] pb-[8px] pl-[4px]
              hover:bg-[color:var(--section-hover-dark)]
              hover:cursor-pointer
              hover:border-l-4
              w-full rounded-r-lg ${
                active ? "bg-[color:var(--section-active-dark)] border-l-4" : ""
              }
              transition duration-150 ease-in-out`}
            >
              <SvgIcon
                iconName="media_assets_dark"
                svgProp={{ width: 26, height: 26 }}
              />
              {collapsed ? null : (
                <p className="text-sm font-semibold">Media Assets</p>
              )}
            </div>
            <div
              className={`
              flex items-center justify-start gap-x-2 
              pt-[8px] pr-[16px] pb-[8px] pl-[4px]
              hover:bg-[color:var(--section-hover-dark)]
              hover:cursor-pointer
              hover:border-l-4
              w-full rounded-r-lg ${
                active ? "bg-[color:var(--section-active-dark)] border-l-4" : ""
              }
              transition duration-150 ease-in-out`}
            >
              <SvgIcon
                iconName="manuals_dark"
                svgProp={{ width: 26, height: 26 }}
              />
              {collapsed ? null : (
                <p className="text-sm font-semibold">Manuals</p>
              )}
            </div>
          </div>
        </div>

        <div className="pt-4 pr-4 pb-3 pl-4 flex justify-between items-center gap-3">
          <div>
            <div className="flex items-center justify-start gap-[5px] pb-1">
              <SvgIcon
                iconName="data_privacy_dark"
                svgProp={{ width: 10.5, height: 12 }}
              />
              {collapsed ? null : (
                <p className="text-xs font-medium">Data Privacy Policy</p>
              )}
            </div>
            <div className="flex items-center justify-start gap-[5px] pb-1">
              <SvgIcon
                iconName="imprint_dark"
                svgProp={{ width: 10.5, height: 12 }}
              />
              {collapsed ? null : (
                <p className="text-xs font-medium">Imprint</p>
              )}
            </div>
          </div>
          <div className="p-1" onClick={() => setCollapsed(!collapsed)}>
            <SvgIcon
              iconName={collapsed ? "expand_dark" : "collapse_dark"}
              svgProp={{ width: 26, height: 26 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
