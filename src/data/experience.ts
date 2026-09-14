import nodshiftLogo from "../assets/nodShift_logo.jpg";

export const experience = [
  {
    _id: "exp-associate-software-engineer",
    companyName: "Nodshift",
    companyLogo: nodshiftLogo,
    position: "Associate Software Engineer",
    employmentType: "Part-time",
    location: "Remote (team based in Austin, TX)",
    startDate: "2025-08-01",
    endDate: "2026-05-01",
    currentlyWorking: false,
    description:
      "Promoted from Intern to Associate after demonstrating strong technical growth and reliability in feature delivery. Owned end-to-end development of UI features in React.js and TypeScript, from component design through deployment.",
    techStack: ["React.js", "TypeScript", "Redux Toolkit", "REST APIs", "Git/GitHub", "Agile"]
  },
  {
    _id: "exp-software-engineer-intern",
    companyName: "Nodshift",
    companyLogo: nodshiftLogo,
    position: "Software Engineer Intern",
    employmentType: "Part-time",
    location: "Remote (team based in Austin, TX)",
    startDate: "2025-03-01",
    endDate: "2025-07-01",
    currentlyWorking: false,
    description:
      "Built responsive UI components in React.js and TypeScript, integrated REST APIs, fixed UI bugs, and learned Redux Toolkit on a live production codebase.",
    techStack: ["React.js", "TypeScript", "Redux Toolkit", "REST APIs", "Git/GitHub", "Agile"]
  }
] as const;
