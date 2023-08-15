"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Button from "@/components/button/Button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import Footer from "@/components/footer/Footer";
import Slider from "@/components/slider/Slider";

export default function Home() {
  

  return (
    <>
      <Navbar />
      <Slider/>
      <Footer/>
    </>
  );
}
