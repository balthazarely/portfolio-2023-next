import { ProjectWrapper } from "@/components/layout";
import { items } from "lib/content";

export default function Credera() {
  const index = 0;

  return (
    <ProjectWrapper
      project={items[index]}
      prevProjectObj={items[index - 1]}
      nextProjectObj={null}
    ></ProjectWrapper>
  );
}
