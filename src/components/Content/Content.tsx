import { useUI } from "@/hooks/uiContext";
import { removeUnderscoreBetweenWords } from "@/utils/textUtils";

const Content: React.FC = () => {
  const {
    state: { activeMenuItem },
  } = useUI();
  return (
    <div
      className="
        h-screen 
        overflow-y-auto 
        bg-[color:var(--light-bg-content)] dark:bg-[color:var(--dark-bg-content)] 
        text-[color:var(--light-font-clr)] dark:text-[color:var(--dark-font-clr)]
        grid items-center text-center relative z-[-1]      
        "
    >
      <h1 className="text-[color:var(--light-font-clr)] dark:text-[color:var(--dark-font-clr)] font-bold text-7xl capitalize">
        {removeUnderscoreBetweenWords(activeMenuItem)}
      </h1>
    </div>
  );
};

export default Content;
