import { BiCopyright } from "react-icons/bi";
import { PageWrapper } from "../PageWrapper";

export function Footer() {
  return (
    <div className=" flex gap-1 bg-primary p-6 ">
      <PageWrapper className="flex flex-col items-center justify-between gap-1  sm:flex-row">
        <div className="flex">
          <BiCopyright className="mr-1 text-white" />
          <div className="text-xs font-bold text-white">balthazar ely 2023</div>
        </div>
        <div className="font-base text-center text-xs text-white sm:text-right">
          <div className="mb-1">balthazar.elyj@gmail.com </div>
          <div>303-518-9973 </div>
        </div>
      </PageWrapper>
    </div>
  );
}
