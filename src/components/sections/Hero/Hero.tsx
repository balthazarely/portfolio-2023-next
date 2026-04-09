import { PageWrapper } from "@/components/layout";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  container,
  containerInnerElements,
  imageContainer,
} from "lib/animations";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Link from "next/link";

export function Hero() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [headshotLoaded, setHeadshotLoaded] = useState(false);
  const animation = useAnimation();

  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, -150]);
  const textY = useTransform(scrollY, [0, 600], [0, -80]);

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
          style={{ y: imageY }}
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
          style={{ y: textY }}
          className="col-span-3 mt-6 grid gap-2 sm:col-span-8  sm:mt-0  "
        >
          <motion.div
            variants={containerInnerElements}
            className="h-full text-center text-4xl font-bold leading-snug sm:text-left"
          >
            Hi, I&apos;m <span className="text-primary">Balthazar.</span>{" "}
            I&apos;m a XD Engineer with a passion for{" "}
            <span className="text-primary"> beautiful things.</span>
          </motion.div>
          <motion.div
            variants={containerInnerElements}
            className="h-full text-center text-base leading-7 sm:text-left"
          >
            I&apos;m a web developer with experience in front-end web
            development & interactive experiences. I enjoy building web apps,
            beautiful user interfaces, and anything that involves JavaScript.
          </motion.div>
          <motion.div
            className="flex justify-center sm:justify-start"
            variants={containerInnerElements}
          >
            <Link
              href="/#projects"
              aria-label="See my work"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("projects");
                if (el)
                  window.scrollTo({
                    top: el.offsetTop - 100,
                    behavior: "smooth",
                  });
              }}
              className="btn-primary btn mt-2 min-w-[6rem]"
            >
              my work
            </Link>
          </motion.div>
        </motion.div>
      </PageWrapper>
    </div>
  );
}
