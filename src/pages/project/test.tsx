import { ProjectWrapper } from "@/components/layout";

export default function Test({ setActiveSection, items }: any) {
  return (
    <ProjectWrapper
      project={items}
      setActiveSection={setActiveSection}
    ></ProjectWrapper>
  );
}

export async function getServerSideProps() {
  const items = {
    id: 1,
    year: "2021",
    client: "NeoTreks",
    url: "/images/project-images/plow-ops.jpg",
    slug: "/plowops",
    otherImages: ["/images/project-images/plow-ops-1.jpg"],
    title: "Plow Ops",
    tagline: "innovative snow operations software",
    description:
      "PlowOps is one of the world's first snow plow tracking applications and it is sold to cities around the country. My involvement with the product included making the website, as well as developing the front end for the customer dashboard in which plows can be seen and communicated with in real time. The dashboard's frontend was developed with Angular and Material, while the website was created with GatbsyJS, TailwindCSS, and AWS serverless functions. This project was for NeoTreks Inc, a software company based in Castle Rock, CO.",
    tech: ["Angular 10", "GatsbyJs", "Material UI", "TailwindCSS"],
    category: "professional",
    github: null,
    link: "https://plowops.com/",
  };
  return {
    props: {
      items,
    },
  };
}
