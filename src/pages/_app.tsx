import { Drawer, Layout, Navbar } from "@/components/layout";
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
      {/* <GlobalProvider> */}
      <Layout>
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Drawer />
        <Component setActiveSection={setActiveSection} {...pageProps} />
      </Layout>
      {/* </GlobalProvider> */}
    </div>
  );
}
