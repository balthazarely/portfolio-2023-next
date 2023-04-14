import { Drawer, Footer, Layout, Navbar } from "@/components/layout";
import { ModalBackground, ProjectModal } from "@/components/UI";
import "@/styles/globals.scss";
import GlobalProvider from "lib/context";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className={poppins.className}>
      <GlobalProvider>
        <Navbar />
        <Drawer />
        <Layout route={router.route}>
          <Component {...pageProps} />
          <Footer />
        </Layout>
        <ProjectModal />
        {/* <ModalBackground /> */}
      </GlobalProvider>
    </div>
  );
}
