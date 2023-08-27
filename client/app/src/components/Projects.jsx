import portfolio1 from "../images/portfolio1.jpg";
// import portfolio2 from "../images/portfolio2.jpg";
import portfolio3 from "../images/portfolio3.jpg";
import portfolio4 from "../images/portfolio4.jpg";
import portfolio5 from "../images/portfolio5.jpg";
import portfolio6 from "../images/portfolio6.jpg";

const Projects= () => {
  const projects = [
    {
      title: "Messenging App",
      src: portfolio1,
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aspernatur?",
      link: "/",
    },
    {
      title: "Custom Language Compiler",
      src: portfolio1,
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aspernatur?",
      link: "/",
    },
    {
      title: "Social Media Interface",
      src: portfolio3,
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aspernatur?",
      link: "/",
    },
    {
      title: "StockMarket App",
      src: portfolio4,
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aspernatur?",
      link: "/",
    },
    {
      title: "Car Price Predictor",
      src: portfolio5,
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aspernatur?",
      link: "/",
    },
    {
      title: "Web Design",
      src: portfolio6,
      subtitle: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aspernatur?",
      link: "/",
    },
  ]

  return (
    <section className="portfolio" id="projects">
      <h2 className="heading">
        Latest <span>Projects</span>
        <span className='animate scroll' style={{'--i': 1}}></span>
      </h2>
      <div className="portfolio-container">
        {projects.map((project, idx) => (
          <div className="portfolio-box" key={idx}>
            <img src={project.src} alt="project" />
            <div className="portfolio-layer">
              <h4>{project.title}</h4>
              <p>{project.subtitle}</p>
              <a href={project.link}><i className="bx bx-link-external" /></a>
            </div>
            <span className='animate scroll' style={{'--i': idx+1}}></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;