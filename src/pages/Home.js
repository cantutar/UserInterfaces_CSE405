import ContentPage from "../components/ContentPage/Contentpage";
import CarouselSlider from "../components/UI/Carousel/CarouselSlider";
import Footer from "../components/UI/Footers/Footer";

export default function Home(props) {
  return (
    <>
      <CarouselSlider />
      <ContentPage />
      <Footer />
    </>
  );
}
