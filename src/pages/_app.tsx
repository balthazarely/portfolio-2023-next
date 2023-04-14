import { Drawer, Footer, Layout, Navbar } from "@/components/layout";
import { ModalBackground, ProjectModal } from "@/components/UI";
import "@/styles/globals.scss";
import GlobalProvider from "lib/context";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div className={poppins.className}>
      <GlobalProvider>
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Drawer />
        <Layout>
          <div className="flex h-screen flex-col ">
            {/* <div className="flex-grow "> */}
            <Component setActiveSection={setActiveSection} {...pageProps} />
            {/* </div> */}
            <div className="flex flex-col gap-4">
              <Footer />
            </div>
          </div>
        </Layout>
        <ProjectModal />
        <ModalBackground />
      </GlobalProvider>
    </div>
  );
}
