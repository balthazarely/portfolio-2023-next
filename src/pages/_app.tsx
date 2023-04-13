import { Drawer, Layout, Navbar } from "@/components/layout";
import "@/styles/globals.scss";
import GlobalProvider, { UIContext } from "lib/context";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { useContext, useEffect, useState } from "react";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [sideBar, setSideBar] = useState(false);
  const { state, dispatch } = useContext(UIContext);

  useEffect(() => {
    console.log(state.navDrawerOpen);
  }, [state]);

  return (
    <div className={poppins.className}>
      <GlobalProvider>
        <Layout>
          <Navbar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <Drawer />
          <Component setActiveSection={setActiveSection} {...pageProps} />
        </Layout>
      </GlobalProvider>
    </div>
  );
}
