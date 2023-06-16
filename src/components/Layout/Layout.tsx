import classNames from "classnames";
import { PropsWithChildren, useState } from "react";
import data from "../../assets/data/menuItems.json";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }: PropsWithChildren) => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  return (
    <div
      className={classNames({
        // 👇 use grid layout
        "grid min-h-screen": true,
        // 👇 toggle the width of the sidebar depending on the state
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        // 👇 transition animation classes
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
      })}
    >
      {/* sidebar */}
      <Sidebar
        collapsed={collapsed}
        setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
        menuItems={data}
      />
      {/* content */}
      <div className=""> {children}</div>
    </div>
  );
};
export default Layout;
