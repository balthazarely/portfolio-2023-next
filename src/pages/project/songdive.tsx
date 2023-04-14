import { ProjectWrapper } from "@/components/layout";
import { items } from "lib/content";

export default function Plowops({ setActiveSection }: any) {
  return (
    <ProjectWrapper
      project={items[3]}
      setActiveSection={setActiveSection}
    ></ProjectWrapper>
  );
}
