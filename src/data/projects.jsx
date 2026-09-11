const projects = [
  {
    id: 1,
    slug: "kodefast",
    title: "KodeFast",
    subtitle: "No-Code Application Platform",
    category: "Web Application",

    featured: true,

    shortDescription:
      "A no-code application platform that enables users to build and deploy applications using drag-and-drop UI components and process automation workflows.",

    description:
      "KodeFast is a no-code application platform designed to enable non-technical users to build and deploy applications without traditional development workflows.",

    image: "/projects/Kodefast.png",

    github: "",
    live: "https://dev.kodefast.com/",

    highlights: [
      "Enabled users to build and deploy applications up to 3x faster than traditional development.",
      "Built reusable drag-and-drop UI components and process automation workflows.",
      "Developed scalable RESTful backend services using Node.js, TypeScript, Express.js, and MongoDB.",
      "Integrated JWT Authentication and multiple third-party APIs.",
      "Containerized the full stack with Docker for reliable and environment-consistent deployments.",
      "Delivered feature updates across 4 Agile sprint cycles.",
      "Resolved 30+ client-reported issues.",
      "Sustained a 95% client satisfaction rate throughout the project lifecycle.",
    ],

    technologies: [
      "React.js",
      "Vue.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "REST APIs",
      "Docker",
      "Git",
    ],

    metrics: [
      { value: "3x", label: "Faster App Development" },
      { value: "30+", label: "Client Issues Resolved" },
      { value: "20%", label: "Improved Response Time" },
      { value: "95%", label: "Client Satisfaction" },
    ],
  },
  {
    id: 2,
    slug: "to-do-application-jwt",
    title: "To-Do Application",
    category: "Full-Stack Web Application",

    shortDescription:
      "A full-stack To-Do application with secure JWT authentication, email OTP verification, password recovery, and complete task management.",

    description:
      "A secure and responsive full-stack To-Do application built to provide users with a reliable way to manage their daily tasks. The application includes JWT-based authentication with HTTP-only cookies, email OTP verification, forgot-password functionality, and complete CRUD operations for tasks.",

    image: "/projects/TodoList.png",

    highlights: [
      "Implemented secure JWT-based authentication with HTTP-only cookies for protected user sessions.",
      "Built email OTP verification for user registration using Resend / Gmail OAuth2 with Nodemailer.",
      "Developed forgot-password functionality with OTP-based identity verification and password reset.",
      "Implemented complete CRUD operations for creating, updating, completing, and deleting tasks.",
      "Built a responsive and clean user interface using React, Tailwind CSS, and Vite.",
      "Configured production-ready CORS and secure frontend-backend communication for deployed environments.",
      "Integrated MongoDB with Mongoose for reliable user and task data management.",
      "Deployed the frontend on Vercel and backend services on Render for production use.",
    ],

    technologies: [
      "React",
      "Tailwind CSS",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "Nodemailer",
    ],

    features: [
      "Email OTP verification during registration",
      "JWT authentication with HTTP-only cookies",
      "Forgot password with OTP verification",
      "Create, read, update, and delete tasks",
      "Responsive UI with Tailwind CSS",
      "Production-ready CORS configuration",
    ],

    live: "https://to-do-application-jwt.vercel.app/",
    github:
      "https://github.com/ShivaniGollapalli/To-Do-Application-JWT#-task-manager--to-do-app-with-jwt-authentication",
  },
];

export default projects;
