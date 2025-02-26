"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { ServicesData } from "@/lib/data";
import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Services from "@/components/Services";
import Quote from "@/components/Quote";
import WhyUs from "@/components/WhyUs";
import Clients from "@/components/Clients";
import Testimonial from "@/components/Testimonial";

const PortfolioPage: FC = () => {
  return (
    <main className="space-y-10">
      {/* Portfolio Page Header */}
      <PageHeader
        title="Portfolio"
        description="Showcasing our best work, creativity, and expertise in every project."
      />
      <div className="container grid gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 py-10">
        {ServicesData.map(({ id, name, portfolio, portfolioDesc }, index) => {
          if (!portfolio || portfolio.length === 0) return null;
          return (
            <div
              key={index}
              className="shadow-mainShadow dark:shadow-none dark:bg-secondary/70 rounded-2xl overflow-hidden"
            >
              <div className="cursor-pointer overflow-hidden">
                <Image
                  src={portfolio[0]}
                  alt={`dev-sphere-${name}`}
                  className="hover:scale-110 transition-all duration-300"
                />
              </div>
              <div className="px-5 pb-5 pt-2">
                <h1 className="font-nunito text-lg font-black mb-1">{name}</h1>
                <p className="text-black/70 mb-3 dark:text-white/70">
                  {portfolioDesc}
                </p>
                <Link href={`/services/${id}`}>
                  <Button>Read More</Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <WhyUs />
      <Clients />
      <Testimonial />
      <Quote />
    </main>
  );
};

export default PortfolioPage;
