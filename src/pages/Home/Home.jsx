import Hero from "../../components/Hero/Hero";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ExperiencePreview from "./ExperiencePreview";
import SkillsPreview from "./SkillsPreview";
import Contact from "../Contact/Contact";
// import Resume from "../Resume/Resume";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <ExperiencePreview />
      <SkillsPreview />
      <Contact />
      {/* <Resume/> */}
    </>
  );
}

export default Home;
