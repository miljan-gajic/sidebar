import { useUI } from "@/hooks/uiContext";
import { truncateWord } from "@/utils/textUtils";

const SidebarBadgeLogo = () => {
  const {
    state: { collapsed },
  } = useUI();

  return (
    <div
      className="
      h-[var(--badge-height)] 
      bg-[color:var(--badge-clr)] 
      w-full px-[24px] py-[16px]
      flex justify-center items-center"
    >
      <button
        className={`
        ${
          collapsed
            ? "w-[25px] h-[23px] py-1 px-2"
            : "w-[var(--badge-button-width)] p-1"
        }            
        rounded-2xl
        text-[color:var(--badge-clr)]              
        bg-[color:var(--light-bg-content)] 
        text-xs font-bold`}
      >
        {collapsed ? truncateWord("ADMINISTRATION", 0) : "ADMINISTRATION"}
      </button>
    </div>
  );
};

export default SidebarBadgeLogo;
