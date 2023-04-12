import {
  About,
  Contact,
  Hero,
  Projects,
  ProjectsNew,
} from "@/components/sections";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer"; // 1.9K gzipped
import List from "./list";
import Modal from "./modal";
import ProjectModal from "./ProjectModal";

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

  const [selected, setSelected] = useState(null);

  return (
    <div>
      <div id="hero" ref={heroRef}>
        <Hero />
      </div>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      {/* <div id="projects" className="scroll-m-24" ref={projectsRef}>
        <Projects />
      </div> */}
      <div id="projects" className="scroll-m-24" ref={projectsRef}>
        <ProjectsNew selected={selected} setSelected={setSelected} />
        <ProjectModal selected={selected} setSelected={setSelected} />
        {/* <List setSelected={setSelected} /> */}
        {/* <Modal selected={selected} setSelected={setSelected} /> */}
      </div>

      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
      <div id="footer">
        <div className="h-44 bg-primary">Footer</div>
      </div>
      <ModalBackground selected={selected} />
    </div>
  );
}

function ModalBackground({ selected }: any) {
  return (
    <div
      className={` pointer-events-none ${
        selected ? "opacity-40" : "opacity-0"
      } fixed left-0 top-0 z-40 h-full w-full cursor-pointer  bg-black transition-opacity duration-200`}
    ></div>
  );
}
