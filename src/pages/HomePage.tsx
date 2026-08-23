import { About } from "../components/portfolio/About";
import { ContactSection } from "../components/portfolio/ContactSection";
import { Footer } from "../components/portfolio/Footer";
import { Hero } from "../components/portfolio/Hero";
import { Navbar } from "../components/portfolio/Navbar";
import { ProjectsSection } from "../components/portfolio/ProjectsSection";
import { SkillsSection } from "../components/portfolio/SkillsSection";
import { VerticalTimeline } from "../components/portfolio/VerticalTimeline";
import { education } from "../data/education";
import { experience } from "../data/experience";
import { projects } from "../data/projects";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SkillsSection />
      <VerticalTimeline id="education" title="Education" items={education} variant="education" />
      <VerticalTimeline id="experience" title="Experience" items={experience} variant="experience" />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}