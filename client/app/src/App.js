import {
  About,
  Hero,
  Navbar,
  Education,
  Skills,
  Projects,
  Contact,
  Footer,
  Tech
} from "./components";
import { StarsCanvas } from "./components/canvas";
// import { StateProvider } from "./context/StateContext";
// import reducer, { initialState } from "./context/StateReducers";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Hero />
        {/* <Skills /> */}
        <About />
        <div className="contactContainer">
        <Education />
        <Tech />
        <Projects />
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
