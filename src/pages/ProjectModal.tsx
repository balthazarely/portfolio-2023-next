import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiChevronRight, HiChevronLeft, HiX } from "react-icons/hi";

export default function ProjectModal({ selected, setSelected }: any) {
  const [imageSelected, setImageSelected] = useState(0);

  useEffect(() => {
    setImageSelected(0);
  }, [selected]);

  if (!selected) {
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
  const images = [
    "/images/project-thumbnails/plow-ops.jpeg",
    "/images/project-thumbnails/hei.jpeg",
    "/images/project-thumbnails/freebird.png",
  ];

  const nextImage = (e: any) => {
    console.log("asfasfasfa");

    if (imageSelected < 2) {
      setImageSelected(imageSelected + 1);
    }
    e.stopPropagation();
  };
  const prevImage = (e: any) => {
    console.log("asfasfasfa");
    if (imageSelected > 0) {
      setImageSelected(imageSelected - 1);
    }
    e.stopPropagation();
  };

  return (
    <div
      onClick={(e) => {
        // setSelected(null);
        // e.stopPropagation();
      }}
      className={`fixed inset-0 z-50 flex cursor-pointer items-center justify-center  `}
    >
      <div className="relative">
        <motion.div
          className="relative z-50 mx-auto mt-4 h-[300px] w-[400px]  sm:h-[450px] sm:w-[600px]  "
          layoutId={`card-${selected.id}`}
        >
          <img
            src={selected.url}
            className={`${
              imageSelected === 0 ? "opacity-100" : "opacity-0"
            } absolute top-0   object-contain transition-opacity duration-200`}
          />
          <img
            src={selected.otherImages[0]}
            className={`${
              imageSelected === 1 ? "opacity-100" : "opacity-0"
            } absolute top-0   object-contain transition-opacity duration-200`}
          />
          <img
            src={selected.otherImages[1]}
            className={`${
              imageSelected === 2 ? "opacity-100" : "opacity-0"
            } absolute top-0   object-contain transition-opacity duration-200`}
          />
        </motion.div>
        <div className="absolute left-0 top-0 z-[100] mt-16">
          <button onClick={prevImage}>
            <HiChevronLeft />
          </button>
          <button onClick={nextImage}>
            <HiChevronRight />
          </button>
          <button onClick={nextImage}>
            <HiX onClick={() => setSelected(null)} />
          </button>
        </div>

        <motion.div
          className=" relative -z-50 mx-auto w-[400px] sm:w-[600px] "
          initial={{
            opacity: 0,
            y: -500,
          }}
          animate={{
            opacity: 1,
            y: -50,
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
              className="mt-10 text-2xl font-bold "
            >
              {selected.title}
            </motion.div>
            <motion.div
              variants={containerInnerElements}
              className=" flex flex-wrap gap-2 text-sm text-white"
            >
              {selected.tech.map((tech: string) => (
                <div className="badge-primary badge badge-sm ">{tech}</div>
              ))}
            </motion.div>{" "}
            <motion.div variants={containerInnerElements} className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum.
            </motion.div>
            {imageSelected}{" "}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
