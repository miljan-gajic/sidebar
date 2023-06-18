import SvgIcon from "@/components/SvgIcon/SvgIcon";
import ToolTip from "@/components/Tooltip/Tooltip";
import { useLocalStorage } from "@/hooks/localStorage";
import { useUI } from "@/hooks/uiContext";
import { removeUnderscoreBetweenWords } from "@/utils/textUtils";

type SectionItemProps = {
  menuItemLabel: string;
  setActiveMenuItem: (menuItem: string) => void;
  activeMenuItem: string;
};

const SectionItem: React.FC<SectionItemProps> = ({
  menuItemLabel,
  setActiveMenuItem,
  activeMenuItem,
}) => {
  const [localState, handleSetState] = useLocalStorage("UI", {});

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

  const shouldHighlightActiveMenuItem = activeMenuItem === menuItemLabel;

  return (
    <ToolTip
      tooltip={
        collapsed ? removeUnderscoreBetweenWords(menuItemLabel) : undefined
      }
    >
      <button
        className={`
          flex items-center justify-start gap-x-2 
          ${collapsed ? "pt-2 pr-4 pb-2 pl-3" : "pt-2 pr-4 pb-2 pl-1"}
          hover:bg-[color:var(--section-hover-dark)]
          hover:cursor-pointer
          hover:border-l-4
          hover:ml-[-4px]
          w-full rounded-r-lg ${
            shouldHighlightActiveMenuItem
              ? "bg-[color:var(--section-active-dark)] border-l-4 border-l-[color:var(--section-active-dark-border)] ml-[-4px]"
              : ""
          }
          transition duration-150 ease-in-out`}
        onClick={() => {
          addActiveMenuItem(menuItemLabel);
          setActiveMenuItem(menuItemLabel);
        }}
      >
        <SvgIcon
          iconName={`${menuItemLabel}_${systemColorTheme}`}
          svgProp={{
            width: 26,
            height: 26,
            className: `${
              shouldHighlightActiveMenuItem
                ? "[&>path]:fill-[color:var(--section-active-dark-border)]"
                : ""
            }`,
          }}
        />
        {collapsed ? null : (
          <span className="text-sm font-semibold capitalize">
            {removeUnderscoreBetweenWords(menuItemLabel)}
          </span>
        )}
      </button>
    </ToolTip>
  );
};

export default SectionItem;
