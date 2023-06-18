import { useLocalStorage } from "@/hooks/localStorage";
import { useUI } from "@/hooks/uiContext";
import { useWindowSize } from "@/hooks/windowSize";
import { useEffect, useMemo } from "react";
import SvgIcon from "../../SvgIcon/SvgIcon";
import SidebarFooterItem from "./SidebarFooterItem";

const SidebarFooter = () => {
  const [localState, handleSetState] = useLocalStorage("UI", {});
  const windowSize = useWindowSize();

  const {
    dispatch,
    state: { collapsed, systemColorTheme },
  } = useUI();

  const setCollapsed = () => {
    dispatch({
      type: "addCollapsedMode",
      payload: !collapsed,
    });
  };

  // Return true if the window size is below 768 specified by the design document to not show "Expand" button
  const hideExpandButton = useMemo(() => {
    return windowSize.width && windowSize.width <= 768 ? true : false;
  }, [windowSize]);

  // Synchronizing with local state with local storage
  useEffect(() => {
    handleSetState({ ...localState, collapsed });
  }, [collapsed]);

  return (
    <div
      className="
        pt-4 pr-4 pb-3 pl-4 
        flex justify-between items-center gap-3 
        border-t-[1px] border-border-clr dark:border-dark-bg"
    >
      <div className={`${collapsed ? "ml-2" : ""} pt-4`}>
        <SidebarFooterItem
          icon="data_privacy"
          collapsed={collapsed}
          systemColorTheme={systemColorTheme}
          text="Data Privacy Policy"
        />
        <SidebarFooterItem
          icon="imprint"
          collapsed={collapsed}
          systemColorTheme={systemColorTheme}
          text="Imprint"
          additionalClasses="hover:before:w-full w-fit"
        />
      </div>
      {hideExpandButton ? null : (
        <div
          className="
          p-1           
          bg-light-bg dark:bg-dark-bg 
          rounded-[29px] cursor-pointer"
          onClick={setCollapsed}
          aria-pressed={collapsed}
        >
          <SvgIcon
            iconName={
              collapsed
                ? `expand_${systemColorTheme}`
                : `collapse_${systemColorTheme}`
            }
            svgProp={{
              width: 26,
              height: 26,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SidebarFooter;
