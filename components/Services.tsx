import { FC } from "react";
import ServiceCard from "./ServiceCard";
import { ServicesData } from "@/lib/data";

const Services: FC = () => {
  return (
    <section>
      <div className="container py-10">
        <div className="flex flex-col gap-1 items-center text-center mb-10">
          <p className="text-sm text-primary">FEATURED SERVICES</p>
          <h1 className="font-nunito text-3xl font-black sm:w-[500px]">
            You bring the business, and we bring the brilliant minds
          </h1>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {ServicesData.map((service) => {
            return (
              <ServiceCard
                key={service.id} // using unique id as key
                title={service.name}
                description={service.shortDesc}
                icon={service.icon}
                link={`/services/${service.id}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
