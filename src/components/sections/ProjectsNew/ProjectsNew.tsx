import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { PageWrapper } from "@/components/layout";
import { useInView } from "react-intersection-observer";
import { projectContainerVariants, projectElements } from "lib/animations";
import Image from "next/image";
import { UIContext } from "lib/context";

const items = [
  {
    id: 1,
    url: "/images/project-thumbnails/plow-ops.jpeg",
    otherImages: [
      "/images/project-thumbnails/accuterra.jpg",
      "/images/project-thumbnails/privett.png",
    ],
    title: "Plow Ops",
    description: "TEST dolor",
    tech: ["Angular 10", "GatsbyJs", "Material UI", "TailwindCSS"],
    category: "professional",
  },
  {
    id: 2,
    url: "/images/project-thumbnails/plow-ops.jpeg",
    // url: "/images/project-thumbnails/hei.jpeg",
    otherImages: [
      "/images/project-thumbnails/accuterra.jpg",
      "/images/project-thumbnails/privett.png",
    ],
    title: "Hartman Ely Investments",
    description: "TEST dolor",
    tech: ["NextJS", "TailwindCSS"],
    category: "professional",
  },
  {
    id: 3,
    url: "/images/project-thumbnails/plow-ops.jpeg",
    // url: "/images/project-thumbnails/accuterra.jpg",
    otherImages: [
      "/images/project-thumbnails/accuterra.jpg",
      "/images/project-thumbnails/privett.png",
    ],
    title: "AccuTerra",
    description: "TEST dolor",
    tech: ["GatsbyJs", "Maps"],
    category: "professional",
  },
  {
    id: 4,
    url: "/images/project-thumbnails/plow-ops.jpeg",
    // url: "/images/project-thumbnails/plow-ops.jpeg",
    otherImages: [
      "/images/project-thumbnails/accuterra.jpg",
      "/images/project-thumbnails/privett.png",
    ],
    title: "MovieBin",
    category: "personal",
    type: "Web App",
    tech: ["NextJS", "Firebase", "API", "TailwindCSS"],
  },
  {
    id: 5,
    url: "/images/project-thumbnails/plow-ops.jpeg",

    // url: "/images/project-thumbnails/songdive.jpeg",
    otherImages: [
      "/images/project-thumbnails/accuterra.jpg",
      "/images/project-thumbnails/privett.png",
    ],
    title: "Song Dive",
    description: "TEST dolor",
    tech: ["React", "ExpressJS", "Spotify API", "TailwindCSS"],
    category: "personal",
  },
  {
    id: 6,
    url: "/images/project-thumbnails/plow-ops.jpeg",

    // url: "/images/project-thumbnails/freebird.png",
    otherImages: [
      "/images/project-thumbnails/accuterra.jpg",
      "/images/project-thumbnails/privett.png",
    ],
    title: "Freebird Shoes",
    description: "TEST dolor",
    tech: ["Shopify", "HydrogenJS", "jQuery", "GraphQL", "SanityCMS"],
    category: "professional",
  },
  {
    id: 7,
    url: "/images/project-thumbnails/plow-ops.jpeg",

    // url: "/images/project-thumbnails/privett.png",
    otherImages: [
      "/images/project-thumbnails/accuterra.jpg",
      "/images/project-thumbnails/privett.png",
    ],
    title: "Privett Hachery",
    description: "TEST dolor",
    tech: ["Angular 10", "Bootstrap"],
    category: "professional",
  },
  {
    id: 8,
    url: "/images/project-thumbnails/plow-ops.jpeg",

    // url: "/images/project-thumbnails/identity-records.jpeg",
    otherImages: [
      "/images/project-thumbnails/accuterra.jpg",
      "/images/project-thumbnails/privett.png",
    ],
    title: "Identity Records",
    description: "TEST dolor",
    tech: ["GatsbyJs", "Styled Components", "SanityCMS"],
    category: "professional",
  },
  {
    id: 9,
    url: "/images/project-thumbnails/plow-ops.jpeg",

    // url: "/images/project-thumbnails/bannerbox.jpeg",
    otherImages: [
      "/images/project-thumbnails/accuterra.jpg",
      "/images/project-thumbnails/privett.png",
    ],
    title: "Bannerbox",
    description: "TEST dolor",
    tech: ["React", "Firebase", "GSAP", "HTML Canvas", "DCO"],
    category: "professional",
  },
  {
    id: 10,
    url: "/images/project-thumbnails/plow-ops.jpeg",

    // url: "/images/project-thumbnails/logos.jpeg",
    otherImages: [
      "/images/project-thumbnails/accuterra.jpg",
      "/images/project-thumbnails/privett.png",
    ],
    title: "Logos",
    description: "TEST dolor",
    tech: ["Illustrator"],
    category: "design",
  },
  {
    id: 11,
    url: "/images/project-thumbnails/plow-ops.jpeg",

    // url: "/images/project-thumbnails/brochures.jpeg",
    otherImages: [
      "/images/project-thumbnails/accuterra.jpg",
      "/images/project-thumbnails/privett.png",
    ],
    title: "Brochures",
    description: "TEST dolor",
    tech: ["Photoshop", "InDesign", "Illustrator", "Lightroom"],
    category: "professional",
  },
  {
    id: 12,
    url: "/images/project-thumbnails/plow-ops.jpeg",

    // url: "/images/project-thumbnails/branding.jpeg",
    otherImages: [
      "/images/project-thumbnails/accuterra.jpg",
      "/images/project-thumbnails/privett.png",
    ],
    title: "Branding",
    description: "TEST dolor",
    tech: ["Photoshop", "InDesign", "Illustrator", "Lightroom"],
    category: "design",
  },
  // {
  //   id: 13,
  //   url: "/images/project-thumbnails/plow-ops.jpeg",
  //   title: "Branding",
  //   description: "TEST dolor",
  //   tech: ["Photoshop", "InDesign", "Illustrator", "Lightroom"],
  //   category: "design",
  // },
];

