import { useInView } from "react-intersection-observer";
import { PageWrapper } from "../PageWrapper";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useContext, useEffect } from "react";
import { NextSeo } from "next-seo";
import { UIContext } from "lib/context";
import { Project } from "lib/types";
import { Carousel } from "@/components/UI";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Link from "next/link";

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
  prevProjectObj: Project | null;
  nextProjectObj: Project | null;
}

export function ProjectWrapper({
  project,
  nextProjectObj,
  prevProjectObj,
}: IProjectWrapper) {
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
          <PageWrapper className="grid max-w-xl grid-cols-1 gap-8 pb-32 pt-16 md:max-w-4xl  md:grid-cols-2">
            <motion.div
              initial="hidden"
              ref={ref}
              animate={animation}
              variants={container}
            >
              <motion.div
                variants={containerInnerElementsLeft}
                className="text-left text-3xl font-bold leading-snug"
              >
                {project.title}
              </motion.div>
              <motion.div
                variants={containerInnerElementsLeft}
                className="text-md mb-1 flex flex-wrap  justify-start gap-8  py-2 text-left text-sm font-bold leading-snug"
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
                className=" mb-4 flex flex-wrap justify-start gap-2  text-sm text-white"
              >
                {project.tech.map((tech: string) => (
                  <div key={tech} className="badge-primary badge badge-sm ">
                    {tech}
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={containerInnerElementsLeft}
                className="mx-auto  w-full    text-left text-sm"
              >
                {project.description.split("\n").map((line, index) => (
                  <div className="mt-4" key={index}>
                    {line}
                  </div>
                ))}
              </motion.div>
              <motion.div
                className="mt-4 flex justify-start gap-2 "
                variants={containerInnerElementsLeft}
              >
                {project.link && (
                  <a target="_BLANK" href={project.link}>
                    <button
                      aria-label="live-site"
                      role="button"
                      className=" btn-primary btn cursor-pointer lowercase"
                    >
                      live site
                    </button>
                  </a>
                )}
                {project.github && (
                  <a target="_BLANK" href={project.github}>
                    <button
                      aria-label="github"
                      role="button"
                      className=" btn-primary btn cursor-pointer lowercase"
                    >
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
                      key={idx}
                      className="mx-auto h-auto max-h-96 cursor-pointer "
                      src={image}
                      alt="project image"
                    />
                  ))}
                </Carousel>
              </motion.div>
            </motion.div>
          </PageWrapper>
          <PageWrapper>
            <motion.div
              initial="hidden"
              ref={ref}
              animate={animation}
              className="mb-8 flex justify-between "
              variants={container}
            >
              <motion.div variants={containerInnerElementsRight}>
                {prevProjectObj ? (
                  <div>
                    <Link href={`/project/${prevProjectObj.slug}`}>
                      <button
                        aria-label="project-link"
                        role="button"
                        className="btn-ghost btn-sm btn"
                      >
                        <HiChevronLeft />
                        {prevProjectObj.title}
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div></div>
                )}
              </motion.div>
              <motion.div variants={containerInnerElementsRight}>
                {nextProjectObj ? (
                  <div>
                    <Link href={`/project/${nextProjectObj.slug}`}>
                      <button
                        aria-label="project-link"
                        role="button"
                        className=" btn-ghost btn-sm btn flex items-center justify-center"
                      >
                        {nextProjectObj.title}
                        <HiChevronRight className=" text-xl" />
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div></div>
                )}
              </motion.div>
            </motion.div>
          </PageWrapper>
        </div>
      </div>
    </>
  );
}
