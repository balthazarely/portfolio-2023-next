import { ProjectWrapper } from "@/components/layout";
import { items } from "lib/content";

export default function Privett() {
  const index = 8;

  return (
    <ProjectWrapper
      project={items[index]}
      prevProjectObj={items[index - 1]}
      nextProjectObj={items[index + 1]}
    ></ProjectWrapper>
  );
}
