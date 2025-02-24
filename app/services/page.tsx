import { FC } from "react";

// Components
import Clients from "@/components/Clients";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import WhyUs from "@/components/WhyUs";
import PageHeader from "@/components/PageHeader";

const ServicesPage: FC = () => {
  return (
    <main>
      {/* Services Page Header */}
      <PageHeader
        title="Our Services"
        description="Expert solutions and seamless services tailored to elevate your experience."
      />

      {/* Services Section */}
      <Services />

      {/* Why Us Section */}
      <WhyUs />

      {/* Clients Section */}
      <section className="py-20">
        <Clients />
      </section>

      {/* Testimonial Section */}
      <Testimonial />

      {/* Quote Section */}
      <Quote />
    </main>
  );
};

export default ServicesPage;
