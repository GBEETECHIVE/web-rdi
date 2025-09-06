import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageGallery from "@/components/sections/gallery/ImageGallery";
import NewsEvents from "@/components/sections/news-events/NewsEvents";

export default function Index() {
  return (
    <>
      <Header/>
      <NewsEvents/>
      <ImageGallery/>
      <Footer/>
    </>
  );
}