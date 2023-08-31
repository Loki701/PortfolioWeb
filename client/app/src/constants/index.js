import {carrent, jobit, tripguide, web, mobile, backend, html, css, javascript, typescript, reactjs, redux, tailwind, nodejs, mongodb, threejs, git, figma, docker} from "../assets"

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

"Beyond the confines of my IDE, you'll find me hiking, traveling, playing sports to volunteering.",

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
    name: "React JS",
    icon: reactjs,
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
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "Java Compiler",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
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
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Communications App",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "ML Project",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {navLinks, services, technologies, projects, aboutMe};