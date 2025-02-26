import Image from "next/image";
import { FC } from "react";
import { TeamInterface } from "@/lib/data";
import Link from "next/link";

const TeamCard: FC<TeamInterface> = ({
  name,
  imgSrc,
  position,
  socialLinks,
}) => {
  return (
    <div className="dark:bg-secondary shadow-mainShadow dark:shadow-none rounded-2xl overflow-hidden">
      <div>
        <Image src={imgSrc} alt={`dev-sphere-${name}`} />
      </div>
      <div className="text-center mt-3 mb-7">
        <h1 className="text-2xl font-nunito font-black">{name}</h1>
        <p className="dark:text-white/70 mb-2">{position}</p>
        <div className="flex justify-center gap-3">
          {socialLinks.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              className="w-10 h-10 rounded-full shadow-mainShadow flex items-center justify-center text-primary dark:shadow-none dark:text-white dark:hover:text-primary transition-all duration-300 hover:bg-primary dark:bg-background/70 hover:text-white"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
