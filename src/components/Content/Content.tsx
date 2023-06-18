import { useUI } from "@/hooks/uiContext";
import { removeUnderscoreBetweenWords } from "@/utils/textUtils";

const Content: React.FC = () => {
  const {
    state: { activeMenuItem },
  } = useUI();
  return (
    <section
      className="
        h-screen 
        overflow-y-auto 
        bg-light-bg-content dark:bg-dark-bg-content 
        text-light-font-clr dark:text-dark-font-clr
        grid items-center text-center relative z-[-1]"
    >
      <h1 className="text-light-font-clr dark:text-dark-font-clr font-bold text-7xl capitalize">
        {removeUnderscoreBetweenWords(activeMenuItem)}
      </h1>
    </section>
  );
};

export default Content;
