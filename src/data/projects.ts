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
    slug: "Recoverly",
    title: "Recoverly",
    description: "Built a supplier chargeback-recovery app during a week-long hackathon with a team of four. We won 2nd place and the Most Creative Solution award.",
    image: "/hackathon/recoverly.png",
    tags: ["TanStack Start", "Supabase", "Tailwind CSS", "Vercel", "Gemini"],
    githubUrl: "https://github.com/guadalupejara/retailer-resolve",
    liveUrl: "https://retailer-resolve.vercel.app/",
    featured: true,
    unoptimized: true, 
    videoUrl: "/hackathon/demo1.mp4",
    gallery: [ "/hackathon/winner.jpg","/hackathon/core3.png","/hackathon/why.png","/hackathon/principles.png","/hackathon/process.png", "/hackathon/core1.png","/hackathon/core2.png","/hackathon/how.png"],
    notes: {
 keyFeatures: [
  "Built a 0–100 readiness score from 8 rule-based checks, applied the same way to every retailer. A fatal miss (missing stamp, missing required documents, amounts that don't reconcile) caps the score at 40, and the raw score stays visible.",
  "Added deadline alerts that track three clocks per case (retailer filing deadline, carrier proof expiry, retailer response due) and rank each case by the earliest one, so a case with months left to file still shows Critical if the carrier's copy of the proof expires in days.",
  "Designed a prioritized work queue for Walmart and Amazon that sorts by priority, then dollars, then weakest score, with filters and a recommended next action for each case (fix then submit, submit, accept and write off).",
  "Used AI (Gemini) only to explain lost points, suggest the fix, and draft the cover note. Rules set the score and the AI can't change it, so the same case always scores the same.",
  "Required a person for every money decision: analysts approve dispute packets, request missing evidence, and re-score after uploading proof, while write-offs over $1,000 go to a manager.",
  "Tested the rules engine on 40 mock cases with planted errors (no stamp, wrong PO, blurry scan, expired window), and all 40 matched the expected score and alerts.",
],
  whatLearned: [
    "Built and tested two prototyping approaches: coding from scratch (https://github.com/guadalupejara/team5 & https://team5-ashen.vercel.app/) and generating a site with the AI tool Lovable (https://retailer-resolve.lovable.app/retailers/target).",
    "Conducted user research with managers and associates at Home Depot, and researched existing products in the market. Consolidated the findings in a FigJam board: https://www.figma.com/board/M4R44oUJJFzJfq7kAg8X8t/Method-Hackaton_Team-5?node-id=0-1&p=f&t=3ehgwpdfQ61EHTOQ-0",
    "Worked with three teammates to build a team process and develop a solution to the challenge prompt in one week, with mentorship from Method.",
  ],
},
  type: "hackathon",
  },
  {
    slug: "Mi Casita",
    title: "Mi Casita",
    description: "This app was created as inspired from DAKboard for a customizable display used on tablets. The idea for this project was inspired for creating a centralized home organization system by including multi UI calander managment, sticky notes, reminders, lists, and messaging system. The goal is to also make it kid friendly by providing extra features like drawing board, emoji stickers, and sticky notes.",
    image: "/casita1.png",
    tags: ["React", "TypeScript", "Lucide", "Firebase", "Formik", "Yup", "Next.js"],
    githubUrl: "https://github.com/guadalupejara/mi_casita",
    videoUrl: "/casita/demo2.mp4",
    gallery: [ "/casita/casita1.png","/casita/casita2.png","/casita/casita3.png","/casita/casita4.png","/casita/casita5.png","/casita/casita6.png","/casita/casita7.png","/casita/dash.png","/casita/stickynotes.png"],
    featured: true,
    unoptimized: true,
    notes: {
    keyFeatures: [
      "Built a centralized home-organization dashboard (calendar, sticky notes, reminders, lists, messaging) with React, Next.js, and Tailwind CSS, using Firebase for the backend and authentication.",
      "Secured the app with Firebase OAuth: login/logout, profile updates, and secure account deletion through a confirmation modal.",
      "Added role-based routing that separates public pages from authenticated ones.",
      "Enforced clean user data with Yup and Formik schema validation, including a settings form that pre-populates from the database and updates user data in real time.",
      "Persisted draggable sticky notes with customizable fonts and colors to the database, so they can be added, deleted, and updated in real time.",
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
        "Built the success story workflow end to end: student profile and story submission forms, plus the admin review interface (Student Profile and Admin Story Table) in React and Bootstrap, using mapping and filtering to show the right data by user role.",
        "Built a responsive submission form that populates a preview card in real time and reports form status on submit through SweetAlerts and Toastrs.",
        "Built an admin-triggered .NET email flow (PUT endpoint, controller, model, and service methods) that sends students a templated Brevo email when their story is approved or denied, behind an interface abstraction so the email provider can be swapped without touching business logic.",
        "Connected React views and Formik forms through Axios to .NET APIs calling SQL Server stored procedures (ADO.NET), validating each request with Yup schemas (min/max length rules) and C# checks so payloads match the backend model and SQL table definitions before reaching the database.",
        "Implemented role-based routing for the dropdown and hamburger menus, including the student's identification number in the URL.",
        "Took over the comment section after its original engineer left and connected it to the events page, so users viewing an event card can leave real-time comments on that specific card.",
      ],
      whatLearned: [
        "Joined a cohort team that shrank from 18 to 12 engineers to finish a college-transition platform started by a prior cohort, and delivered it to completion.",
        "Analyzed various data sources, including legacy code, data tables, Theme & Figma files, and competitive audits, while leveraging team expertise to inform decisions about what information to surface on the Student Profile UI.",
        "Collaborated closely with a peer engineer on shared API work, learning how to coordinate changes across the front, middle, and back tier without stepping on each other's work.",
        "Gained experience coordinating product development using Git, GitHub, Trello, Figma, Slack, and Zoom — including stand-ups, code reviews, and keeping pace with weekly requirements in an agile environment.",
      ],
},
  type: "professional",
  },
  {
    slug: "Echos",
    title: "Echos",
    description: "This project was inspired by my own experience with pregnancy loss and was created as a personal way to process grief while offering a safe space for others to do the same. Built with React and Tailwind CSS, the app allows users to customize their experience through background and font changes, release their words instantly  by a button click or let them disappear as typing stops by toggling disappearing mode, and optionally save reflections locally as a .txt file. My goal with this project is to combine thoughtful design with functionality to provide a simple, private outlet for emotional release.",
    image: "/echo.webp",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/guadalupejara/echos",
    videoUrl: "/echo/demo1.mp4",
    liveUrl: "https://echos-alpha.vercel.app/",
    featured: true,
    unoptimized: true, 
    gallery: [ "/echo/railroad.png","/echo/stars.png","/echo/txt.png"],
    notes: {
      keyFeatures: [
        "Built and deployed a private, distraction-free writing app with React, Tailwind CSS, and Vite.",
        "Added customizable UI themes (background image, text color, and font) through controlled dropdown state.",
        "Built two text-release interactions: an instant scatter effect, and a toggleable mode that erases text automatically as typing pauses.",
        "Added a local save that exports reflections as a .txt file, with no backend required.",
      ],
      whatLearned: [
        "Researched how people process grief, including reading firsthand accounts on Reddit, which surfaced a real need for tools that simply let someone write in an unfiltered stream of consciousness without judgment or permanence.",
        "Learned how to implement local file saving in the browser, letting users export their reflections as a .txt file without needing a backend.",
        "Learned how to build reusable, configurable React components driven by controlled dropdown state — the same text and background elements adapt as the user clicks through different themes and settings.",
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
        "At Method, co-built an MVP from scratch on one of three engineering teams (2-3 engineers each), helping select the tech stack (Next.js, Firebase, Chart.js) and delivering the app to stakeholders in 2 weeks from finalized designs.",
        "Owned application development outside of DevOps: built Firebase cloud functions (HTTP triggers) for reading and writing 3 collections, a reusable dropdown component, and metric-based leaderboard pages, including an experience-points view in Chart.js.",
        "Collaborated with 2 Product Managers and 2 UI Designers on UX/UI processes (user interviews, feature prioritization, and finalization) for the login, navigation bar, dashboard, and leaderboard pages.",
        "GameHive, the real-time quiz app: testMakers build and distribute quizzes through quiz cards; testTakers join with an access code and choose their own username, supporting anonymity from peers and management. Both roles see a live lobby populate before the testMaker starts the game.",
        "testTakers answer each question within a 30-second time limit, with a leaderboard shown to both roles at the end of the game.",
      ],
      whatLearned: [
        "User research surfaced two key needs — anonymity from peers and upper management, and a mobile-first experience — which directly shaped the username system and Tailwind's mobile-first breakpoints.",
        "Learned to globalize application state across the testMaker and testTaker flows using React's useContext, instead of prop-drilling through nested components.",
        "Completed a residency at a technology consultancy, with weekly mentorship and training in consulting delivery alongside hands-on MVP development.",
        "This version is a work in progress: the frontend and one complete user flow are built out; next steps are connecting the backend, refining responsive breakpoints, and finalizing the visual theme.",
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
    videoUrl: "/cat2.mp4",
    gallery: [ "/Ember.png"],
    notes: {
      keyFeatures: [
    "Drew the cat's sprites by hand and imported my own pixel art, animated from a sprite sheet (one rest frame and a three-frame walk cycle, stepped through with CSS background-position) so the cat wanders the border of select project cards.",
    "Walks the card perimeter by converting a single progress value into an x/y position, then deriving facing and sprite rotation or mirroring from the current edge and direction so the cat turns corners correctly.",
    "Added natural-feeling movement: random short, medium, and long bursts of steps, random pauses between bursts, and a 30% chance to reverse direction.",
    "Measured each card with ResizeObserver so the path adapts to any card size and updates live, with default bounds for the server render.",
    "Made the cat opt-in per project through a hasCat flag, with an aria-label on the sprite describing its facing and state.",
    "Organized the code into separate hooks (bounds, walking, animation), pure geometry functions, and one constants file holding every tunable value.",
  ],
  whatLearned: [
    "Learned to use AI as a tool, not a magic fix: I set the direction and context, reviewed what Claude built, and asked why each piece worked, which is how I learned pixel animation and React hooks.",
    "Built it in four small iterations, each adding one narrow behavior: an image of a cat moved with the arrow keys, then a three-sprite walk animation, then wandering on its own around the screen, then refined movement along a card's border. Small steps made each AI-generated change easy to verify.",
    "Learned to aim for \"good enough\" and iterate: speed, pause length, and reverse chance live in one constants file, so I can tune the feel without touching logic.",
    "Learned that engineering fundamentals still apply when AI writes the code, such as cleaning up timers in useEffect and reading every line before trusting it.",
  ],
    },
    featured: true,
    hasCat: true, 
    type: "personal",
  },
]

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);