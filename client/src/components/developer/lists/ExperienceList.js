import ExperienceCard from "../cards/ExperienceCard";

const ExperienceList = () => {
  const experience = [
    {
      company: "Example Company",
      role: "Software Developer",
      from: "3/5/21",
      to: "4/5/21",
      description:
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      highlights: [],
      location: "Vancouver, BC",
      tech: ["MERN", "TypeScript", "JWT", "Stripe", "Figma"],
      order: 1,
    },
    {
      company: "Example Company",
      role: "Software Developer",
      from: "3/5/21",
      to: "4/5/21",
      description:
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      highlights: [],
      location: "Vancouver, BC",
      tech: ["MERN", "TypeScript", "JWT", "Stripe", "Figma"],
      order: 1,
    },
    {
      company: "Example Company",
      role: "Software Developer",
      from: "3/5/21",
      to: "4/5/21",
      description:
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      highlights: [],
      location: "Vancouver, BC",
      tech: ["MERN", "TypeScript", "JWT", "Stripe", "Figma"],
      order: 1,
    },
    {
      company: "Example Company",
      role: "Software Developer",
      from: "3/5/21",
      to: "4/5/21",
      description:
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      highlights: [],
      location: "Vancouver, BC",
      tech: ["MERN", "TypeScript", "JWT", "Stripe", "Figma"],
      order: 1,
    },
    {
      company: "Example Company",
      role: "Software Developer",
      from: "3/5/21",
      to: "4/5/21",
      description:
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      highlights: [],
      location: "Vancouver, BC",
      tech: ["MERN", "TypeScript", "JWT", "Stripe", "Figma"],
      order: 1,
    },
  ];

  return experience
    .sort((a, b) => b.order - a.order)
    .map((item, index) => <ExperienceCard key={index} job={item} />);
};

export default ExperienceList;
