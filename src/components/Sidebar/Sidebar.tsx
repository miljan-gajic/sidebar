type SidebarProps = {
  collapsed: boolean;
  setCollapsed(collapsed: boolean): void;
};

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  return (
    <div
      className="        
        bg-[color:var(--light-bg)] dark:bg-[color:var(--dark-bg)] 
        shadow-md
        text-[color:var(--light-font-clr)] dark:text-[color:var(--dark-font-clr)]"
    >
      <div
        className="
          h-[var(--badge-height)] 
          bg-[color:var(--badge-clr)] 
          w-full px-[24px] py-[16px]
          flex justify-center items-center"
      >
        <button className="w-[var(--badge-button-width)] text-[color:var(--badge-clr)] rounded-2xl bg-[color:var(--light-bg-content)] p-1 text-xs">
          ADMINISTRATION
        </button>
      </div>
      <button onClick={() => setCollapsed(!collapsed)}>X</button>
    </div>
  );
};

export default Sidebar;