const Card = ({ setSelected, item, tempSelected }: any) => {
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
            setSelected(item);
          }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-0  left-0 z-30 block h-1/2 w-full overflow-hidden bg-gradient-to-t from-neutral to-transparent px-4 pt-24 sm:hidden  "
          variants={overlayVariants}
        >
          <div className=" text-2xl font-bold text-white">{item.title}</div>
          <div className="mt-2 flex flex-wrap gap-2 text-sm text-white">
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
            <div className="text-sm text-white">
              Small probec to saklh sn 2 asjfhhafz zs97
            </div>
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

export function ProjectsNew({ setSelected, selected }: any) {
  const [ref, inView, entry] = useInView({ threshold: 0.1 });
  const [asAnimationHappened, setAnimationHappened] = useState(false);
  const [tempSelected, setTempSelected] = useState<any>(null);
  const animation = useAnimation();
  const [filterBy, setFilterBy] = useState("all");

  const [projects, setProjects] = useState<any[]>(items);

  const projectsForGrid = projects.filter((project: any) =>
    filterBy !== "all" ? project.category === filterBy : project
  );

  useEffect(() => {
    if (inView) {
      animation.start("visible");
      setAnimationHappened(true);
    }
  }, [animation, inView]);

  useEffect(() => {
    if (selected !== null) {
      setTempSelected(selected);
    } else {
      setTimeout(() => {
        setTempSelected(selected);
      }, 500);
    }
  }, [selected]);

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
          {/* <ProjectFilter setFilterBy={setFilterBy} filterBy={filterBy} /> */}
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
            {projectsForGrid.map((item) => (
              <Card
                key={item.id}
                setSelected={setSelected}
                tempSelected={tempSelected}
                item={item}
              />
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
