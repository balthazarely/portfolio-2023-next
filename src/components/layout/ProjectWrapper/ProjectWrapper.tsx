import { useInView } from "react-intersection-observer";
import { PageWrapper } from "../PageWrapper";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { useContext, useEffect } from "react";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { UIContext } from "lib/context";
import { Project } from "lib/types";
import { Carousel } from "@/components/UI";

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const containerInnerElementsLeft = {
  hidden: {
    x: -30,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.35,
    },
  },
};

const containerInnerElementsRight = {
  hidden: {
    x: 30,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.25,
      delay: 0.25,
      type: "spring",
      bounce: 0.35,
    },
  },
};

interface IProjectWrapper {
  project: Project;
}

export function ProjectWrapper({ project }: IProjectWrapper) {
  const [contentRef, contentRefInView] = useInView({ threshold: 0.2 });
  const [ref, inView] = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  const { dispatch } = useContext(UIContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    animation.start("visible");
    dispatch({ type: "SET_ACTIVE_SECTION", payload: project.title });
  }, [animation]);

  const { url, otherImages } = project;
  let projectImages = [url];

  if (otherImages && otherImages.length > 0) {
    projectImages = [...projectImages, ...otherImages];
  }

  return (
    <>
      <NextSeo
        title={project.title}
        description="Portfolio page for UI Engineer/Front End Developer Balthazar Ely"
      />
      <div
        className="flex-grow overflow-x-hidden bg-base-200 pt-24"
        id="hero"
        ref={contentRef}
      >
        <div className="bg-base-200 pt-0 ">
          <PageWrapper className="grid grid-cols-1 gap-8 pb-32 pt-16  md:grid-cols-2">
            <motion.div
              initial="hidden"
              ref={ref}
              animate={animation}
              variants={container}
              className=""
            >
              <motion.div
                variants={containerInnerElementsLeft}
                className="text-center text-3xl font-bold leading-snug md:text-left"
              >
                {project.title}
              </motion.div>
              <motion.div
                variants={containerInnerElementsLeft}
                className="text-md mb-1 flex  justify-center gap-8 py-2  text-center text-sm font-bold leading-snug sm:text-left md:justify-start"
              >
                {project?.client && (
                  <div>
                    client:{" "}
                    <span className="text-primary">{project.client}</span>
                  </div>
                )}
                {project?.year && (
                  <div>
                    year: <span className="text-primary">{project.year}</span>
                  </div>
                )}
              </motion.div>
              <motion.div
                variants={containerInnerElementsLeft}
                className=" mb-4 flex flex-wrap justify-center gap-2 text-sm  text-white md:justify-start"
              >
                {project.tech.map((tech: string) => (
                  <div key={tech} className="badge-primary badge badge-sm ">
                    {tech}
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={containerInnerElementsLeft}
                className=" text-center text-sm sm:text-left"
              >
                {project.description.split("\n").map((line, index) => (
                  <div className="mt-4" key={index}>
                    {line}
                  </div>
                ))}
              </motion.div>
              <motion.div
                className="mt-4 flex justify-center gap-2 md:justify-start "
                variants={containerInnerElementsLeft}
              >
                {project.link && (
                  <a target="_BLANK" href={project.link}>
                    <button className=" btn-primary btn cursor-pointer lowercase">
                      live site
                    </button>
                  </a>
                )}
                {project.github && (
                  <a target="_BLANK" href={project.github}>
                    <button className=" btn-primary btn cursor-pointer lowercase">
                      Github
                    </button>
                  </a>
                )}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative "
              variants={container}
              initial="hidden"
              ref={ref}
              animate={animation}
            >
              <motion.div
                variants={containerInnerElementsRight}
                className="relative  "
              >
                <Carousel>
                  {projectImages?.map((image: string, idx: number) => (
                    <img
                      className="mx-auto h-auto max-h-96 cursor-pointer "
                      src={image}
                      alt="project image"
                    />
                  ))}
                </Carousel>
              </motion.div>
            </motion.div>
          </PageWrapper>
        </div>
      </div>
    </>
  );
}
