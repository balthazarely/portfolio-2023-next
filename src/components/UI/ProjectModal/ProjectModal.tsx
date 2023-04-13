import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiChevronRight, HiChevronLeft, HiX } from "react-icons/hi";
import { UIContext } from "lib/context";
import Link from "next/link";

export function ProjectModal() {
  const [imageSelected, setImageSelected] = useState(0);
  const { state, dispatch } = useContext(UIContext);

  useEffect(() => {
    setImageSelected(0);
  }, [state.selectedProject]);

  if (!state.selectedProject) {
    return <></>;
  }

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
      },
    },
  };

  const nextImage = (e: any) => {
    if (imageSelected < state.selectedProject.otherImages.length) {
      setImageSelected(imageSelected + 1);
    }
    e.stopPropagation();
  };
  const prevImage = (e: any) => {
    if (imageSelected > 0) {
      setImageSelected(imageSelected - 1);
    }
    e.stopPropagation();
  };

  return (
    <div
      onClick={(e) => {
        dispatch({ type: "CLEAR_SELECTED_PROJECT" });
      }}
      className={`fixed inset-0 z-50 flex cursor-pointer items-center justify-center   `}
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
          className="relative z-50 mx-auto mt-4 h-[300px]  w-[400px] bg-white sm:h-[375px] sm:w-[500px] md:h-[450px] md:w-[600px] "
          layoutId={`card-${state.selectedProject.id}`}
        >
          <img
            src={state.selectedProject.url}
            className={`${
              imageSelected === 0 ? "opacity-100" : "opacity-0"
            } absolute top-0   object-contain`}
          />
          {state.selectedProject.otherImages?.map((img: any, idx: number) => {
            return (
              <img
                key={idx}
                src={state.selectedProject.otherImages[idx]}
                className={`${
                  imageSelected === idx + 1 && imageSelected !== 0
                    ? "opacity-100"
                    : "opacity-0"
                } absolute top-0  object-contain`}
              />
            );
          })}
        </motion.div>
        <motion.div
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
          transition={{
            delay: 0.25,
            duration: 0.25,
          }}
          className="absolute left-0 top-0 z-[100] mt-4  flex h-[300px] w-[400px] items-center  justify-between  bg-opacity-60 sm:h-[375px]  sm:w-[500px] md:h-[450px] md:w-[600px]"
        >
          <div className="absolute left-2 top-2 ">
            <button
              onClick={() => {
                dispatch({ type: "CLEAR_SELECTED_PROJECT" });
              }}
              className="btn-sm btn-circle btn"
            >
              <HiX />
            </button>
          </div>
          <button
            onClick={(e) => prevImage(e)}
            className={` flex h-10 w-8 items-center justify-center bg-neutral bg-opacity-40 duration-150 hover:bg-opacity-100`}
          >
            <HiChevronLeft className="text-2xl font-bold text-white" />
          </button>
          <button
            onClick={(e) => nextImage(e)}
            className="flex h-10 w-8 items-center justify-center bg-neutral bg-opacity-40 duration-150 hover:bg-opacity-100"
          >
            <HiChevronRight className="text-2xl font-bold text-white" />
          </button>
        </motion.div>

        <motion.div
          className=" relative  mx-auto w-[400px]   sm:w-[500px] md:w-[600px] "
          initial={{
            opacity: 0,
            y: -200,
          }}
          animate={{
            opacity: 1,
            y: -60,
            transition: {
              delay: 0.25,
              type: "spring",
              bounce: 0.3,
            },
          }}
          transition={{
            delay: 0.25,
            duration: 0.25,
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
              className="mt-10 flex items-center justify-between text-2xl font-bold"
            >
              <div>{state.selectedProject.title}</div>
              <div className="text-xs font-light">
                {imageSelected + 1} /{" "}
                {state.selectedProject.otherImages
                  ? state.selectedProject.otherImages.length + 1
                  : "1"}
              </div>
            </motion.div>
            <motion.div
              variants={containerInnerElements}
              className=" flex flex-wrap gap-2 text-sm text-white"
            >
              {state.selectedProject.tech.map((tech: string) => (
                <div key={tech} className="badge badge-primary badge-sm ">
                  {tech}
                </div>
              ))}
            </motion.div>
            <motion.div variants={containerInnerElements} className="text-sm">
              {state.selectedProject.description}
            </motion.div>
            <motion.div
              variants={containerInnerElements}
              className="flex justify-end gap-2 text-xs"
            >
              {state.selectedProject.link && (
                <a target="_BLANK" href={state.selectedProject.link}>
                  <button className=" btn-outline btn-primary btn-xs btn cursor-pointer lowercase">
                    live site
                  </button>
                </a>
              )}
              {state.selectedProject.github && (
                <a target="_BLANK" href={state.selectedProject.github}>
                  <button className=" btn-outline btn-primary btn-xs btn cursor-pointer lowercase">
                    Github
                  </button>
                </a>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
