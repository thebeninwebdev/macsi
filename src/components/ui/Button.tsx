import { ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes } from "react";
export function Button({
  children,
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={`button ${className}`} {...props}>
      <span>{children}</span>
      <ArrowUpRight size={19} aria-hidden="true" />
    </a>
  );
}
