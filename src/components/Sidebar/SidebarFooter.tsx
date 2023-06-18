import { useLocalStorage } from "@/hooks/localStorage";
import { useUI } from "@/hooks/uiContext";
import { useEffect } from "react";
import SvgIcon from "../SvgIcon/SvgIcon";

const SidebarFooter = () => {
  const [localState, handleSetState] = useLocalStorage("UI", {});
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

  useEffect(() => {
    handleSetState({ ...localState, collapsed });
  }, [collapsed]);
  return (
    <div
      className="
        pt-4 pr-4 pb-3 pl-4 
        flex justify-between items-center gap-3 
        border-t-[1px] border-[color:var(--border-clr)] dark:border-[color:var(--dark-bg)]"
    >
      <div className={`${collapsed ? "ml-2" : ""}`}>
        <div
          className="flex items-center justify-start gap-[5px] pb-[19px] hover:cursor-pointer relative 
                    hover:before:absolute hover:before:bottom-4 hover:before:h-[1px] hover:before:w-full hover:before:bg-[color:var(--dark-font-clr)]"
        >
          <SvgIcon
            iconName={`data_privacy_${systemColorTheme}`}
            svgProp={{ width: 10.5, height: 12 }}
          />
          {collapsed ? null : (
            <p className="text-xs font-medium">Data Privacy Policy</p>
          )}
        </div>
        <div
          className="flex w-fit items-center justify-start gap-[5px] pb-1 hover:cursor-pointer relative 
            hover:after:absolute hover:after:bottom-[1px] hover:after:h-[1px] hover:after:w-full hover:after:bg-[color:var(--dark-font-clr)]"
        >
          <SvgIcon
            iconName={`imprint_${systemColorTheme}`}
            svgProp={{ width: 10.5, height: 12 }}
          />
          {collapsed ? null : <p className="text-xs font-medium">Imprint</p>}
        </div>
      </div>
      <div
        className="
          p-1           
          bg-[color:var(--light-bg)] dark:bg-[color:var(--dark-bg)] 
          rounded-[29px] cursor-pointer"
        onClick={setCollapsed}
      >
        <SvgIcon
          iconName={
            collapsed
              ? `expand_${systemColorTheme}`
              : `collapse_${systemColorTheme}`
          }
          svgProp={{ width: 26, height: 26 }}
        />
      </div>
    </div>
  );
};

export default SidebarFooter;
