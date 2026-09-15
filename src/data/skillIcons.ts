import type { ElementType } from "react";
import { skillCategories } from "./skills";

const normalizeSkillName = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, "");

const skillIconMap = new Map(
  skillCategories
    .flatMap((category) => category.items)
    .filter((skill) => skill.icon)
    .map((skill) => [normalizeSkillName(skill.name), skill.icon as ElementType]),
);

const skillAliases: Record<string, string> = {
  react: "reactjs",
  redux: "reduxtoolkit",
  restapis: "restfulapis",
  gitgithub: "github",
  jwt: "jwtauthentication",
  "reactrouterdom": "reactrouterdom",
};

export const getSkillIcon = (skillName: string) => {
  const normalizedName = normalizeSkillName(skillName);
  return skillIconMap.get(skillAliases[normalizedName] ?? normalizedName);
};
