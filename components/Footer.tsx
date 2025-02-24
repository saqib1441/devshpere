import Link from "next/link";
import { FC } from "react";
import Logo from "./Logo";
import { SocialData } from "@/lib/data";
import Socials from "./Socials";

const Footer: FC = () => {
  return (
    <footer aria-labelledby="footer-section">
      <div className="container text-center grid gap-10 mb-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {/* Logo and Social Links Section */}
        <div className="flex items-center flex-col gap-5 lg:col-span-2 xl:items-start xl:text-start">
          <Logo />
          <p className="text-black/70 dark:text-white/70">
            Transform your business with expert web/app development, UI/UX
            design & branding. Secure, scalable IT services driving innovation
            that lasts.
          </p>
          <div className="flex gap-3 text-lg text-primary justify-center xl:justify-start">
            {SocialData.map((social, index) => {
              return (
                <Socials href={social.url} key={index} icon={social.icon} />
              );
            })}
          </div>
        </div>

        {/* Services Section */}
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-nunito font-black text-black/90 dark:text-white/90">
            Services
          </h1>
          <div className="flex flex-col gap-3 text-black/70 dark:text-white/70">
            <Link href="/">Graphic Designing</Link>
            <Link href="/">UI/UX Designing</Link>
            <Link href="/">Web Development</Link>
            <Link href="/">App Development</Link>
            <Link href="/">Digital Marketing</Link>
            <Link href="/">SEO</Link>
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-nunito font-black text-black/90 dark:text-white/90">
            Useful Links
          </h1>
          <div className="flex flex-col gap-3 text-black/70 dark:text-white/70">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Services</Link>
            <Link href="/">Contact Us</Link>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-nunito font-black text-black/90 dark:text-white/90">
            Contact Us
          </h1>
          <div className="flex flex-col gap-3 text-black/70 dark:text-white/70">
            <Link href="tel:+923467890654">+92 346 7890654</Link>
            <Link href="mailto:devsphereofficial@gmail.com">
              devsphereofficial@gmail.com
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <p className="text-center text-black/70 dark:text-white/70 mb-5">
        &copy; {new Date().getFullYear()} DevSphere. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
