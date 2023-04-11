import { PageWrapper } from "@/components/layout";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projectContainerVariants, projectElements } from "lib/animations";

export function Projects() {
  const [filterBy, setFilterBy] = useState("all");
  const [asAnimationHappened, setAnimationHappened] = useState(false);
  const [ref, inView, entry] = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
      setAnimationHappened(true);
    }
  }, [animation, inView]);

  const [projects, setProjects] = useState([
    {
      name: "freebird",
      type: "professional",
      id: 0,
    },
    {
      name: "tonic website",
      type: "professional",
      id: 1,
    },
    {
      name: "freebird",
      type: "professional",
      id: 2,
    },
    {
      name: "tonic website",
      type: "professional",
      id: 3,
    },
    {
      name: "movieApp",
      type: "personal",
      id: 4,
    },
    {
      name: "movieApp",
      type: "personal",
      id: 5,
    },
    {
      name: "movieApp",
      type: "personal",
      id: 6,
    },
    {
      name: "songDive",
      type: "personal",
      id: 7,
    },
    {
      name: "design projects",
      type: "design",
      id: 8,
    },
    {
      name: "design projects",
      type: "design",
      id: 9,
    },
    {
      name: "design projects",
      type: "design",
      id: 10,
    },
    {
      name: "design projects",
      type: "design",
      id: 11,
    },
  ]);

  const projectsForGrid = projects.filter((project: any) =>
    filterBy !== "all" ? project.type === filterBy : project
  );

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
          // animate={inView ? "visible" : "hidden"}
          className="flex justify-between"
        >
          <div className="section-header">projects</div>
          <ProjectFilter setFilterBy={setFilterBy} filterBy={filterBy} />
        </motion.div>
        <motion.div
          initial="hidden"
          ref={ref}
          animate={inView || asAnimationHappened ? "visible" : "hidden"}
          variants={projectContainerVariants}
          className="mt-4 grid grid-cols-3 gap-2"
          exit={{ opacity: 0 }}
        >
          <AnimatePresence>
            {projectsForGrid.map((project: any, idx: number) => (
              <motion.div variants={projectElements} key={project.id}>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex gap-6 border-2 bg-gray-500`}
                >
                  <div className={`h-96 w-full   `}>{project.name}</div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </PageWrapper>
    </div>
  );
}

function ProjectFilter({ setFilterBy, filterBy }: any) {
  const projectTypes = ["all", "professional", "personal", "design"];
  return (
    <motion.div className="flex gap-2">
      {projectTypes.map((proj: any) => (
        <button
          key={proj.id}
          onClick={() => setFilterBy(proj)}
          className={` btn-sm btn ${
            filterBy === proj ? "btn-primary " : " btn-ghost"
          }`}
        >
          {proj}
        </button>
      ))}
    </motion.div>
  );
}

function SingleProjects({ project }: any) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="flex gap-6 border-2"
    >
      <div className="h-96 w-full bg-gray-200">{project.name}</div>
    </motion.div>
  );
}
