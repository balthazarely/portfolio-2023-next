import { Footer } from "@/components/layout";
import {
  About,
  Contact,
  Hero,
  NewLinks,
  ProjectsNew,
} from "@/components/sections";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"; // 1.9K gzipped

export default function Home({ setActiveSection }: any) {
  const [heroRef, heroInView] = useInView({ threshold: 0.2 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.2 });
  const [linksRef, linksInView] = useInView({ threshold: 0.2 });
  const [contactRef, contactInView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (heroInView) {
      setActiveSection("hero");
    } else if (aboutInView) {
      setActiveSection("about");
    } else if (projectsInView) {
      setActiveSection("projects");
    } else if (linksInView) {
      setActiveSection("links");
    } else if (contactInView) {
      setActiveSection("contact");
    }
  }, [heroInView, aboutInView, projectsInView, linksInView, contactInView]);

  return (
    <>
      <div id="hero" ref={heroRef}>
        <Hero />
      </div>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="projects" className="scroll-m-24" ref={projectsRef}>
        <ProjectsNew />
      </div>
      <div id="links" ref={linksRef}>
        <NewLinks />
      </div>
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
