import { useUI } from "@/hooks/uiContext";
import SvgIcon from "../SvgIcon/SvgIcon";

const SidebarFooter = () => {
  const {
    dispatch,
    state: { collapsed },
  } = useUI();

  const setCollapsed = () => {
    dispatch({
      type: "addCollapsedMode",
      payload: !collapsed,
    });
  };
  return (
    <div className="pt-4 pr-4 pb-3 pl-4 flex justify-between items-center gap-3">
      <div>
        <div className="flex items-center justify-start gap-[5px] pb-[19px]">
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
          {collapsed ? null : <p className="text-xs font-medium">Imprint</p>}
        </div>
      </div>
      <div
        className={`
          p-1 
          ${collapsed ? "ml-2" : ""} 
          bg-[color:var(--light-bg)] dark:bg-[color:var(--dark-bg)] 
          rounded-[29px] `}
        onClick={setCollapsed}
      >
        <SvgIcon
          iconName={collapsed ? "expand_dark" : "collapse_dark"}
          svgProp={{ width: 26, height: 26 }}
        />
      </div>
    </div>
  );
};

export default SidebarFooter;
