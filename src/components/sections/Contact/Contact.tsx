import { PageWrapper } from "@/components/layout";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm, ValidationError } from "@formspree/react";
import { useMediaQuery } from "react-responsive";

export function Contact() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const threshold = isMobile ? 0.1 : 0.2;
  const [ref, inView] = useInView({ threshold: threshold });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  const sectionContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
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

  const [state, handleSubmit] = useForm("xlekoady");

  return (
    <motion.div
      variants={sectionContainer}
      initial="hidden"
      ref={ref}
      className="bg-base-200"
      animate={animation}
    >
      <PageWrapper className="flex flex-col items-center justify-center gap-6   py-32 text-center ">
        <motion.div variants={singleCard} className=" section-header">
          contact <span className="text-primary">me.</span>
        </motion.div>
        {state.succeeded ? (
          <div className="max-w-md rounded-md p-4">
            Thank you for your submission. I&apos;ll be in touch with you as
            soon as possible
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col gap-4 "
          >
            <motion.div variants={singleCard} className="form-group relative">
              <input
                required
                id="name"
                type="text"
                placeholder="your name"
                name="name"
                className="form-control input-bordered input w-full"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </motion.div>
            <motion.div variants={singleCard} className="form-group relative">
              <input
                required
                id="email"
                type="email"
                name="email"
                className="form-control input-bordered input w-full"
                placeholder="your email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </motion.div>
            <motion.div variants={singleCard} className="form-group relative">
              <textarea
                className="form-control input textarea-bordered textarea h-44 w-full"
                id="message"
                required
                name="message"
                placeholder="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </motion.div>

            <motion.div variants={singleCard} className="form-group">
              <button
                role="button"
                type="submit"
                aria-label="send-message"
                className="btn-primary btn lowercase"
              >
                send message
              </button>
            </motion.div>
          </form>
        )}
      </PageWrapper>
    </motion.div>
  );
}
