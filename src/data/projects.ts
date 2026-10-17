export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  unoptimized?: boolean;
  tags: string[];
  githubUrl: string;
  featured?: boolean;
  liveUrl?: string;
  hasCat?: boolean; // new
  videoUrl?: string;
  gallery?: string[];
  notes?: {
    keyFeatures: string[];
    whatLearned: string[];
  };
  type: ProjectType;
  note?: string;
};

export type ProjectType = "professional" | "hackathon" | "personal";

export const PROJECTS: Project[] = [
  {
    slug: "Mi Casita",
    title: "Mi Casita",
    description: "This app was created as inspired from DAKboard for a customizable display used on tablets. The idea for this project was inspired for creating a centralized home organization system by including multi UI calander managment, sticky notes, reminders, lists, and messaging system. The goal is to also make it kid friendly by providing extra features like drawing board, emoji stickers, and sticky notes.",
    image: "/casita1.png",
    tags: ["React", "TypeScript", "Lucide", "Firebase", "Formik", "Yup", "Next.js"],
    githubUrl: "https://github.com/guadalupejara/mi_casita",
    gallery: [ "/casita/casita1.png","/casita/casita2.png","/casita/casita3.png","/casita/casita4.png","/casita/casita5.png","/casita/casita6.png","/casita/casita7.png","/casita/dash.png","/casita/stickynotes.png"],
    featured: true,
    unoptimized: true,
    notes: {
  keyFeatures: [
    "Developed and tested responsive webpages using Tailwind CSS and React for the frontend, with Next.js and Firebase for backend management.",
    "Integrated third-party libraries such as Yup and Formik to enforce schema-based data validation, streamlining quality control and improving data accuracy.",
    "Built secure HTTP routes based on user roles and page requirements, ensuring seamless navigation between public and authenticated user pages.",
    "Designed a dynamic settings form that pre-populates user information from the database, supports updates, and includes a modal for secure account deactivation.",
    "Created draggable sticky notes with customizable fonts and colors. Sticky note properties are stored for future access and can be added, deleted, and updated in real time.",
  ],
  whatLearned: [
    "Gained hands-on experience with Firebase OAuth, implementing login/logout functionality, user information updates, and secure hard deletes of user data.",
    "Learned how to keep a settings form in sync with real-time database updates, so pre-populated user data stays accurate as it changes.",
    "Deepened my understanding of role-based access control, structuring routes so authenticated and public pages stay properly separated.",
  ],
}, 
type: "personal",
  },
  {
    slug: "Resolvely.AI",
    title: "Resolvely.AI",
    description: " Resolvely is an innovative and interactive platform designed to serve as an academic resource for high school scholars navigating the college admissions process. Resolvely is a minimum viable product (MVP). This repository contains SQL, .NET, and ReactJS code, with only selected, approved snippets shared due to the proprietary nature of the code.",
    image: "/profile1.webp",
    tags: ["React", "Bootstrap", "Yup", "Formik", "Brevo", "JavaScript", "Node.js", "C#", ".NET", "SQL", "Figma"],
    githubUrl: "https://github.com/guadalupejara/Projects",
    videoUrl: "https://drive.google.com/file/d/1WGhgT74yAJdc7Gga5P0H2r_10lIN1JEM/view?usp=sharing",
    gallery: [ "/resolvely/profile1.png","/resolvely/profile2.png","/resolvely/profile3.png", "/resolvely/comment.png", "/resolvely/storyform.png", "/resolvely/table.png","/resolvely/unapprove.png"],
    notes: {
  keyFeatures: [
    "Developed and tested responsive webpages using Bootstrap & React for the Student's Profile and Admin Story Table, implementing methods such as mapping and filtering to reflect relevant data based on user roles.",
    "Modified REST client API calls across the front, middle, and back tier for efficient storing, updating, and retrieval of shared stories data.",
    "Integrated third-party libraries such as Yup and Formik and implemented data checks through schemas and prototypes to streamline quality control processes and enhance data accuracy.",
    "Implemented secure HTTP routes tailored to user roles and page requirements, ensuring seamless navigation within the dropdown and hamburger menu, and incorporated the display of the student's identification number in the URL.",
    "Developed a responsive form that populates a card to display the inputted data for the user in real time and sends feedback on form status upon submit through SweetAlerts and Toastrs.",
    "Engineered an automated email to send upon admin disapproval of a student's story, streamlining admin processes and facilitating communication to the student through populated student-specific data alongside admin comments.",
  ],
  whatLearned: [
    "Analyzed various data sources, including legacy code, data tables, Theme & Figma files, and competitive audits, while leveraging team expertise to inform decisions about what information to surface on the Student Profile UI.",
    "Collaborated closely with a peer engineer on shared API work, learning how to coordinate changes across the front, middle, and back tier without stepping on each other's work.",
    "Gained experience coordinating product development using Git, GitHub, Trello, Figma, Slack, and Zoom — including stand-ups, code reviews, and keeping pace with weekly requirements in an agile environment.",
  ],
},
  type: "personal",
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
    gallery: [ "/echo/railroad.png","/echo/stars.png","/echo/txt.png"],
    notes: {
  keyFeatures: [
    "Developed and tested responsive webpages using Tailwind CSS and React for the frontend.",
    "Provided dropdown selections to change background image, text color, and font.",
    "Built two text-release interactions: an instant scatter effect, and a toggleable mode that erases text automatically as typing pauses.",
    "Integrated a save feature to store reflections locally as a .txt file.",
  ],
  whatLearned: [
    "Researched how people process grief, including reading firsthand accounts on Reddit, which surfaced a real need for tools that simply let someone write in an unfiltered stream of consciousness without judgment or permanence.",
    "Learned how to implement local file saving in the browser, letting users export their reflections as a .txt file without needing a backend.",
    "Learned how to build reusable, configurable React components — the same text and background elements adapt as the user clicks through different themes and settings.",
  ],
},
  type: "personal",
  },
  {
    slug: "QuizHive",
    title: "QuizHive",
    description: "Method is a digital consultancy that integrates business, brand, product, and data strategy with visual, interaction, and service design, alongside full stack technical implementation services, to collaboratively craft digital solutions from inception through to execution. During Method's Residency, I was able to work with Product Designers, Product Managers, & Stakeholders to create a gamified Quiz plugin application. Production occured over a 8 week time span that contained learning a new tech stack, scaffolding the backend, and developing the final MVP.",
    image: "/Quizhive.webp",
    tags: ["React", "Tailwind CSS", "Flowbite", "Font Awesome", "Next.JS", "Node", "Typescript", "Firestore", "Chart.JS"],
    githubUrl: "https://github.com/guadalupejara/gameHive",
    gallery: [ "/quizHive/createQuiz_1.png","/quizHive/createQuiz_2.png","/quizHive/home.png","/quizHive/scores.png","/quizHive/testMaker_dash.png","/quizHive/testMaker_game.png","/quizHive/testMaker_lobby.png","/quizHive/testTaker_dash.png", "/quizHive/testTaker_game1.png","/quizHive/testTaker_game2.png","/quizHive/testTaker_lobby.png"],
    notes: {
  keyFeatures: [
    "Built GameHive, an MVP real-time quiz application where a testMaker can create and distribute a quiz that testTakers join and complete live.",
    "testMakers build quizzes through quiz cards displayed in the app's Game section.",
    "testTakers join a game using an access code and choose their own username, supporting anonymity from peers and management.",
    "Both testMakers and testTakers see a live lobby populate with connected users before the testMaker starts the game.",
    "testTakers answer each question within a 30-second time limit, with a leaderboard shown to both roles at the end of the game.",
    "Built with Next.js, TypeScript, React, Tailwind CSS, Chart.js, and Firestore, with a mobile-first responsive design.",
  ],
  whatLearned: [
    "User research surfaced two key needs — anonymity from peers and upper management, and a mobile-first experience — which directly shaped the username system and Tailwind's mobile-first breakpoints.",
    "Learned to globalize application state across the testMaker and testTaker flows using React's useContext, instead of prop-drilling through nested components.",
    "Currently a work in progress: the frontend and one complete user flow are built out; next steps are connecting the backend, refining responsive breakpoints, and finalizing the visual theme.",
  ],
},
 type: "professional",
  },
  {
    slug: "cat-widget",
    title: "Cat Widget",
    description:  "Inspired by the cursor-trail animations from early MySpace pages — one of my first memories of the internet feeling personal and playful. This is a small homage: cats wander along the border of select project cards, built in close collaboration with Claude, where I drove the direction and let Claude take the wheel on implementation. Really learning how to use AI to learn Pixel Animation and React, and how to collaborate with AI to create a fun, interactive experience.",
    image: "/cc.jpg",
    tags: ["React", "NextJS", "Tailwind CSS"],
    githubUrl: "https://github.com/guadalupejara/kitty_widget",
    featured: true,
    hasCat: true, 
    type: "personal",
  },
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