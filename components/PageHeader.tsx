import { FC } from "react";

interface IPageHeader {
  title: string;
  description: string;
}

const PageHeader: FC<IPageHeader> = ({ title, description }) => {
  return (
    <header className="pt-20 pb-10 text-center container">
      {/* Page Title */}
      <h1 className="text-5xl font-black font-nunito text-black/90 dark:text-white/90">
        {title}
      </h1>

      {/* Description with controlled max width for readability */}
      <p className="text-black/70 dark:text-white/70 mt-2 sm:w-[500px] sm:mx-auto md:w-[700px] lg:w-[800px] mx-auto leading-relaxed">
        {description}
      </p>
    </header>
  );
};

export default PageHeader;
