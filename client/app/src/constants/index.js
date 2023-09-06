import {MA,compiler,gator,crawler, ml, web, mobile, backend, html, css, javascript, typescript, reactjs, tailwind, nodejs, git, docker, cplusplus, python, sql, java} from "../assets"

const navLinks = [{
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "tech",
    title: "Technologies",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
const aboutMe = [
"Welcome to my corner of the digital world! I'm thrilled to have you explore my journey as a passionate software developer.", 

"In a realm where logic and creativity converge, I find my true calling. I'm Jose Figueredo, a dedicated developer with a keen interest in crafting elegant and efficient solutions to real-world problems. My insatiable curiosity drives me to continuously learn and innovate, making every project I undertake an exciting adventure.",

"My journey into the world of coding ignited when I aspired to create my own video game. This initial spark led me to enroll in programming classes, where my passion deepened with each dive into various programming topics. Over time, this passion has evolved into a profound and committed partnership. Armed with a strong grasp of languages such as C++, Java, Python, SQL, and JavaScript, I excel in transforming intricate ideas into elegant and sustainable code.",

"But I'm not just about strings of code. I believe that software development is an art as much as it is a science. User experience takes center stage in my creations, and I strive to build applications that not only function flawlessly but also provide a seamless and enjoyable interaction.",

"Over the years, I've had the privilege of collaborating with diverse teams on projects ranging from Web Applications and compilers to ML Models. These experiences have not only honed my technical skills but also enriched my ability to communicate and thrive in collaborative environments.",

"I'm excited to share my journey, projects, and insights with you. Whether you're here to browse through my portfolio or explore the world of software development together, I'm honored to have you join me. Let's innovate, let's collaborate, and let's make the digital world a more functional and beautiful place, one line of code at a time."];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Aspiring DevOps developers",
    icon: backend,
  }
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
    name: "Cplusplus",
    icon: cplusplus,
  },
  {
    name: "Python1",
    icon: python,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "java",
    icon: java,
  },
  // {
  //   name: "postgres",
  //   icon: postgres,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "Messaging Web App",
    description:
      "A secure and decentralized messaging application using XMPP messaging protocol.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "pink-text-gradient",
      }
    ],
    image: MA,
    source_code_link: "https://github.com/",
  },
  {
    name: "Used Car Price Prediction Model",
    description:
      "A machine-learning model for accurately predicting used car prices based on various car features, including year, mileage, make, model, and region",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-learn",
        color: "green-text-gradient",
      },
    ],
    image: ml,
    source_code_link: "https://github.com/",
  },
  {
    name: "Custom Language Compiler",
    description:
      "A custom programming language using context-free grammar, that allows for ease image manipulation",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
    ],
    image: compiler,
    source_code_link: "https://github.com/",
  },
  {
    name: "Web Crawler",
    description:
      "A web crawler that traverses the web given a root URL storing website content in local storage.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "BeautifulSoup",
        color: "orange-text-gradient",
      },
      {
        name: "SQLite",
        color: "green-text-gradient",
      },
    ],
    image: crawler,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Budgeting Web App",
  //   description:
  //     "An intuitive budgeting web app that helps track your expenses and stay on top of your finances.",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "MySQL",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "ExpressJS",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Smart Event Organizer ",
    description:
      "a web application designed for efficient event management and mood prediction based on workload analysis.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: gator,
    source_code_link: "https://github.com/",
  },
];

export {navLinks, services, technologies, projects, aboutMe};