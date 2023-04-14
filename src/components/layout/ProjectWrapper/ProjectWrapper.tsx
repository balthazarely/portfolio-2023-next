import { useInView } from "react-intersection-observer";
import { PageWrapper } from "../PageWrapper";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

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
      duration: 0.5,
      type: "spring",
      bounce: 0.35,
    },
  },
};
const imageContainer = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "spring",
      bounce: 0.35,
    },
  },
};

export function ProjectWrapper({ setActiveSection, project }: any) {
  const [contentRef, contentRefInView] = useInView({ threshold: 0.2 });
  const [ref, inView] = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  useEffect(() => {
    if (contentRefInView) {
      setActiveSection("hero");
    }
  }, [contentRefInView]);
  const { url, otherImages } = project;
  let projectImages = [url];

  if (otherImages && otherImages.length > 0) {
    projectImages = [...projectImages, ...otherImages];
  }
  return (
    <div className="flex-grow bg-base-200 pt-24" id="hero" ref={contentRef}>
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
                  client: <span className="text-primary">{project.client}</span>
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
              className=" text-center   text-sm sm:text-left"
            >
              {project.description}
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
            className=""
            variants={container}
            initial="hidden"
            ref={ref}
            animate={animation}
          >
            <motion.div
              variants={containerInnerElementsRight}
              className="embla h-full  overflow-hidden"
              ref={emblaRef}
            >
              <div className="embla__container flex h-full ">
                {projectImages?.map((image: any, idx: number) => {
                  return (
                    <div
                      key={idx}
                      style={{ flex: "0 0 100%" }}
                      className="embla__slide h-full min-w-0 "
                    >
                      <Image
                        className="mx-auto h-full object-cover shadow-lg "
                        src={image}
                        alt="project image"
                        width={500}
                        height={500}
                      />
                    </div>
                  );
                })}
              </div>
            </motion.div>
            <div className="mb-4 mt-2 flex justify-center">
              <button onClick={scrollPrev}>
                <HiChevronLeft className="text-3xl text-primary" />
              </button>
              <button onClick={scrollNext}>
                <HiChevronRight className="text-3xl text-primary" />
              </button>
            </div>
          </motion.div>
        </PageWrapper>
      </div>
    </div>
  );
}
