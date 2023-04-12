import { motion } from "framer-motion";

export default function Modal({ selected, setSelected }) {
  // if (!selected) {
  //   return <></>;
  // }
  // return (
  //   <div
  //     onClick={() => setSelected(null)}
  //     className="fixed inset-0 z-50 cursor-pointer overflow-y-scroll bg-black/50"
  //   >
  //     <div
  //       onClick={(e) => e.stopPropagation()}
  //       className="mx-auto my-8 w-full max-w-[700px] cursor-default px-8"
  //     >
  //       <motion.div layoutId={`card-${selected.id}`}>
  //         <img src={selected.url} />
  //       </motion.div>
  //     </div>
  //   </div>
  // );
}
