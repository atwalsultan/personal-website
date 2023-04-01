import ProjectCard from "../cards/ProjectCard";

const ProjectList = () => {
  const work = [
    {
      name: "Example Project",
      role: "Lead Developer",
      from: "1/5/2021",
      to: "4/5/2021",
      description:
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      highlights: [
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      ],
      location: "Vancouver, BC",
      tech: ["HTML", "CSS", "JS", "Firebase", "Web API"],
      links: {
        live: "",
        github: "https://github.com/",
      },
    },
    {
      name: "Example Project",
      role: "Lead Developer",
      from: "5/5/2021",
      to: "8/5/2021",
      description:
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      highlights: [
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      ],
      location: "Vancouver, BC",
      tech: ["MERN", "SCSS", "D3", "Heroku", "Node-mailer"],
      links: {
        live: "https://github.com/",
        github: "https://github.com/",
      },
    },
    {
      name: "Example Project",
      role: "Lead Developer",
      from: "9/5/2021",
      to: "12/5/2021",
      description:
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      highlights: [
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      ],
      location: "Vancouver, BC",
      tech: ["MERN", "Expo", "AWS", "React Navigation", "Native Base"],
      links: {
        live: "https://github.com/",
        github: "https://github.com/",
      },
    },
    {
      name: "Example Project",
      role: "Developer",
      from: "12/5/2020",
      to: "12/5/2020",
      description:
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      highlights: [
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      ],
      location: "Vancouver, BC",
      tech: ["Python", "Pandas", "Jupyter Notebooks", "Matplotlib"],
      links: {
        live: "",
        github: "https://github.com/",
      },
    },
    {
      name: "Example Project",
      role: "Developer",
      from: "8/5/2021",
      to: "12/5/2021",
      description:
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      highlights: [
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      ],
      location: "Vancouver, BC",
      tech: ["React Native", "Expo", "Android Studio", "Asana"],
      links: {
        live: "https://github.com/",
        github: "",
      },
    },
    {
      name: "Example Project",
      role: "Lead Developer",
      from: "11/5/2021",
      to: "11/5/2021",
      description:
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      highlights: [
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      ],
      location: "Vancouver, BC",
      tech: ["React", "Heroku"],
      links: {
        live: "https://github.com/",
        github: "https://github.com/",
      },
    },
  ];

  return work
    .sort((a, b) => new Date(b.to) - new Date(a.to))
    .map((item, index) => <ProjectCard project={item} key={index} />);
};

export default ProjectList;
