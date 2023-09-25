import { AboutUs } from '@/components/aboutUs/AboutUs';
import Footer from "@/components/footer/Footer";
import Slider from "@/components/slider/Slider";
import Questions from "@/components/questions/Questions";
import DestinationCards from '@/components/destinationCards/DestinationCards';
import Features from '@/components/features/Features';
import { AboutUsMap } from '@/components/aboutUs/aboutUsMap/AboutUsMap';
import Gallery from '@/components/gallery/Gallery';

export default function Home() {
  return (
    <>
      <Slider/>
      <AboutUs />
      <Features/>
      <DestinationCards/>
      <Gallery/>
      <Questions/>
      <AboutUsMap />
      <Footer />
    </>
  );
}