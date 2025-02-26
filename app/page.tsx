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
import HeroImg from "@/assets/hero.png";

const HeadingComponent: FC = () => {
  return (
    <>
      Launch Faster with <span className="text-primary">Dev</span>Sphere as Your
      Co-Pilot
    </>
  );
};

const HomePage: FC = () => {
  return (
    <main className="space-y-10">
      {/* Header Section */}
      <Header
        heading={<HeadingComponent />}
        description="Transform your business with expert web/app development, UI/UX design & branding. Secure, scalable IT services driving innovation that lasts."
        link="/services"
        imgSrc={HeroImg}
        imgAlt="dev-sphere-hero-img"
      />

      {/* Clients Section */}
      <section>
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
