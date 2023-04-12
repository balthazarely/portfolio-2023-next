import React from "react";
import { motion } from "framer-motion";

export default function Modal({ selected, setSelected }: any) {
  if (!selected) {
    return <></>;
  }

  return (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0 z-50 cursor-pointer overflow-y-scroll "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mx-auto my-8 w-full max-w-[700px] cursor-default px-8"
      >
        <motion.div
          className="h-[600px] w-[800px]"
          layoutId={`card-${selected.id}`}
        >
          <img src={selected.url} />
        </motion.div>
      </div>
    </div>
  );
}
