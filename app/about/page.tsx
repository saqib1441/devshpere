import { FC } from "react"; // External library

// Internal components
import About from "@/components/About";
import AboutCard from "@/components/AboutCard";
import Clients from "@/components/Clients";
import PageHeader from "@/components/PageHeader";
import Testimonial from "@/components/Testimonial";
import Services from "@/components/Services";
import Quote from "@/components/Quote";

// Data
import { AboutPageData } from "@/lib/data";
import WhyUs from "@/components/WhyUs";

const AboutPage: FC = () => {
  return (
    <main className="space-y-10">
      {/* Page Header */}
      <PageHeader
        title="About Us"
        description="Providing brilliant ideas for your business."
      />

      {/* About Section */}
      <About />

      {/* Vision and Mission Cards */}
      <div className="container py-10 flex flex-col gap-10 lg:flex-row">
        <AboutCard
          title={AboutPageData.ourVision.title}
          description={AboutPageData.ourVision.description}
        />
        <AboutCard
          title={AboutPageData.ourMission.title}
          description={AboutPageData.ourMission.description}
        />
      </div>

      {/* Services Section */}
      <Services />

      {/* Why Choose Us */}
      <WhyUs />

      {/* Clients Section */}
      <div className="pt-20 pb-10">
        <Clients />
      </div>

      {/* Testimonial Section */}
      <Testimonial />

      {/* Quote Section */}
      <Quote />
    </main>
  );
};

export default AboutPage;
