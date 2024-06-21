import React from "react";
import TeamMember from "./TeamMember";

const teamMembers = [
  {
    name: "David Glick",
    position: "Founder and President",
    image: "/images/teamMember1.svg", // Replace with actual path to image
    details: [
      "Prior founder of a healthcare factoring company",
      "20+ years of specialty financing experience",
      "Executive and leadership experience across strategy, marketing, and operations",
    ],
  },
  {
    name: "Alex McElish",
    position: "Chief Financial Officer",
    image: "/images/teamMember2.svg",
    details: [
      "10+ years of experience in financial planning and cash-flow management",
      "Previous CFO in multiple early-stage startup ventures",
      "Masters in Finance from Arizona State University",
    ],
  },
  {
    name: "Eitan Glick",
    position: "Co-founder & Vice President, Strategic Initiatives",
    image: "/images/teamMember3.svg",
    details: [
      "7+ years of sales, marketing, underwriting, strategic planning and development experience in healthcare specialty financing",
      "Held the responsibility of overseeing a portfolio of over $10m",
      "Responsible for the development of advanced models for understanding complex healthcare business financials",
    ],
  },
  {
    name: "Jay Jain",
    position: "Director, Engineering",
    image: "/images/teamMember4.svg",
    details: [
      "Seasoned tech leader with prior experience in building fintech applications within healthcare industry",
      "Previous Data Scientist at American Express building credit risk models",
      "MS in Electrical and Computer Eng from Cornell University",
    ],
  },
  {
    name: "Eden Steiman",
    position: "Co-founder & Vice President, Board Secretary",
    image: "/images/teamMember5.svg",
    details: [
      "5+ years of experience in compliance management and business development",
      "Highly skilled in digital marketing for high-growth startups",
    ],
  },
  {
    name: "Yan Steiman",
    position: "Designer",
    image: "/images/teamMember6.svg",
    details: [
      "4+ years of experience in graphic design",
      "Directed multiple design projects from concept through completion, successfully managing timelines and team collaborations",
      "Ninja superhero on the weekends",
    ],
  },
];

const Team = () => {
  return (
    <div className="bg-gradient-to-b flex justify-center from-[#2B2465] via-[#081949] to-[#121D52] text-white py-16">
      <div className="w-[80%]   text-center">
        <h2 className="text-4xl font-bold mb-10 text-[#62D89F] font-trebuchet">The Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
