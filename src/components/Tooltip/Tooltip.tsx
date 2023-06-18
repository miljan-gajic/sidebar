import { useRef } from "react";

type TooltipProps = {
  children: React.ReactNode | React.ReactElement;
  tooltip?: string;
};

const ToolTip: React.FC<TooltipProps> = ({ children, tooltip }) => {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const container = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={container}
      onMouseEnter={() => {
        if (!tooltipRef.current || !container.current) return;
        tooltipRef.current.style.left = 70 + "px";
        tooltipRef.current.style.top = -7 + "px";
      }}
      className="group relative inline-block w-full"
      role="tooltip"
      aria-describedby={tooltip}
    >
      {children}
      {tooltip ? (
        <span
          ref={tooltipRef}
          className="
            invisible group-hover:visible 
            opacity-0 group-hover:opacity-100 transition bg-tooltip-clr text-white p-[10px] rounded-lg absolute
            top-full mt-2 whitespace-nowrap capitalize text-sm font-medium font-heebo
            before:content-[''] before:absolute before:top-1/2 before:right-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-tooltip-clr"
        >
          {tooltip}
        </span>
      ) : null}
    </div>
  );
};

export default ToolTip;
