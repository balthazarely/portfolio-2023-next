import { PageWrapper } from "@/components/layout";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projectContainerVariants, projectElements } from "lib/animations";
import { projectsForHomePage } from "lib/content";
import Image from "next/image";

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

  const [projects, setProjects] = useState(projectsForHomePage);

  const projectsForGrid = projects.filter((project: any) =>
    filterBy !== "all" ? project.category === filterBy : project
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
          className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 "
          exit={{ opacity: 0 }}
        >
          <AnimatePresence>
            {projectsForGrid.map((project: any, idx: number) => (
              <SingleProjects project={project} key={project.id} />
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
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const overlayVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.8,
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
      variants={projectElements}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover="visible"
      whileTap="visible"
    >
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className={`relative flex h-full  w-full  gap-6   object-cover `}
      >
        <Image
          className=" z-20  h-full w-full object-cover"
          alt={project.name}
          src={project.image}
          height={200}
          width={200}
        />
        <motion.div
          className="absolute  left-0 top-0 z-30 h-full w-full cursor-pointer overflow-hidden bg-gradient-to-t from-neutral to-transparent  "
          initial="hidden"
          variants={overlayVariants}
          animate={isHovered ? "visible" : "hidden"}
        >
          <motion.div
            variants={textOverlayVariants}
            animate={isHovered ? "visible" : "hidden"}
            className="absolute bottom-0 left-0 h-32 w-full p-4"
          >
            <div className="text-2xl font-bold text-white">{project.name}</div>
            <div className="text-sm text-white">
              Small probec to saklh sn 2 asjfhhafz zs97
            </div>
            <div className="mt-2 flex flex-wrap gap-2 text-sm text-white">
              {project.tech.map((tech: string) => (
                <div className="badge-primary badge badge-sm ">{tech}</div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
