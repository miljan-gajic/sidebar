import { useLocalStorage } from "@/hooks/localStorage";
import { useUI } from "@/hooks/uiContext";
import { useState } from "react";
import SectionItem from "./SectionItem";

type SectionProps = {
  items: {
    category: string;
    menuItems: Record<"label", string>[];
  }[];
};

const Section: React.FC<SectionProps> = ({ items }) => {
  const [localState] = useLocalStorage("UI", {});
  const [activeMenuItem, setActiveMenuItem] = useState(
    localState["activeMenuItem"]
  );

  const {
    state: { collapsed },
  } = useUI();

  return (
    <div
      className={`${
        collapsed ? "pt-6 pr-1 pb-6 pl-2" : "pt-6 pr-3 pb-6 pl-4"
      } flex flex-col gap-y-12`}
    >
      {items.map(({ category, menuItems }, idx) => (
        <div
          key={idx}
          className="flex flex-col gap-y-4 justify-start items-start"
        >
          {collapsed
            ? null
            : category && (
                <p className="text-xs font-extrabold text-[color:var(--section-light)] dark:text-[color:var(--section-dark)] pl-2 uppercase">
                  {category}
                </p>
              )}

          {menuItems.map(({ label }) => (
            <SectionItem
              key={label}
              menuItemLabel={label}
              activeMenuItem={activeMenuItem}
              setActiveMenuItem={setActiveMenuItem}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Section;
