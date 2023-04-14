import { PageWrapper } from "@/components/layout";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiCheck, HiArrowRight, HiCode } from "react-icons/hi";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { MdDesignServices } from "react-icons/md";
import { devskills, otherSkills } from "lib/content";

export function About() {
  const [flipped, setFlipped] = useState(true);
  const [ref, inView, entry] = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

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
      <PageWrapper className="grid grid-cols-1 gap-6 py-32 sm:grid-cols-2">
        <motion.div
          variants={singleCard}
          className=" col-span-1 flex flex-col items-center justify-center  sm:items-start  "
        >
          <div className="section-header">
            about <span className="text-primary">me.</span>
          </div>
          <motion.div className="mt-4 h-full max-w-md text-center text-base leading-7 sm:text-left">
            I have worked for a number of companies, both on the consulting and
            product side of things. Here are some of the technologies I&apos;ve
            worked with most recently, as well as some design tools.
          </motion.div>
        </motion.div>
        <motion.div
          variants={singleCard}
          className="col-span-1 h-72 [perspective:1000px]"
        >
          <div
            className={`relative h-full w-full  transition-transform duration-500 [transform-style:preserve-3d] ${
              flipped ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            <div className="absolute inset-0 rounded-xl bg-base-200 p-4 shadow-lg">
              <div className="flex items-center gap-1 text-lg font-bold">
                <MdDesignServices className="text-2xl font-bold text-primary" />
                other skills.
              </div>
              <motion.ul
                variants={listParentContainer}
                className="mt-1 grid grid-cols-2 pl-2 text-sm leading-6"
              >
                {otherSkills.map((skill: string) => (
                  <motion.li
                    variants={listChildElement}
                    key={skill}
                    className="flex items-center gap-1"
                  >
                    <HiCheck className="text-primary" />
                    <motion.div className="">{skill}</motion.div>
                  </motion.li>
                ))}
              </motion.ul>
              <div className="absolute bottom-3 right-3  flex items-center justify-end">
                <button
                  onClick={handleFlip}
                  className="flex items-center  gap-1 text-xs font-semibold text-primary"
                >
                  other skills
                  <HiArrowRight />
                </button>
              </div>
            </div>
            <div
              style={{ backfaceVisibility: "hidden" }}
              className="absolute inset-0  flex flex-col rounded-xl bg-base-200 p-4 shadow-lg [transform:rotateY(180deg)]"
            >
              <div className="flex items-center gap-1 text-lg font-bold">
                <HiCode className="text-2xl font-bold text-primary" />
                dev skills.
              </div>
              <motion.ul
                variants={listParentContainer}
                className="mt-1 grid grid-cols-2 pl-2 text-sm leading-6"
              >
                {devskills.map((skill: string) => (
                  <motion.li
                    variants={listChildElement}
                    key={skill}
                    className="flex items-center gap-1"
                  >
                    <HiCheck className="text-primary" />
                    <motion.div className="">{skill}</motion.div>
                  </motion.li>
                ))}
              </motion.ul>
              <div className="absolute bottom-3 right-3  flex items-center justify-end">
                <button
                  onClick={handleFlip}
                  className="flex items-center  gap-1 text-xs font-semibold text-primary"
                >
                  other skills
                  <HiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </PageWrapper>
    </motion.div>
  );
}
