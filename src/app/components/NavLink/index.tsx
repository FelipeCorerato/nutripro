'use client';

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface NavProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export function NavLink ({ children, className = "", ...props }: NavProps) {
  const pathname = usePathname();

  const defaultClassName = "leading-20 inline-block relative h-20 px-2 hover:text-black";
  const activeClassName = "font-bold after:content-[''] after:h-[3px] after:w-[100%] after:absolute after:bottom-[1px] after:left-0 after:bg-green-500 after:rounded-t-[3px]";

  const cn = [
    className,
    defaultClassName,
    pathname === props.href ? activeClassName : 'text-gray-400'
  ].join(" ");

  return(
    <Link className={cn} {...props}>
      {children}
    </Link>
  );
}