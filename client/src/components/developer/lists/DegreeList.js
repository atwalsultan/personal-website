import DegreeCard from "../cards/DegreeCard";

const DegreeList = () => {
  const degrees = [
    {
      institution: "Example College",
      credential: "Master of Science",
      program: "Computer Science Program",
      from: "9/1/2020",
      to: "12/1/2021",
      location: "Vancouver, BC",
      gpa: 4.09,
      percentage: null,
    },
    {
      institution: "Example College",
      credential: "Bachelor of Science",
      program: "Computer Science Program",
      from: "9/1/2020",
      to: "12/1/2021",
      location: "Vancouver, BC",
      gpa: 4.09,
      percentage: null,
    },
  ];

  return degrees
    .sort((a, b) => new Date(b.to) - new Date(a.to))
    .map((item, index) => <DegreeCard key={index} degree={item} />);
};

export default DegreeList;
