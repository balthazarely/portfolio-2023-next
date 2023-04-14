import {
  About,
  Contact,
  Hero,
  NewLinks,
  ProjectsNew,
} from "@/components/sections";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { NextSeo } from "next-seo";
import { UIContext } from "lib/context";

export default function Home() {
  const { dispatch } = useContext(UIContext);

  const [heroRef, heroInView] = useInView({ threshold: 0.2 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.2 });
  const [linksRef, linksInView] = useInView({ threshold: 0.2 });
  const [contactRef, contactInView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (heroInView) {
      dispatch({ type: "SET_ACTIVE_SECTION", payload: "hero" });
    } else if (aboutInView) {
      dispatch({ type: "SET_ACTIVE_SECTION", payload: "about" });
    } else if (projectsInView) {
      dispatch({ type: "SET_ACTIVE_SECTION", payload: "projects" });
    } else if (linksInView) {
      dispatch({ type: "SET_ACTIVE_SECTION", payload: "links" });
    } else if (contactInView) {
      dispatch({ type: "SET_ACTIVE_SECTION", payload: "contact" });
    }
  }, [heroInView, aboutInView, projectsInView, linksInView, contactInView]);

  return (
    <>
      <NextSeo
        title="Balthazar Ely"
        description="Portfolio page for UI Engineer/Front End Developer Balthazar Ely"
      />
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
    </>
  );
}
