
import BudgetTrackerImage from "../assets/budget_tracker_thumbnail.png";
import MyBlogImage from "../assets/my_blog_thumbnail.png";
import DiceGameImage from "../assets/dice_game_thumbnail.png";
import TaskManagementImage from "../assets/task_management_thumbnail.png";

export type Project = {
  _id: string;
  projectName: string;
  subtitle: string;
  startDate?: string;
  endDate?: string;
  description: string;
  techStack: readonly string[];
  liveDemoUrl?: string;
  githubRepositoryUrl?: string;
  featured?: boolean;
  projectImage?: string;
};

export const projects = [
  {
    _id: "proj-adil-blog",
    projectName: "My Blog",
    subtitle: "Full-stack blogging platform with user authentication, profile management, and post publishing",
    description: "Owned end-to-end development of a complete blogging platform featuring user authentication and authorization, post creation and editing with rich text formatting, dark and light theme toggle, category-based filtering, and responsive UI built with React, Redux, and Tailwind CSS. Implemented secure MongoDB database connectivity with session management and cookie-based authentication.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Redux Toolkit"],
    liveDemoUrl: "https://adil-blog.vercel.app/",
    githubRepositoryUrl: "https://github.com/MuhammadAdil304/adil-blog.git",
    featured: true,
    projectImage: `${MyBlogImage}`,
  },
  {
    _id: "proj-task-management",
    projectName: "Task Management Web App",
    subtitle: "Full-Stack Task Management Platform with Authentication",
    description: "End-to-end developed task management web application featuring user authentication (login/signup with JWT), comprehensive CRUD operations for tasks (create, read, update, delete), and advanced filtering systems including all tasks, completed tasks, incomplete tasks, and important tasks. Implemented state management using Redux Toolkit with persistent storage via localStorage. Built responsive dark-themed UI using Tailwind CSS custom utilities and React Router for navigation. Integrated Axios for API communication with Express.js backend, MongoDB Mongoose database, and JSON Web Token authentication security.",
    techStack: ["React", "Redux Toolkit", "React Router DOM", "Axios", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcryptjs", "Tailwind CSS"],
    liveDemoUrl: "https://adil-task-management.vercel.app/",
    githubRepositoryUrl: "https://github.com/MuhammadAdil304/Task-Management",
    featured: true,
    projectImage: `${TaskManagementImage}`,
  },
  {
    _id: "proj-budget-tracker",
    projectName: "Budget Tracker",
    subtitle: "Personal finance dashboard for tracking income, expenses, and spending categories.",
    description: `Budget Tracker is a Django-based personal finance application with user authentication, signup and login flows,
  income and expense entry forms, and a dashboard that calculates total income, total expenses, and current balance per user.It
  displays recent expense transactions, groups expenses by category with percentage breakdowns, and uses Chart.js visualizations for
  financial overview charts.The project uses Django templates, SQLite, custom CSS, static assets, and WhiteNoise for static file
  serving in deployment.`,
    techStack: [
      "Python",
      "Django",
      "SQLite",
      "Django Templates",
      "HTML",
      "CSS",
      "JavaScript",
      "Chart.js",
      "WhiteNoise",
      "Vercel"
    ],
    liveDemoUrl: "https://budget-tracker-8y9k.vercel.app/",
    githubRepositoryUrl: "https://github.com/MuhammadAdil304/budget-tracker.git",
    featured: true,
    projectImage: `${BudgetTrackerImage}`,
  },
  {
    _id: "proj-dice-game",
    projectName: "Dice Game",
    subtitle: "Interactive Dice Rolling Game",
    description: "A responsive interactive dice game built with React, Vite, and styled-components. The application implements dice rolling mechanics where users select a number from 1-6, roll the dice, and earn points when the dice matches their selection, with penalties for incorrect guesses. The game features score tracking, reset functionality, and rules display.",
    techStack: ["React", "Vite", "styled-components"],
    liveDemoUrl: "https://dice-game-orcin-psi.vercel.app/",
    githubRepositoryUrl: "https://github.com/MuhammadAdil304/dice-game",
    projectImage: `${DiceGameImage}`,
    featured: true,
  },
] as const;