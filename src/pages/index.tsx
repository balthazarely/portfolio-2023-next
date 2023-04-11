import { About, Contact, Hero, Projects } from "@/components/sections";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"; // 1.9K gzipped

export default function Home({ setActiveSection }: any) {
  const [heroRef, heroInView] = useInView({ threshold: 0.2 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.2 });
  const [contactRef, contactInView] = useInView({ threshold: 0.2 });

  const router = useRouter();
  const { section } = router.query;

  function scrollToSection(section: string) {
    const node = document.getElementById(section);
    if (!node) {
      return;
    }
    window.scrollTo({
      top: node.offsetTop - 96,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (section) {
      scrollToSection(section.toString());
    }
  }, [section]);

  useEffect(() => {
    if (heroInView) {
      setActiveSection("hero");
    } else if (aboutInView) {
      setActiveSection("about");
    } else if (projectsInView) {
      setActiveSection("projects");
    } else if (contactInView) {
      setActiveSection("contact");
    }
  }, [heroInView, aboutInView, projectsInView, contactInView]);

  return (
    <div>
      <div id="hero" ref={heroRef}>
        <Hero />
      </div>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="projects" className="scroll-m-24" ref={projectsRef}>
        <Projects />
      </div>
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
      <div id="footer">
        <div className="h-44 bg-primary">Footer</div>
      </div>
    </div>
  );
}
