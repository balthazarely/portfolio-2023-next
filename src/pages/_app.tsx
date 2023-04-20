import { Drawer, Footer, Layout, Navbar } from "@/components/layout";
import { ModalBackground, ProjectModal } from "@/components/UI";
import "@/styles/globals.scss";
import GlobalProvider from "lib/context";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className={poppins.className}>
      <GlobalProvider>
        <Layout route={router.route}>
          <div className="flex h-screen flex-col">
            <Navbar />
            <Drawer />
            <div className="flex flex-grow flex-col  ">
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </Layout>
        <ProjectModal />
        <ModalBackground />
        <Analytics />
      </GlobalProvider>
    </div>
  );
}
