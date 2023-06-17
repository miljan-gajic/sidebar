import SvgIcon from "@/components/SvgIcon/SvgIcon";
import { useLocalStorage } from "@/hooks/localStorage";
import { useUI } from "@/hooks/uiContext";
import { removeUnderscoreBetweenWords } from "@/utils/textUtils";
import { useState } from "react";

type SectionItemProps = {
  menuItemLabel: string;
  categoryTitle?: string;
};

const SectionItem: React.FC<SectionItemProps> = ({ menuItemLabel }) => {
  const [localState, handleSetState] = useLocalStorage("UI", {});
  const [active, setActive] = useState({
    [menuItemLabel]: localState["activeMenuItem"] === menuItemLabel,
  });

  const {
    dispatch,
    state: { collapsed, systemColorTheme },
  } = useUI();

  const addActiveMenuItem = (activeMenu: string) => {
    dispatch({
      type: "addActiveMenuItem",
      payload: activeMenu,
    });
    handleSetState({ ...localState, activeMenuItem: activeMenu });
  };

  return (
    <button
      className={`
          flex items-center justify-start gap-x-2 
          ${collapsed ? "pt-2 pr-4 pb-2 pl-3" : "pt-2 pr-4 pb-2 pl-1 "}
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
        addActiveMenuItem(menuItemLabel);
        setActive((prevActive) => ({
          ...prevActive,
          [menuItemLabel]: !prevActive[menuItemLabel],
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
        <p className="text-sm font-semibold capitalize">
          {removeUnderscoreBetweenWords(menuItemLabel)}
        </p>
      )}
    </button>
  );
};

export default SectionItem;
