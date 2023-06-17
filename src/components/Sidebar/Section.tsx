import { useUI } from "@/hooks/uiContext";
import SectionItem from "./SectionItem";

type SectionProps = {
  items: {
    category: string;
    menuItems: Record<"label", string>[];
  }[];
};

const Section: React.FC<SectionProps> = ({ items }) => {
  const {
    state: { collapsed },
  } = useUI();
  {
    /* In the design there were paddings that are not symmetrical, 24px, 12px, 24px, 16px I don't know if this is some error or not */
  }

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
            <SectionItem key={label} menuItemLabel={label} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Section;
