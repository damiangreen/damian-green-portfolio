import Link from "next/link";
import { ComponentProps } from "react";

const FancyLink = ({ children, ...props }: ComponentProps<typeof Link>) => (
  <Link
    className="group text-pink-500 transition-all duration-300 ease-in-out"
    {...props}
  >
    <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
      {children}
    </span>
  </Link>
);
export default FancyLink;
