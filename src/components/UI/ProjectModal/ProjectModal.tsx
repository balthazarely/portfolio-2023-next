import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import { UIContext } from "lib/context";
import Link from "next/link";
import Image from "next/image";

export function ProjectModal() {
  const { state, dispatch } = useContext(UIContext);

  useEffect(() => {}, [state.selectedProject]);

  if (!state.selectedProject) {
    return <></>;
  }

  const navigateToProject = () => {
    dispatch({ type: "CLEAR_SELECTED_PROJECT" });
  };

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.1,
      },
    },
  };
  const containerInnerElements = {
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
        delay: 0.35,
      },
    },
  };

  return (
    <div
      onClick={(e) => {
        dispatch({ type: "CLEAR_SELECTED_PROJECT" });
      }}
      className={`fixed inset-0 z-50 flex  items-center justify-center   `}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative "
      >
        <motion.div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="relative z-50 mx-auto mt-4 h-[300px]  w-[400px]  sm:h-[375px] sm:w-[500px] md:h-[450px] md:w-[600px] "
          layoutId={`card-${state.selectedProject.id}`}
        >
          <button
            onClick={(e) => {
              dispatch({ type: "CLEAR_SELECTED_PROJECT" });
            }}
            className="btn-neutral btn-circle btn absolute right-3 top-3 z-[500] cursor-pointer border-none bg-opacity-50"
          >
            <HiX className="text-white" />
          </button>
          <Image
            width={500}
            height={500}
            alt="image"
            src={state.selectedProject.url}
            className={` absolute top-0 w-full   object-contain`}
          />
        </motion.div>

        <motion.div
          className=" relative  mx-auto w-[400px]   sm:w-[500px] md:w-[600px] "
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,

            transition: {
              delay: 0.25,
              type: "spring",
              bounce: 0.3,
            },
          }}
        >
          <motion.div
            className="flex flex-col gap-2 rounded-b-xl bg-base-100 p-8"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            <motion.div
              variants={containerInnerElements}
              className="flex items-center justify-between text-2xl font-bold"
            >
              <div>{state.selectedProject.title}</div>
            </motion.div>
            <motion.div
              variants={containerInnerElements}
              className=" flex flex-wrap gap-2 text-sm text-white"
            >
              {state.selectedProject.tech.map((tech: string) => (
                <div key={tech} className="badge-primary badge badge-sm ">
                  {tech}
                </div>
              ))}
            </motion.div>
            <motion.div variants={containerInnerElements} className="text-sm">
              {state.selectedProject.description.slice(0, 100)}...
            </motion.div>
            <motion.div
              variants={containerInnerElements}
              className="flex justify-end gap-2 text-xs"
            >
              <Link
                href={`/project${state.selectedProject.slug}`}
                scroll={false}
              >
                <button
                  onClick={() => navigateToProject()}
                  className=" btn-primary btn-xs btn cursor-pointer lowercase"
                >
                  read more
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
