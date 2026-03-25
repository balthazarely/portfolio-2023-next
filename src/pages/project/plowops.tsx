import { ProjectWrapper } from "@/components/layout";
import { items } from "lib/content";

export default function Plowops() {
  const index = 1;

  return (
    <ProjectWrapper
      project={items[index]}
      prevProjectObj={null}
      nextProjectObj={items[index + 1]}
    ></ProjectWrapper>
  );
}
