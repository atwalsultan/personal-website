import CertificationCard from "../cards/CertificationCard";

const CertificationList = () => {
  const certifications = [
    {
      name: "Example Certification",
      institution: "Example Institute",
      location: "Online",
      from: "1/1/20",
      to: "1/1/20",
      description:
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      tech: ["Python", "Jupyter Notebooks", "Pandas", "NumPy"],
      localName: "",
    },
    {
      name: "Example Certification",
      institution: "Example Institute",
      location: "Online",
      from: "1/1/20",
      to: "1/1/20",
      description:
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      tech: ["Python", "Jupyter Notebooks", "Pandas", "NumPy"],
      localName: "",
    },
    {
      name: "Example Certification",
      institution: "Example Institute",
      location: "Online",
      from: "1/1/20",
      to: "1/1/20",
      description:
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      tech: ["Python", "Jupyter Notebooks", "Pandas", "NumPy"],
      localName: "",
    },
    {
      name: "Example Certification",
      institution: "Example Institute",
      location: "Online",
      from: "1/1/20",
      to: "1/1/20",
      description:
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      tech: ["Python", "Jupyter Notebooks", "Pandas", "NumPy"],
      localName: "",
    },
    {
      name: "Example Certification",
      institution: "Example Institute",
      location: "Online",
      from: "1/1/20",
      to: "1/1/20",
      description:
        "Lorem ipsum dolor site amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      tech: ["Python", "Jupyter Notebooks", "Pandas", "NumPy"],
      localName: "",
    },
  ];

  return certifications
    .sort((a, b) => new Date(b.to) - new Date(a.to))
    .map((item, index) => (
      <CertificationCard key={index} certification={item} />
    ));
};

export default CertificationList;
