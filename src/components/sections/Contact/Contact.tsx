import { PageWrapper } from "@/components/layout";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type UserSubmitForm = {
  fullname: string;
  email: string;
  message: string;
};

export function Contact() {
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

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    message: Yup.string()
      .required("message is required")
      .min(6, "message must be at least 6 characters")
      .max(20, "message must not exceed 500 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <motion.div
      variants={sectionContainer}
      initial="hidden"
      ref={ref}
      animate={animation}
      className=""
    >
      <PageWrapper className="flex flex-col items-center justify-center gap-6   py-32 text-center ">
        <motion.div variants={singleCard} className=" section-header">
          contact <span className="text-primary">me.</span>
        </motion.div>
        <motion.div
          variants={singleCard}
          className="mt-0 h-full max-w-md text-base leading-7 "
        >
          I am a passionate web developer with extensive experience in graphic
          design.
        </motion.div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
          <motion.div variants={singleCard} className="form-group relative">
            <input
              type="text"
              placeholder="your name"
              {...register("fullname")}
              className={`form-control input-bordered input w-96 ${
                errors.fullname ? "is-invalid input-error" : ""
              }`}
            />
            <div className="invalid-feedback absolute -bottom-6 right-1/2 w-full translate-x-1/2 text-xs font-semibold text-error">
              {errors.fullname?.message}
            </div>
          </motion.div>
          <motion.div variants={singleCard} className="form-group relative">
            <input
              type="text"
              placeholder="your email"
              {...register("email")}
              className={`form-control input-bordered input w-96 ${
                errors.email ? "is-invalid input-error" : ""
              }`}
            />
            <div className="invalid-feedback absolute -bottom-6 right-1/2 w-full translate-x-1/2 text-xs font-semibold text-error">
              {errors.email?.message}
            </div>
          </motion.div>
          <motion.div variants={singleCard} className="form-group relative">
            <textarea
              placeholder="your message"
              {...register("message")}
              className={`form-control input textarea-bordered textarea h-44 w-96 ${
                errors.message ? "is-invalid textarea-error" : ""
              }`}
            />

            <div className="invalid-feedback absolute -bottom-6 right-1/2 w-full translate-x-1/2  text-xs font-semibold text-error">
              {errors.message?.message}
            </div>
          </motion.div>

          <motion.div variants={singleCard} className="form-group">
            <button type="submit" className="btn-primary btn lowercase">
              send message
            </button>
          </motion.div>
        </form>
      </PageWrapper>
    </motion.div>
  );
}
