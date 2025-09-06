export const dynamic = "force-dynamic";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DownloadPDF from "@/components/sections/downloads/DownloadPDF";

export default function Index() {
  return (
    <>
      <Header/>
      <DownloadPDF/>
      <Footer/>
    </>
  );
}