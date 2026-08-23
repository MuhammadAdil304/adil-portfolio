export type SkillCategory = {
  category: string;
  description: string;
  items: { _id: string; name: string; level?: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    description: "Building responsive, modern, and high-performance user interfaces.",
    items: [
      { _id: "skill-react", name: "React.js" },
      { _id: "skill-typescript", name: "TypeScript" },
      { _id: "skill-javascript", name: "JavaScript (ES6+)" },
      { _id: "skill-mui", name: "Material-UI (MUI)" },
      { _id: "skill-redux", name: "Redux Toolkit" },
      { _id: "skill-html", name: "HTML5" },
      { _id: "skill-css", name: "CSS3" },
      { _id: "skill-bootstrap", name: "Bootstrap" },
      { _id: "skill-responsive", name: "Responsive Web Design" },
    ],
  },
  {
    category: "Backend & Core",
    description: "Architecting scalable APIs, servers, and database integration.",
    items: [
      { _id: "skill-node", name: "Node.js" },
      { _id: "skill-express", name: "Express.js" },
      { _id: "skill-rest", name: "RESTful APIs" },
      { _id: "skill-mongodb", name: "MongoDB" },
      { _id: "skill-mern", name: "MERN Stack" },
      { _id: "skill-fullstack", name: "Full-Stack Development" },
    ],
  },
  {
    category: "Tools & Methodologies",
    description: "Version control, collaboration, and engineering best practices.",
    items: [
      { _id: "skill-git", name: "Git" },
      { _id: "skill-github", name: "GitHub" },
      { _id: "skill-version-control", name: "Version Control" },
      { _id: "skill-review", name: "Code Review" },
      { _id: "skill-agile", name: "Agile / Scrum" },
      { _id: "skill-collaboration", name: "Team Collaboration" },
      { _id: "skill-problem-solving", name: "Problem Solving" },
    ],
  },
];

export const skills = skillCategories.flatMap((cat) =>
  cat.items.map((item) => ({ _id: item._id, skillName: item.name }))
);
