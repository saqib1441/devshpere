import PageHeader from "@/components/PageHeader";
import { FC } from "react";
import { TeamData } from "@/lib/data";
import TeamCard from "@/components/TeamCard";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Quote from "@/components/Quote";

const TeamPage: FC = () => {
  return (
    <section className="space-y-10">
      <PageHeader
        title="Our Team"
        description="Meet the team that makes our dreams come true."
      />

      <div className="container mb-10">
        <div className="grid sm:grid-cols-2 gap-10 lg:grid-cols-3">
          {TeamData.map((team, index) => {
            return (
              <TeamCard
                imgSrc={team.imgSrc}
                name={team.name}
                position={team.position}
                socialLinks={team.socialLinks}
                key={index}
              />
            );
          })}
        </div>
      </div>

      <Services />
      <Testimonial />
      <Quote />
    </section>
  );
};

export default TeamPage;
