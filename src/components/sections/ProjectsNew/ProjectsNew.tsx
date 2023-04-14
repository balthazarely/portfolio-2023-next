import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { PageWrapper } from "@/components/layout";
import { useInView } from "react-intersection-observer";
import { projectContainerVariants, projectElements } from "lib/animations";
import { UIContext } from "lib/context";
import { items } from "lib/content";
import { Project } from "lib/types";

interface ICard {
  item: Project;
  tempSelected: Project | null;
}

const Card = ({ item, tempSelected }: ICard) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const { dispatch } = useContext(UIContext);

  const overlayVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const textOverlayVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.35,
      },
    },
  };

  return (
    <motion.div
      style={{}}
      className={`${tempSelected?.id === item.id ? "z-50" : "z-10"}`}
      variants={projectElements}
    >
      <motion.div
        layout
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover="visible"
        whileTap="visible"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className={`relative  gap-6    `}
      >
        <motion.img
          className=" cursor-pointer "
          layoutId={`card-${item.id}`}
          alt={item.title}
          src={item.url}
          onClick={() => {
            dispatch({ type: "SET_SELECTED_PROJECT", payload: item });
          }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-0  left-0 z-30  flex h-1/2 w-full flex-col justify-end overflow-hidden  bg-gradient-to-t from-neutral to-transparent px-4 pb-4  sm:hidden  "
          variants={overlayVariants}
        >
          <div className=" text-2xl font-bold text-white">{item.title}</div>
          <div className=" mt-2 flex flex-wrap gap-2 text-sm text-white">
            {item.tech.map((tech: string, idx: number) => (
              <div key={idx} className="badge-primary badge badge-sm ">
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="pointer-events-none absolute left-0 top-0  z-30 hidden h-full w-full overflow-hidden bg-gradient-to-t from-neutral to-transparent sm:block  "
          initial="hidden"
          variants={overlayVariants}
          animate={isHovered ? "visible" : "hidden"}
        >
          <motion.div
            variants={textOverlayVariants}
            animate={isHovered ? "visible" : "hidden"}
            className="absolute bottom-0 left-0 h-32 w-full p-4"
          >
            <div className="text-2xl font-bold text-white">{item.title}</div>
            <div className="text-sm text-white">{item.tagline}</div>
            <div className="mt-2 flex flex-wrap gap-2 text-sm text-white">
              {item.tech.map((tech: string, idx: number) => (
                <div key={idx} className="badge-primary badge badge-sm ">
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export function ProjectsNew() {
  const { state } = useContext(UIContext);

  const [ref, inView, entry] = useInView({ threshold: 0.1 });
  const [asAnimationHappened, setAnimationHappened] = useState<boolean>(false);
  const [tempSelected, setTempSelected] = useState<Project | null>(null);
  const animation = useAnimation();
  const [filterBy, setFilterBy] = useState<string>("all");
  const [projects, setProjects] = useState<Project[]>(items);

  const projectsForGrid = projects.filter((project: Project) =>
    filterBy !== "all" ? project.category === filterBy : project
  );

  useEffect(() => {
    if (inView) {
      animation.start("visible");
      setAnimationHappened(true);
    }
  }, [animation, inView]);

  useEffect(() => {
    if (state.selectedProject !== null) {
      setTempSelected(state.selectedProject);
    } else {
      setTimeout(() => {
        setTempSelected(state.selectedProject);
      }, 500);
    }
  }, [state.selectedProject]);

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
    <div className="bg-base-200">
      <PageWrapper className=" py-16">
        <motion.div
          initial="hidden"
          ref={ref}
          variants={listChildElement}
          animate={animation}
          className="flex flex-col justify-between sm:flex-row"
        >
          <div className="section-header text-center sm:text-left">
            projects
          </div>
          <ProjectFilter setFilterBy={setFilterBy} filterBy={filterBy} />
        </motion.div>
        <motion.div
          initial="hidden"
          ref={ref}
          animate={inView || asAnimationHappened ? "visible" : "hidden"}
          variants={projectContainerVariants}
          className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-2 "
          exit={{ opacity: 0 }}
        >
          <AnimatePresence>
            {projectsForGrid.map((item) => (
              <Card key={item.id} tempSelected={tempSelected} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </PageWrapper>
    </div>
  );
}

interface IProjectFilter {
  setFilterBy: (arg: string) => void;
  filterBy: string;
}

function ProjectFilter({ setFilterBy, filterBy }: IProjectFilter) {
  const projectTypes = ["all", "professional", "personal", "design"];

  return (
    <motion.div className="mb-4 mt-6 flex justify-center gap-2">
      {projectTypes.map((proj: any, idx: number) => (
        <button
          key={idx}
          onClick={() => setFilterBy(proj)}
          className={` btn-sm btn lowercase ${
            filterBy === proj ? "btn-primary " : " btn-ghost"
          }`}
        >
          {proj}
        </button>
      ))}
    </motion.div>
  );
}
