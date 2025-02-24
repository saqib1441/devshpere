import { FC } from "react";

// Components
import About from "@/components/About";
import Clients from "@/components/Clients";
import CustomeService from "@/components/CustomeService";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import WhyUs from "@/components/WhyUs";

const HomePage: FC = () => {
  return (
    <main className="space-y-10">
      {/* Header Section */}
      <Header />

      {/* Clients Section */}
      <section className="-mt-20">
        <Clients />
      </section>

      {/* About Section */}
      <section>
        <About />
      </section>

      {/* Services Section */}
      <section>
        <Services />
      </section>

      {/* Why Us Section */}
      <section>
        <WhyUs />
      </section>

      {/* Custom Service Section */}
      <section>
        <CustomeService />
      </section>

      {/* Portfolio Section */}
      <section>
        <Portfolio />
      </section>

      {/* Testimonial Section */}
      <section>
        <Testimonial />
      </section>

      {/* Quote Section */}
      <section>
        <Quote />
      </section>
    </main>
  );
};

export default HomePage;
