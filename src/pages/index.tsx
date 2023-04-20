import {
  About,
  Contact,
  Hero,
  NewLinks,
  ProjectsNew,
  GihubActivity,
} from "@/components/sections";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { NextSeo } from "next-seo";
import { UIContext } from "lib/context";
import { useRouter } from "next/router";
import { scroller } from "react-scroll";
import { useEffectOnce } from "react-use";

export default function Home() {
  const { dispatch } = useContext(UIContext);
  const router = useRouter();
  const { asPath } = router;
  const fragmentIdentifier = asPath.split("#")[1];

  useEffectOnce(() => {
    if (fragmentIdentifier) {
      scroller.scrollTo(fragmentIdentifier, {
        duration: 50,
        delay: 0,
        smooth: false,
        offset: -50,
      });
    }
  });

  const threshold = 0.3;
  const [heroRef, heroInView] = useInView({ threshold: threshold });
  const [aboutRef, aboutInView] = useInView({ threshold: threshold });
  const [projectsRef, projectsInView] = useInView({ threshold: threshold });
  const [linksRef, linksInView] = useInView({ threshold: threshold });
  const [contactRef, contactInView] = useInView({ threshold: threshold });

  useEffect(() => {
    const sections = {
      hero: heroInView,
      about: aboutInView,
      projects: projectsInView,
      links: linksInView,
      contact: contactInView,
    };

    for (const [section, inView] of Object.entries(sections)) {
      if (inView) {
        dispatch({ type: "SET_ACTIVE_SECTION", payload: section });
        break;
      }
    }
  }, [
    heroInView,
    aboutInView,
    projectsInView,
    linksInView,
    contactInView,
    dispatch,
  ]);

  return (
    <>
      <NextSeo
        title="Balthazar Ely"
        description="Portfolio page for UI Engineer/Front End Developer Balthazar Ely"
        openGraph={{
          url: "https://www.balthazar-ely.com",
          title: "Balthazar Ely",
          description:
            "Portfolio page for UI Engineer/Front End Developer Balthazar Ely",
          images: [
            {
              url: "/images/project-images/portfolio-1.jpg",
              width: 500,
              height: 500,
              alt: "balthazar portfolio image",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <div id="hero" ref={heroRef}>
        <Hero />
      </div>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="projects" ref={projectsRef}>
        <ProjectsNew />
      </div>
      <div id="links" ref={linksRef}>
        <NewLinks />
      </div>
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
      <div>
        <GihubActivity />
      </div>
    </>
  );
}
