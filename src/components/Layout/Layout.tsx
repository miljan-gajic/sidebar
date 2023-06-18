import menuItems from "@/assets/data/menuItems.json";
import { useUI } from "@/hooks/uiContext";
import classNames from "classnames";
import { PropsWithChildren } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }: PropsWithChildren) => {
  const {
    state: { collapsed },
  } = useUI();
  return (
    <section
      className={classNames({
        // use grid layout
        "grid min-h-screen": true,
        // toggle the width of the sidebar depending on the state
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
      })}
    >
      {/* sidebar */}
      <Sidebar menuItems={menuItems} />
      {/* content */}
      <section className=""> {children}</section>
    </section>
  );
};
export default Layout;
