import Link from "next/link";
import { FC, ReactNode } from "react";

interface SocialInterface {
  href: string;
  icon: ReactNode;
}

const Socials: FC<SocialInterface> = ({ href, icon }) => (
  <Link
    href={href}
    className="w-10 h-10 rounded-full shadow-mainShadow flex items-center justify-center text-primary dark:bg-primary dark:text-white"
  >
    {icon}
  </Link>
);

export default Socials;
