import { useLocalStorage } from "@/hooks/localStorage";
import { useUI } from "@/hooks/uiContext";
import { useState } from "react";
import { Items, ItemsNoCategory } from "../Sidebar";
import SectionItem from "./SectionItem";
import SectionItemsContainer from "./SectionItemsContainer";

type SectionProps = {
  items: Items | ItemsNoCategory;
  hasCategories: boolean;
};

const Section: React.FC<SectionProps> = ({ items, hasCategories }) => {
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
      {hasCategories ? (
        (items as Items).map(({ category, menuItems }, idx) => (
          <SectionItemsContainer
            key={idx}
            sectionTitle={
              collapsed ? null : (
                <p className="text-xs pb-2 font-extrabold text-[color:var(--section-light)] dark:text-[color:var(--section-dark)] pl-2 uppercase">
                  {category}
                </p>
              )
            }
          >
            {menuItems.map(({ label }) => (
              <SectionItem
                key={label}
                menuItemLabel={label}
                activeMenuItem={activeMenuItem}
                setActiveMenuItem={setActiveMenuItem}
              />
            ))}
          </SectionItemsContainer>
        ))
      ) : (
        <SectionItemsContainer>
          {(items as ItemsNoCategory).map(({ label }) => (
            <SectionItem
              key={label}
              menuItemLabel={label}
              activeMenuItem={activeMenuItem}
              setActiveMenuItem={setActiveMenuItem}
            />
          ))}
        </SectionItemsContainer>
      )}
    </div>
  );
};

export default Section;
