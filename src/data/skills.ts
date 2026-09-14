import type { ElementType } from "react";
import { AccountTree, Schema } from "@mui/icons-material";
import { VscVscode } from "react-icons/vsc";
import {
  SiAxios,
  SiBootstrap,
  SiChartdotjs,
  SiCplusplus,
  SiCss,
  SiDjango,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMui,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "@icons-pack/react-simple-icons";

export type SkillCategory = {
  category: string;
  description: string;
  items: { _id: string; name: string; level?: string; icon?: ElementType }[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    description: "Building responsive, modern, and high-performance user interfaces.",
    items: [
      { _id: "skill-react", name: "React.js", icon: SiReact },
      { _id: "skill-next", name: "Next.js", icon: SiNextdotjs },
      { _id: "skill-typescript", name: "TypeScript", icon: SiTypescript },
      { _id: "skill-javascript", name: "JavaScript (ES6+)", icon: SiJavascript },
      { _id: "skill-mui", name: "Material-UI (MUI)", icon: SiMui },
      { _id: "skill-tailwind", name: "Tailwind CSS", icon: SiTailwindcss },
      { _id: "skill-redux", name: "Redux Toolkit", icon: SiRedux },
      { _id: "skill-react-router", name: "React Router DOM", icon: SiReactrouter },
      { _id: "skill-html", name: "HTML5", icon: SiHtml5 },
      { _id: "skill-css", name: "CSS3", icon: SiCss },
      { _id: "skill-bootstrap", name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    category: "Backend & Core",
    description: "Architecting scalable APIs, servers, and database integration.",
    items: [
      { _id: "skill-node", name: "Node.js", icon: SiNodedotjs },
      { _id: "skill-express", name: "Express.js", icon: SiExpress },
      { _id: "skill-rest", name: "RESTful APIs" },
      { _id: "skill-axios", name: "Axios", icon: SiAxios },
      { _id: "skill-jwt", name: "JWT Authentication", icon: SiJsonwebtokens },
      { _id: "skill-django", name: "Django", icon: SiDjango },
      { _id: "skill-mongodb", name: "MongoDB", icon: SiMongodb },
      { _id: "skill-mySQL", name: "MySQL", icon: SiMysql },
    ],
  },
  {
    category: "Languages & CS Fundamentals",
    description: "Programming languages and core concepts that strengthen problem-solving and software design.",
    items: [
      { _id: "skill-cpp", name: "C++", icon: SiCplusplus },
      { _id: "skill-python", name: "Python", icon: SiPython },
      { _id: "skill-oop", name: "Object-Oriented Programming", icon: AccountTree },
      { _id: "skill-data-structures", name: "Data Structures", icon: Schema },
    ],
  },
  {
    category: "Tools & Methodologies",
    description: "Version control, collaboration, and engineering best practices.",
    items: [
      { _id: "skill-git", name: "Git", icon: SiGit },
      { _id: "skill-github", name: "GitHub", icon: SiGithub },
      { _id: "skill-vercel", name: "Vercel", icon: SiVercel },
      { _id: "skill-vscode", name: "VS Code", icon: VscVscode },
    ],
  },
];

export const skills = skillCategories.flatMap((cat) =>
  cat.items.map((item) => ({ _id: item._id, skillName: item.name }))
);
