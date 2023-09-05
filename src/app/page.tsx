"use client";
import { AboutUs } from '@/components/aboutUs/AboutUs';
import styles from "./page.module.scss";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Slider from "@/components/slider/Slider";
import TourCards from "@/components/tourCardsList/TourCardsList";
import Questions from "@/components/questions/Questions";
import DestinationCards from '@/components/destinationCards/DestinationCards';

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider/>
      <AboutUs />
      <TourCards/>
      <DestinationCards/>
      <Questions/>
      <Footer />
    </>
  );
}