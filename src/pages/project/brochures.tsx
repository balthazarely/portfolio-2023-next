import { ProjectWrapper } from "@/components/layout";
import { items } from "lib/content";

export default function Brochures() {
  const index = 11;

  return (
    <ProjectWrapper
      project={items[index]}
      prevProjectObj={items[index - 1]}
      nextProjectObj={null}
    ></ProjectWrapper>
  );
}
