import SvgIcon from "@/components/SvgIcon/SvgIcon";
import { useUI } from "@/hooks/uiContext";
import { useState } from "react";

type SectionItemProps = {
  menuItemLabel: string;
  categoryTitle?: string;
};

const SectionItem: React.FC<SectionItemProps> = ({
  menuItemLabel,
  categoryTitle,
}) => {
  const [active, setActive] = useState({ [menuItemLabel]: false });

  const {
    dispatch,
    state: { collapsed, systemColorTheme },
  } = useUI();

  const addActiveMenuItem = (activeMenu: string) => {
    dispatch({
      type: "addActiveMenuItem",
      payload: activeMenu,
    });
  };

  return (
    <>
      {collapsed
        ? null
        : categoryTitle && (
            <p className="text-xs font-extrabold text-[color:var(--section-light)] dark:text-[color:var(--section-dark)] pl-2">
              {categoryTitle}
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
            active[menuItemLabel]
              ? "bg-[color:var(--section-active-dark)] border-l-4 border-l-[color:var(--section-active-dark-border)] ml-[-4px]"
              : ""
          }
          transition duration-150 ease-in-out`}
        onClick={() => {
          addActiveMenuItem("Catalog");
          setActive((prevActive) => ({
            ...prevActive,
            [menuItemLabel]: !active[menuItemLabel],
          }));
        }}
      >
        <SvgIcon
          iconName={`${menuItemLabel}_${systemColorTheme}`}
          svgProp={{
            width: 26,
            height: 26,
            className: `${
              active[menuItemLabel]
                ? "[&>path]:fill-[color:var(--section-active-dark-border)]"
                : ""
            }`,
          }}
        />
        {collapsed ? null : (
          <p className="text-sm font-semibold">{menuItemLabel}</p>
        )}
      </div>
    </>
  );
};

export default SectionItem;
