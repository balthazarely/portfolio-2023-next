import { BiCopyright } from "react-icons/bi";
import { PageWrapper } from "../PageWrapper";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export function Footer() {
  return (
    <div className=" flex flex-col gap-4 bg-primary p-6 ">
      <PageWrapper className="flex flex-col items-center justify-between gap-1  sm:flex-row  ">
        <div className="flex flex-col gap-1">
          <div className="flex">
            <BiCopyright className="mr-1 text-white" />
            <div className="text-xs font-bold text-white">
              balthazar ely 2023
            </div>
          </div>
          <div className="flex justify-center gap-2 sm:justify-start">
            <a href="https://github.com/balthazarely" target="_BLANK">
              <BsGithub className="text-white" />
            </a>
            <a href="https://www.linkedin.com/in/balthazarely" target="_BLANK">
              <BsLinkedin className="text-white" />
            </a>
          </div>
        </div>
        <div className="font-base text-center text-xs text-white sm:text-right">
          <div className="mb-1">balthazar.elyj@gmail.com </div>
          <div>303-518-9973 </div>
        </div>
      </PageWrapper>
    </div>
  );
}
