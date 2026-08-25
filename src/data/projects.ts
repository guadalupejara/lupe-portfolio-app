export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  videoUrl?: string;
  featured?: boolean;
  unoptimized?: boolean; // set true if Next's image optimizer fails on this file
};

export const PROJECTS: Project[] = [
  {
    slug: "Mi Casita",
    title: "Mi Casita",
    description: "This app was created as inspired from DAKboard for a customizable display used on tablets. The idea for this project was inspired for creating a centralized home organization system by including multi UI calander managment, sticky notes, reminders, lists, and messaging system. The goal is to also make it kid friendly by providing extra features like drawing board, emoji stickers, and sticky notes.",
    image: "/casita1.png",
    tags: ["React", "TypeScript", "Lucide", "Firebase", "Formik", "Yup", "Next.js"],
    githubUrl: "https://github.com/guadalupejara/mi_casita",
    featured: true,
    unoptimized: true, 
  },
  {
    slug: "Resolvely.AI",
    title: "Resolvely.AI",
    description: " Resolvely is an innovative and interactive platform designed to serve as an academic resource for high school scholars navigating the college admissions process. Resolvely is a minimum viable product (MVP). This repository contains SQL, .NET, and ReactJS code, with only selected, approved snippets shared due to the proprietary nature of the code. <br>",
    image: "/profile1.webp",
    tags: ["React", "Bootstrap", "Yup", "Formik", "Brevo", "JavaScript", "Node.js", "C#", ".NET", "SQL", "Figma"],
    githubUrl: "https://github.com/guadalupejara",
    featured: true,
  },
  {
    slug: "Echos",
    title: "Echos",
    description: "This project was inspired by my own experience with pregnancy loss and was created as a personal way to process grief while offering a safe space for others to do the same. Built with React and Tailwind CSS, the app allows users to customize their experience through background and font changes, release their words instantly  by a button click or let them disappear as typing stops by toggling disappearing mode, and optionally save reflections locally as a .txt file. My goal with this project is to combine thoughtful design with functionality to provide a simple, private outlet for emotional release.",
    image: "/echo.webp",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/guadalupejara/echos",
    liveUrl: "https://echos-alpha.vercel.app/",
    featured: true,
    unoptimized: true, 
  },
  {
    slug: "QuizHive",
    title: "QuizHive",
    description: "Method is a digital consultancy that integrates business, brand, product, and data strategy with visual, interaction, and service design, alongside full stack technical implementation services, to collaboratively craft digital solutions from inception through to execution. During Method's Residency, I was able to work with Product Designers, Product Managers, & Stakeholders to create a gamified Quiz plugin application. Production occured over a 8 week time span that contained learning a new tech stack, scaffolding the backend, and developing the final MVP.",
    image: "/Quizhive.webp",
    tags: ["React", "Tailwind CSS", "Flowbite", "Font Awesome", "Next.JS", "Node", "Typescript", "Firestore", "Chart.JS"],
    githubUrl: "https://github.com/guadalupejara/gameHive",
 
  },
  // {
  //   slug: "taskflow",
  //   title: "Taskflow",
  //   description: "A productivity app for managing tasks and teams efficiently.",
  //   image: "/corn.jpg",
  //   tags: ["React", "TypeScript", "Supabase"],
  //   githubUrl: "https://github.com/lupe-dev/taskflow",
  //   liveUrl: "https://taskflow-demo.vercel.app",
  // },
  // {
  //   slug: "commerce",
  //   title: "Commerce",
  //   description: "An e-commerce storefront built with performance in mind.",
  //   image: "/corn.jpg",
  //   tags: ["Next.js", "Stripe", "Tailwind CSS"],
  //   githubUrl: "https://github.com/lupe-dev/commerce",
  // },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);