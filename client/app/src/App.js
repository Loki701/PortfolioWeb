import {
  About,
  Hero,
  Navbar,
  Education,
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
        <About />
        {/* <div className=" block relative min-h-[90vh] z-0 bg-black"> */}
        <Education />
        <Tech />
        <Projects />
        <div className="block relative min-h-[90vh] z-0 bg-black">
          <Contact />
          <StarsCanvas />
        </div>
          {/* <StarsCanvas /> */}
        {/* </div> */}
        <Footer />
      </BrowserRouter>
  );
}

export default App;
