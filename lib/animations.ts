export const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const containerInnerElements = {
  hidden: {
    y: 30,
    //   x: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.35,
    },
  },
};
export const imageContainer = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "spring",
      bounce: 0.35,
    },
  },
};

export const projectContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, delayChildren: 0.2, staggerChildren: 0.1 },
  },
};

export const projectElements = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// Basic Section Parent Animation
// export const sectionContainer = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//   },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       bounce: 0.15,
//       duration: 1,
//     },
//   },
// };
