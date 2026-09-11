import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import ExperiencePreview from "../pages/Home/ExperiencePreview";
import SkillsPreview from "../pages/Home/SkillsPreview";
import Resume from "../pages/Resume/Resume";
import Contact from "../pages/Contact/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/experience" element={<ExperiencePreview />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<SkillsPreview />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
