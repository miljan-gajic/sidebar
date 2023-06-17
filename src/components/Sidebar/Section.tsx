import SvgIcon from "@/components/SvgIcon/SvgIcon";
import { useUI } from "@/hooks/uiContext";
import { useState } from "react";

const Section = () => {
  const [active, setActive] = useState(false);
  const {
    dispatch,
    state: { activeMenuItem, collapsed, systemColorTheme },
  } = useUI();

  const addActiveMenuItem = (activeMenu: string) => {
    dispatch({
      type: "addActiveMenuItem",
      payload: activeMenu,
    });
  };
  {
    /* In the design there were paddings that are not symmetrical, 24px, 12px, 24px, 16px I don't know if this is some error or not */
  }

  return (
    <div
      className={`${
        collapsed ? "pt-6 pr-1 pb-6 pl-2" : "pt-6 pr-3 pb-6 pl-4"
      } flex flex-col gap-y-12`}
    >
      <div className="flex flex-col gap-y-4 justify-start items-start">
        {collapsed ? null : (
          <p className="text-xs font-extrabold text-[color:var(--section-light)] dark:text-[color:var(--section-dark)] pl-2">
            PROCUREMENT
          </p>
        )}
        <button
          className={`
            flex items-center justify-start gap-x-2 
            pt-[8px] pr-[16px] pb-[8px] pl-[4px] 
            hover:bg-[color:var(--section-hover-dark)]
            hover:cursor-pointer
            hover:border-l-4
            hover:ml-[-4px]
            w-full rounded-r-lg ${
              active
                ? "bg-[color:var(--section-active-dark)] border-l-4 border-l-[color:var(--section-active-dark-border)] ml-[-4px]"
                : ""
            }
            transition duration-150 ease-in-out`}
          onClick={(e) => {
            addActiveMenuItem("Catalog");
            setActive(!active);
            console.log(e.currentTarget);
          }}
        >
          <SvgIcon
            iconName={`catalog_${systemColorTheme}`}
            svgProp={{
              width: 26,
              height: 26,
              className: `${
                active
                  ? "[&>path]:fill-[color:var(--section-active-dark-border)]"
                  : ""
              }`,
            }}
          />
          {collapsed ? null : <p className="text-sm font-semibold">Catalog</p>}
        </button>
        <div
          className={`
            flex items-center justify-start gap-x-2 
            pt-[8px] pr-[16px] pb-[8px] pl-[4px]
            hover:bg-[color:var(--section-hover-dark)]
            hover:cursor-pointer
            hover:border-l-4
            hover:ml-[-4px]
            w-full rounded-r-lg ${
              active
                ? "bg-[color:var(--section-active-dark)] border-l-4 border-l-[color:var(--section-active-dark-border)] ml-[-4px]"
                : ""
            }
            transition duration-150 ease-in-out`}
        >
          <SvgIcon
            iconName={`projects_${systemColorTheme}`}
            svgProp={{
              width: 26,
              height: 26,
              className: `${
                active
                  ? "[&>path]:fill-[color:var(--section-active-dark-border)]"
                  : ""
              }`,
            }}
          />
          {collapsed ? null : <p className="text-sm font-semibold">Projects</p>}
        </div>
        <div
          className={`
            flex items-center justify-start gap-x-2 
            pt-[8px] pr-[16px] pb-[8px] pl-[4px]
            hover:bg-[color:var(--section-hover-dark)]
            hover:cursor-pointer
            hover:border-l-4
            hover:ml-[-4px]
            w-full rounded-r-lg ${
              active
                ? "bg-[color:var(--section-active-dark)] border-l-4 border-l-[color:var(--section-active-dark-border)] ml-[-4px]"
                : ""
            }
            transition duration-150 ease-in-out`}
        >
          <SvgIcon
            iconName={`jobs_${systemColorTheme}`}
            svgProp={{
              width: 26,
              height: 26,
              className: `${
                active
                  ? "[&>path]:fill-[color:var(--section-active-dark-border)]"
                  : ""
              }`,
            }}
          />
          {collapsed ? null : <p className="text-sm font-semibold">Jobs</p>}
        </div>
      </div>
      <div
        id="category 2"
        className="flex flex-col gap-y-4 justify-start items-start"
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
            hover:ml-[-4px]
            w-full rounded-r-lg ${
              active
                ? "bg-[color:var(--section-active-dark)] border-l-4 border-l-[color:var(--section-active-dark-border)] ml-[-4px]"
                : ""
            }
            transition duration-150 ease-in-out`}
        >
          <SvgIcon
            iconName={`files_${systemColorTheme}`}
            svgProp={{
              width: 26,
              height: 26,
              className: `${
                active
                  ? "[&>path]:fill-[color:var(--section-active-dark-border)]"
                  : ""
              }`,
            }}
          />
          {collapsed ? null : <p className="text-sm font-semibold">Files</p>}
        </div>
        <div
          className={`
            flex items-center justify-start gap-x-2 
            pt-[8px] pr-[16px] pb-[8px] pl-[4px]
            hover:bg-[color:var(--section-hover-dark)]
            hover:cursor-pointer
            hover:border-l-4
            hover:ml-[-4px]
            w-full rounded-r-lg ${
              active
                ? "bg-[color:var(--section-active-dark)] border-l-4 border-l-[color:var(--section-active-dark-border)] ml-[-4px]"
                : ""
            }
            transition duration-150 ease-in-out`}
        >
          <SvgIcon
            iconName={`media_assets_${systemColorTheme}`}
            svgProp={{
              width: 26,
              height: 26,
              className: `${
                active
                  ? "[&>path]:fill-[color:var(--section-active-dark-border)]"
                  : ""
              }`,
            }}
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
            hover:ml-[-4px]
            w-full rounded-r-lg ${
              active
                ? "bg-[color:var(--section-active-dark)] border-l-4 border-l-[color:var(--section-active-dark-border)] ml-[-4px]"
                : ""
            }
            transition duration-150 ease-in-out`}
        >
          <SvgIcon
            iconName={`manuals_${systemColorTheme}`}
            svgProp={{
              width: 26,
              height: 26,
              className: `${
                active
                  ? "[&>path]:fill-[color:var(--section-active-dark-border)]"
                  : ""
              }`,
            }}
          />
          {collapsed ? null : <p className="text-sm font-semibold">Manuals</p>}
        </div>
      </div>
    </div>
  );
};

export default Section;
