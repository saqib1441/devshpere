"use client";

import { FC, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PricingPlan, ServicesData, Service } from "@/lib/data";
import PageHeader from "@/components/PageHeader";
import PricingCard from "@/components/PricingCard";
import PortfolioSwiper from "@/components/PortfolioSwiper";
import Link from "next/link";
import Testimonial from "@/components/Testimonial";
import Quote from "@/components/Quote";

interface OtherServicesInterface {
  id: number;
  name: string;
}

const SingleService: FC = () => {
  const [service, setService] = useState<Service | null>(null);
  const [otherServices, setOtherServices] = useState<
    OtherServicesInterface[] | null
  >(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return; // Prevent running if `id` is undefined

    const data = ServicesData.find((service) => service.id.toString() === id);
    const other = ServicesData.filter(
      (service) => service.id.toString() !== id
    ); // Ensure correct shape

    setService(data || null);
    setOtherServices(other.map(({ id, name }) => ({ id, name })));
  }, [id]);

  if (!service) {
    return <></>; // Show 404 if service not found
  }

  return (
    <main className="service">
      {/* Page Header */}
      <PageHeader title={service.name} description={service.shortDesc} />

      {/* Description Section */}
      <section className="container">
        <div className="flex gap-10 items-start">
          <div className="w-[70%]">
            <h1 className="text-xl font-nunito font-black">Description</h1>
            <p className="text-black/70 dark:text-white/70">
              {service.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 shadow-mainShadow p-7 rounded-2xl w-[30%] dark:shadow-none dark:bg-secondary/70">
            <h1 className="text-xl font-nunito font-black">More Services</h1>
            <div className="w-full flex flex-col gap-2">
              {otherServices?.map(({ id, name }, index) => (
                <Link
                  href={`/services/${id}`}
                  key={index}
                  className="text-gray-600 dark:text-gray-400 border-b last:border-none pb-1 hover:text-primary transition-all duration-300 dark:border-white/10"
                >
                  - {name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        {service.pricing && service.pricing.length > 0 && (
          <div className="mt-10">
            <div>
              <h1 className="font-black font-nunito text-xl">Pricing Plans</h1>
              <p className="text-black/70 dark:text-white/70">
                Choose a plan that fits your needs and budget.
              </p>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 my-10 items-start">
              {service.pricing.map((pricing: PricingPlan, index: number) => (
                <PricingCard
                  key={index}
                  title={pricing.title}
                  description={pricing.description}
                  features={pricing.features}
                  price={pricing.price}
                />
              ))}
            </div>
          </div>
        )}

        {/* Portfolio Section */}
        {service.portfolio && service.portfolio.length > 0 && (
          <div className="my-20">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-nunito font-black">
                {service.name} Portfolio
              </h1>
              <p className="text-black/70 dark:text-white/70 sm:w-[500px] sm:mx-auto">
                Browse my portfolio to explore a collection of projects that
                showcase my creativity and expertise.
              </p>
            </div>
            <PortfolioSwiper
              imgSrc={service.portfolio}
              link="#"
              portfolio={service.name}
              portfolioDesc={service.portfolioDesc}
            />
          </div>
        )}
      </section>

      <Testimonial />
      <Quote />
    </main>
  );
};

export default SingleService;
