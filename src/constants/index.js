import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  getaka,
  cell,
  jobsearch,
  mern,
  soon,
  progress,
  vidchat,
  travel,
  threejs,
  bank,
  imageAI,
  unichat,
  rentcar,
  amazon,
  headphones,
  portf,
  next,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Application Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
];

const experiences = [
  {
    title: " Freelance Software Developer",
    company_name: "",
    icon: mern,
    iconBg: "#383E56",
    date: "Sept 2019 - Sept 2021",
    points: [
      "Created Web Applications for clients using the MERN (MongoDB, Express.js, React.js, Node.js) Stack, delivering full-stack solutions that met client requirements.",
      "Developed Portfolio websites for local professionals, such as Architects and a Dental Clinic, using JavaScript and CSS with Sass. These visually appealing and responsive websites showcased their work and services effectively.",
      "Designed and implemented an online shop for a local business using React, Node.js, and Strapi.io. This e-commerce solution included features like product listings, shopping cart functionality, secure payment integration, and inventory management.",
      "Developed an admin dashboard for a travel app using React and Tailwind CSS, providing an intuitive interface for managing backend operations and data.",
      "Utilized Python for script development, automating tasks and enhancing efficiency",
      "Experienced using Git and GitHub as part of a team, facilitating collaboration and version control.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Getaka Labs",
    icon: getaka,
    iconBg: "#E6DEDD",
    date: "Sept 2021 - March 2022",
    points: [
      "Front End Developer for a job search web application, converting Figma designs into code using Next.js, React, Redux-saga, Prisma, Redis, and Sqlite.",
      "Conducted Testing and Quality Assessment for the web application, ensuring functionality, performance, and user experience met standards.",
      "Full Stack Developer for an investment/business website with CMS feature, utilizing Next.js, React.js, Tailwind CSS, Node.js, Strapi.io, and Firebase.",
      "Backend Developer for a licensure examination reviewer mobile app, using Node.js and PostgreSQL for infrastructure and functionality.",
      "Developed HTML emails and created microsites for an insurance company using React and Tailwind.js.",
      "Contributed to the development, testing, and debugging of a video-based web app using React, Tailwind CSS, S3, and Happy Testing.",
      "Assisted clients in troubleshooting their Shopify stores.",
      "Exposed in DevOps thru Bitbucket Pipelines CI/CD, Docker and Nginx",
      "Engaged in training on Robotic Process Automation (RPA) and AI development",
      "Expanded knowledge of programming languages through training in Rust and Go.",
      "Experienced agile methodologies and participated in daily scrum meetings using Slack and ClickUp.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Cell 5",
    icon: cell,
    iconBg: "#383E56",
    date: "April 2022 - Oct 2022",
    points: [
      "Contributed to team efforts in adding new features and pages to the web application based on sprint requirements. Collaborated in sprint planning, user story understanding, and actively participated in development",
      "Updated and maintained a project management application using React.js, TypeScript, Tailwind CSS, Firebase, Figma, Next.js, Google Cloud Platforms, and React Storybook. Translated Figma designs into React code using Tailwind CSS and React Storybook.",
      "Enhanced clients' design frameworks by adding and updating design components aligned with sprint goals. Utilized Figma designs, Tailwind CSS, and React Storybook for consistent styling and layout.",
      "Developed components and migration scripts for clients' application features following sprint objectives. Leveraged Figma-based design framework, React, Tailwind CSS, and React Storybook.",
      "Contributed to debugging and refactoring faulty code to improve software quality and maintainability. Engaged in code review, issue resolution, and ensuring adherence to design framework and coding standards.",
      "Exposed with Google Cloud Platform",
      "Experienced agile methodologies such as Kanban and Scrum. Utilized Notion for project management, maintained Kanban boards, and actively participated in Scrum ceremonies including daily stand-ups, sprint planning, and retrospectives.",
    ],
  },
  {
    title: "Hire Me!",
    company_name: "Currently Looking for a Full Time Developer Role!",
    icon: jobsearch,
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "TOOK A LONG BREAK DUE TO HEALTH AND PERSONAL REASONS BUT NOW I'M BACK!",
      "I've been continuously updating and developing a portfolio that showcases projects aligned with the latest industry trends, demonstrating proficiency in cutting-edge technologies and staying up-to-date with the ever-evolving tech landscape.",
      "I'm capable of Full stack development using the MERN (MongoDB, Express.js, React.js, Node.js) stack, and I'm proficient in both JavaScript and TypeScript.",
      "I have made projects that involves technologies like Next.js and React Native for building scalable and performant web and mobile applications.",
      "Familiarity with Vue.js and Nuxt.js, enabling development in the Vue ecosystem",
      "Exposure to Python, Go, Flutter, and Rust, allowing for versatility in different programming languages and frameworks.",
      "Currently expanding knowledge in three.js and 3D rendering to explore immersive and interactive web experiences.",
      "Actively engaged in AI development, keeping up with the latest advancements and incorporating AI technologies into projects.",
      "Aspiring to learn C# for game development, with a keen interest in exploring the gaming industry and creating interactive experiences.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "This web developer's work is so good, even I would click 'like' with a smiley face",
    name: "Mark Zuckerberg",
    designation: "CEO",
    company: "Meta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1280px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
  },
  {
    testimonial:
      "Move over, Windows updates, because Rojen's work is the real upgrade we all need",
    name: "Bill Gates",
    designation: "Founder",
    company: "Microsoft",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg",
  },
  {
    testimonial:
      "Calling this web developer's work 'electric' would be an understatement.",
    name: "Elon Musk",
    designation: "CEO",
    company: "Tesla",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
  },
];

const projects = [
  {
    name: "Car Rental",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react/Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs/nest",
        color: "yellow-text-gradient",
      },
    ],
    image: rentcar,
    source_code_link:
      "https://github.com/rojenrosal/best-car/tree/main/react-nestjs-full-web-app-master",
  },
  {
    name: "Modern Bank UI",
    description:
      "A Modern Bank UI Landing Page, Good Template for modern Businesses, built with React JS and Tailwind CSS. Divided into wonderful sections. ",
    tags: [
      {
        name: "react/js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/rojenrosal/sample_modernbank_react",
  },
  {
    name: "Travel App",
    description:
      "A comprehensive travel booking platform landing page that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations. (back end to be added)",
    tags: [
      {
        name: "react/js",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind/react-icons",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/rojenrosal/sample_TravelApp_React",
  },
  {
    name: "AI Image Renderer",
    description:
      "A web application that is powered by OpenAI API. It's a clone of OpenAI'S DALL-E. Users can generate and share AI rendered Images.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "openaiapi/mongo",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs/express/cloudinary",
        color: "yellow-text-gradient",
      },
    ],
    image: imageAI,
    source_code_link: "https://github.com/rojenrosal/project_openAI_API_Image",
  },

  {
    name: "3D Portfolio",
    description:
      "A Modern portfolio with 3D Models made using Three JS. It uses react-three-fiber to integrate it with React Code, it has animations using Framer Motions and Tailwind CSS for styling.",
    tags: [
      {
        name: "react/three/js",
        color: "blue-text-gradient",
      },
      {
        name: "framermotion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "emailjs",
        color: "yellow-text-gradient",
      },
    ],
    image: portf,
    source_code_link: "https://github.com/rojenrosal/my3DPortfolio",
  },
  {
    name: "Amazon Web Scraper",
    description:
      "A Beginner version of a Simple API Development, this code scrapes Amazon Web Stores. The api is made using node js and express js",
    tags: [
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "nodejs/express",
        color: "yellow-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://github.com/rojenrosal/amazon_scraper",
  },

  {
    name: "Firebase Chat App",
    description:
      "A Chat App similar to Meta's Messenger, with React Chat Engine and Tailwind as it's frontend technologies and Uses Firebase Login and Firebase for Authentication and Backend",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs/axios",
        color: "yellow-text-gradient",
      },
    ],
    image: unichat,
    source_code_link: "https://github.com/rojenrosal/unichat",
  },
  {
    name: "Video Chat Web App",
    description:
      "A simple Video Chat Web App that showcase webRTC and socket.io technologies, it's developed with the help of Node JS and Express for the Backend and React for the Front End",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "webrtc/socket.io",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs/express",
        color: "yellow-text-gradient",
      },
    ],
    image: vidchat,
    source_code_link: "https://github.com/rojenrosal/Video-chat-app",
  },

  {
    name: "Sample Product Landing Page",
    description:
      "A single page product landing page that uses the simplest technologies of HTML, Vanilla Javascript and CSS. A good Template for simple Product UI",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: headphones,
    source_code_link: "https://github.com/rojenrosal/headphones",
  },

  {
    name: "Fitness/Gym Full Stack APP",
    description:
      "A  Fitness/Gym app that is made using React/Typescript and allows users to register and Login and choose various workout programs. Developed using the MERN Stack with Tailwind an Framer Motion.",
    tags: [
      {
        name: "react/typescript",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs/express/auth",
        color: "yellow-text-gradient",
      },
    ],
    image: progress,
    source_code_link: "https://github.com/",
  },

  {
    name: "Full Stack Ecommerce App",
    description:
      "A Full Stack Ecommerce App with Admin Dashboard and The Full Store, with also payment technologies installed. Developed using the MERN Stack with Tailwind CSS",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongo",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs/express/auth",
        color: "yellow-text-gradient",
      },
    ],
    image: progress,
    source_code_link: "https://github.com/",
  },
  {
    name: "Social Media Clone",
    description:
      "A complete Social Media Clone in which you can create accounts and make share posts, add friends, comment and like posts. created using the MERN Stack with Material UI",
    tags: [
      {
        name: "react/js",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs/express/auth",
        color: "yellow-text-gradient",
      },
    ],
    image: progress,
    source_code_link: "https://github.com/",
  },
  {
    name: "Leet Code Clone",
    description:
      "A Web Application that shows Leet Code answer and tutorials as well as coding playgrounds. Developed using Next JS and Typescript with Firebase as the backend",
    tags: [
      {
        name: "next/typescript",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: soon,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mobile Delivery App",
    description:
      "A React Native application that is similar to your everyday food Delivery app. it uses Navigation, Redux, Sanity.io Technologies",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sanity.io",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: soon,
    source_code_link: "https://github.com/",
  },
  {
    name: "Chat GPT Clone",
    description:
      "A Clone of an AI Chat Messeger powered by OpenAI API. It's developed using React with Redux for State Mangement and as well as Tailwind for the styling. Node JS and MongoDB are used for the Backend",
    tags: [
      {
        name: "react/js redux",
        color: "blue-text-gradient",
      },
      {
        name: "mongo",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs/express",
        color: "yellow-text-gradient",
      },
    ],
    image: soon,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
