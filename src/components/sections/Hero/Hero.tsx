import { PageWrapper } from "@/components/layout";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  container,
  containerInnerElements,
  imageContainer,
} from "lib/animations";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export function Hero() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [headshotLoaded, setHeadshotLoaded] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView && headshotLoaded) {
      animation.start("visible");
    }
  }, [animation, inView, headshotLoaded]);

  return (
    <div className="flex items-center justify-center bg-base-200 pt-24 ">
      <PageWrapper className="grid grid-cols-1 gap-0 py-32 sm:grid-cols-12 sm:gap-6">
        <motion.div
          className="col-span-1 flex  w-full justify-center  sm:col-span-4  sm:aspect-square"
          variants={imageContainer}
          initial="hidden"
          ref={ref}
          animate={animation}
        >
          <Image
            className="m-3 h-56 w-56 rounded-full object-cover shadow-lg sm:h-auto sm:w-auto"
            src="/images/balthazar-headshot.jpeg"
            alt="balthazar headshot"
            width={200}
            height={200}
            priority
            onLoad={() => setHeadshotLoaded(true)}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          ref={ref}
          animate={animation}
          variants={container}
          className="col-span-3 mt-6 grid gap-2 sm:col-span-8  sm:mt-0  "
        >
          <motion.div
            variants={containerInnerElements}
            className="h-full text-center text-4xl font-bold leading-snug sm:text-left"
          >
            Hi, I&apos;m <span className="text-primary">Balthazar.</span> I am a
            UI Engineer with a passion for building
            <span className="text-primary"> beautiful things.</span>
          </motion.div>
          <motion.div
            variants={containerInnerElements}
            className="h-full text-center text-base leading-7 sm:text-left"
          >
            I&apos;m web developer with experience in front-end web development
            & graphic design. I enjoy building web apps, beautiful
            user-interfaces, and anything that involves Javascript.
          </motion.div>
          <motion.div
            className="flex justify-center sm:justify-start
          "
            variants={containerInnerElements}
          >
            <Link offset={-100} to="projects" smooth={true} duration={600}>
              <button
                aria-label="see-my-work"
                role="button"
                className="btn-primary btn mt-2 "
              >
                my work
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </PageWrapper>
    </div>
  );
}
