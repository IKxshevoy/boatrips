"use client";
import styles from "./page.module.scss";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Slider from "@/components/slider/Slider";
import TourCards from "@/components/tourCardsList/TourCardsList";
import Questions from "@/components/questions/Questions";


export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <TourCards/>
      <Questions/>
      <Footer />
    </>
  );
}