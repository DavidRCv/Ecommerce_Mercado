import { createElement, type SVGProps } from "react";
import type { IconNode } from "lucide";

type LucideIconProps = SVGProps<SVGSVGElement> & {
  icon: IconNode;
};

export function LucideIcon({ icon, className, ...props }: LucideIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {icon.map(([tag, attrs], index) =>
        createElement(tag, { key: `${tag}-${index}`, ...attrs }),
      )}
    </svg>
  );
}
