import { useUI } from "@/hooks/uiContext";
import classNames from "classnames";
import { PropsWithChildren } from "react";
import data from "../../assets/data/menuItems.json";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }: PropsWithChildren) => {
  const {
    state: { collapsed },
  } = useUI();
  return (
    <div
      className={classNames({
        // use grid layout
        "grid min-h-screen": true,
        // toggle the width of the sidebar depending on the state
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
      })}
    >
      {/* sidebar */}
      <Sidebar menuItems={data} />
      {/* content */}
      <div className=""> {children}</div>
    </div>
  );
};
export default Layout;
