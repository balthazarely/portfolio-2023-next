import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    url: "/images/project-thumbnails/plow-ops.jpeg",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor",
    tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
  },
  {
    id: 2,
    url: "/images/project-thumbnails/plow-ops.jpeg",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor",
    tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
  },
  {
    id: 3,
    url: "/images/project-thumbnails/plow-ops.jpeg",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor",
    tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
  },
  {
    id: 4,
    url: "/images/project-thumbnails/plow-ops.jpeg",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor",
    tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
  },
  {
    id: 5,
    url: "/images/project-thumbnails/plow-ops.jpeg",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor",
    tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
  },
  {
    id: 6,
    url: "/images/project-thumbnails/plow-ops.jpeg",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor",
    tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
  },
  {
    id: 7,
    url: "/images/project-thumbnails/plow-ops.jpeg",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor",
    tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
  },
  {
    id: 8,
    url: "/images/project-thumbnails/plow-ops.jpeg",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor",
    tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
  },
  {
    id: 9,
    url: "/images/project-thumbnails/plow-ops.jpeg",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor",
    tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
  },
  {
    id: 10,
    url: "/images/project-thumbnails/plow-ops.jpeg",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor",
    tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
  },
  {
    id: 11,
    url: "/images/project-thumbnails/plow-ops.jpeg",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor",
    tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
  },
  {
    id: 12,
    url: "/images/project-thumbnails/plow-ops.jpeg",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor",
    tags: ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"],
  },
];

const Card = ({ setSelected, item }) => {
  return (
    <div className="mb-4 inline-block w-full">
      <motion.img
        whileHover={{
          scale: 1.025,
          transition: {
            duration: 0.2,
          },
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => {
          setSelected(item);
        }}
        layoutId={`card-${item.id}`}
        src={item.url}
        className="image-full w-full cursor-pointer bg-base-100 shadow-xl"
      />
      <div className="mt-2 flex flex-wrap">
        {item.tags.map((tag) => {
          return (
            <div
              className="badge mb-1 mr-1 border-none bg-base-300 text-zinc-600"
              key={tag}
            >
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function List({ setSelected }) {
  return (
    <div className="p-4">
      <h1 className="mb-8 text-center text-4xl font-bold">Your Images</h1>
      <div className="columns-2 gap-4 md:columns-3 xl:columns-4">
        {items.map((item) => (
          <Card key={item.id} setSelected={setSelected} item={item} />
        ))}
      </div>
    </div>
  );
}
