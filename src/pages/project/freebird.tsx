import { ProjectWrapper } from "@/components/layout";
import { items } from "lib/content";

export default function Plowops({ setActiveSection }: any) {
  return (
    <ProjectWrapper
      project={items[5]}
      setActiveSection={setActiveSection}
    ></ProjectWrapper>
  );
}
