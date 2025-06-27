
import About from "./About";
import Aboutme from "./Aboutme";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";

export default function Home() {
  return (
    <div className="flex flex-col mx-5 space-y-10 lg:mx-15 lg:space-y-20" >
      <About />
      <Aboutme />
      <Education />
      <Skills />
      <Projects />
      <Experience/>
      <Contact/>
    </div>
  );
}
