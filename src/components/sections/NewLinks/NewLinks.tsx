import { PageWrapper } from "@/components/layout";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsGithub, BsLinkedin, BsFileEarmarkArrowUpFill } from "react-icons/bs";

export function NewLinks() {
  const [ref, inView, entry] = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  const sectionContainer = {
    hidden: {
      opacity: 0,
      // y: 40,
    },
    visible: {
      // y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.15,
        duration: 1,
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };
  const singleCard = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        bounce: 0.35,
        staggerChildren: 0.1,
      },
    },
  };

  // List Animation
  const listParentContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        // delayChildren: 1.25,
        staggerChildren: 0.1,
      },
    },
  };

  const listChildElement = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
        bounce: 0.35,
      },
    },
  };

  return (
    <motion.div
      variants={sectionContainer}
      initial="hidden"
      ref={ref}
      animate={animation}
      className=""
    >
      <PageWrapper className="py-32 ">
        <motion.div
          variants={singleCard}
          className=" flex flex-col items-center justify-center"
        >
          <div className="section-header">
            links <span className="-ml-1 text-primary">.</span>
          </div>

          <div className="mt-4 text-center">
            I am a passionate web developer with extensive experience
          </div>
        </motion.div>
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          ref={ref}
          animate={animation}
          className="grid grid-cols-1 gap-6 "
        >
          <motion.div
            variants={singleCard}
            className=" col-span-1 flex items-center justify-center gap-3 p-6   "
          >
            <a
              href="https://github.com/balthazarely"
              target="_BLANK"
              className="trasnform group flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg p-4 transition-transform duration-200 hover:-translate-y-2 hover:bg-base-200"
            >
              <BsGithub className="text-3xl group-hover:text-primary" />
              <div className="text-sm font-bold">github</div>
            </a>
            <a
              href="https://www.linkedin.com/in/balthazarely"
              target="_BLANK"
              className="trasnform group flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg p-4 transition-transform duration-200 hover:-translate-y-2 hover:bg-base-200"
            >
              <BsLinkedin className="text-3xl group-hover:text-primary" />
              <div className="text-sm font-bold">linkedin</div>
            </a>
            <a
              href="/balthazar_ely_resume_2023.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="trasnform group flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg p-4 transition-transform duration-200 hover:-translate-y-2 hover:bg-base-200"
            >
              <BsFileEarmarkArrowUpFill className="text-3xl group-hover:text-primary" />
              <div className="text-sm font-bold">resume</div>
            </a>
          </motion.div>
        </motion.div>
      </PageWrapper>
    </motion.div>
  );
}
