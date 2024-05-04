import { ReactNode } from "react";

type TooltipProps = {
  children: ReactNode;
  tooltip: ReactNode;
};

function Tooltip({ children, tooltip }: TooltipProps) {
  return (
    <div className="group relative inline-block">
      {children}
      <span className="z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition bg-yellow-500 text-white p-1 rounded absolute bottom-full mb-2 whitespace-nowrap shadow-md">
        {tooltip}
      </span>
    </div>
  );
}

export default Tooltip;
