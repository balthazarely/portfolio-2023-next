import { LayoutGroup, motion } from "framer-motion";
import { useContext } from "react";
import { PageWrapper } from "../PageWrapper";
import { Cross as Hamburger } from "hamburger-react";
import { UIContext } from "lib/context";
import { DarkModeToggle } from "@/components/UI";
import Link from "next/link";
import { useRouter } from "next/router";

export function Navbar() {
  const router = useRouter();
  const { state, dispatch } = useContext(UIContext);
  const menuItems = ["about", "projects", "links", "contact"];

  const toggleDrawer = () => {
    if (!state.navDrawerOpen) {
      dispatch({ type: "OPEN_NAV_DRAWER" });
    } else {
      dispatch({ type: "CLOSE_NAV_DRAWER" });
    }
  };

  return (
    <div className={`fixed z-30 h-24 w-full bg-base-100 py-6 `}>
      <PageWrapper className="flex items-center justify-between">
        <div className="cursor-pointer text-3xl font-bold">
          <Link href="/">
            balthazar<span className="text-primary">.ely</span>
          </Link>
        </div>
        <div className="block  sm:hidden">
          <Hamburger toggle={toggleDrawer} />
        </div>
        <div className="hidden items-center gap-8 sm:flex">
          <LayoutGroup>
            <ul className="flex  items-center gap-8 sm:flex">
              {menuItems.map((section, i) => (
                <motion.li
                  animate
                  key={i}
                  className={`relative  cursor-pointer text-sm font-semibold`}
                >
                  {state.activeSection === section && (
                    <motion.div
                      layoutId="underline"
                      className={`absolute -bottom-1 h-1 w-full bg-primary underline`}
                    />
                  )}

                  <Link href={`/#${section}`}>{section}</Link>
                </motion.li>
              ))}
            </ul>
          </LayoutGroup>
          <DarkModeToggle />
        </div>
      </PageWrapper>
    </div>
  );
}
