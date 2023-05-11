import { ProjectWrapper } from "@/components/layout";
import { items } from "lib/content";

export default function Portfolio() {
  const index = 6;

  return (
    <ProjectWrapper
      project={items[index]}
      prevProjectObj={items[index - 1]}
      nextProjectObj={items[index + 1]}
    ></ProjectWrapper>
  );
}
