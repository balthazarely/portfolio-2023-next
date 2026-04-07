import { ProjectWrapper } from "@/components/layout";
import { items } from "lib/content";

export default function Branding() {
  const index = items.findIndex((item) => item.slug === "/brochures");
  const prevProjectObj = index > 0 ? items[index - 1] : null;
  const nextProjectObj = index < items.length - 1 ? items[index + 1] : null;

  return (
    <ProjectWrapper
      project={items[index]}
      prevProjectObj={prevProjectObj}
      nextProjectObj={nextProjectObj}
    ></ProjectWrapper>
  );
}
