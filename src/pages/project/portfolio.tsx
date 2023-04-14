import { ProjectWrapper } from "@/components/layout";
import { items } from "lib/content";

export default function Portfolio() {
  return <ProjectWrapper project={items[5]}></ProjectWrapper>;
}
