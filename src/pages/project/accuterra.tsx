import { ProjectWrapper } from "@/components/layout";
import { items } from "lib/content";

export default function Accuterra() {
  const index = 2;

  return (
    <ProjectWrapper
      project={items[index]}
      prevProjectObj={items[index - 1]}
      nextProjectObj={items[index + 1]}
    ></ProjectWrapper>
  );
}
