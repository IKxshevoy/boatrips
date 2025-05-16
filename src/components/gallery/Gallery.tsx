"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Title } from "@/ui-kit/title/Title";
import Images from "./Images";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
  Slideshow,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { slides } from "./data";
import useIsMobile from "./isMobile";

const Gallery = () => {
  const [index, setIndex] = useState<number>(-1);
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setThumbnailIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const handleClick = () => setIndex(0);

  return (
    <>
      {isMobile ? (
        <div className={styles.mobileImageWrapper} onClick={handleClick}>
          <Title
            fontSize="2.5rem"
            title="Image Gallery"
            bgPicture="/bg_title.webp"
          />
          <img
            src={slides[thumbnailIndex].src}
            alt={slides[thumbnailIndex].title}
            className={styles.mobileThumbnail}
          />
        </div>
      ) : (
        <Images
          data={slides}
          onClick={(currentIndex) => setIndex(currentIndex)}
        />
      )}

      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails, Slideshow]}
        captions={{ showToggle: true, descriptionTextAlign: "end" }}
        slideshow={{ autoplay: true, delay: 5000 }}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
};

export default Gallery;
