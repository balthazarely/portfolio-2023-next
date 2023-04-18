import { PageWrapper } from "@/components/layout";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Custom404() {
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
      <PageWrapper className="pt-56">
        <div className="flex flex-col items-center justify-center gap-3  ">
          <motion.div
            variants={listChildElement}
            className="text-3xl font-bold"
          >
            404
          </motion.div>
          <motion.div
            variants={listChildElement}
            className="max-w-xs text-center"
          >
            not sure how you got here, but click below to go back home.
          </motion.div>
          <motion.div variants={listChildElement}>
            <Link href="/">
              <button
                aria-label="home"
                role="button"
                className="btn-primary btn"
              >
                home
              </button>
            </Link>
          </motion.div>
        </div>
      </PageWrapper>
    </motion.div>
  );
}
