"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { ServicesData } from "@/lib/data";
import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Services from "@/components/Services";
import Quote from "@/components/Quote";

const PortfolioPage: FC = () => {
  return (
    <main className="space-y-10">
      {/* Portfolio Page Header */}
      <PageHeader
        title="Portfolio"
        description="Showcasing our best work, creativity, and expertise in every project."
      />
      <div className="container grid gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 py-10">
        {ServicesData.map(({ id, name, portfolio }, index) => {
          if (!portfolio || portfolio.length === 0) return null;
          return (
            <div
              key={index}
              className="shadow-mainShadow rounded-2xl overflow-hidden"
            >
              <div className="cursor-pointer hover:scale-110 transition-all duration-300">
                <Image src={portfolio[0]} alt={`dev-sphere-${name}`} />
              </div>
              <div className="px-5 pb-5 pt-2">
                <h1 className="font-nunito text-lg font-black">{name}</h1>
                <p className="text-black/70 mb-3 dark:text-white/70">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Velit, cum.
                </p>
                <Link href={`/services/${id}`}>
                  <Button>Read More</Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Services />
      <Quote />
    </main>
  );
};

export default PortfolioPage;
