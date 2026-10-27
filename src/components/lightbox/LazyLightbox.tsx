"use client";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
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

interface LazyLightboxProps {
  index: number;
  slides: SlideImage[];
  onClose: () => void;
}

const LazyLightbox = ({ index, slides, onClose }: LazyLightboxProps) => (
  <Lightbox
    plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails, Slideshow]}
    slideshow={{ autoplay: true, delay: 5000 }}
    captions={{ showToggle: true, descriptionTextAlign: "end" }}
    index={index}
    open={index >= 0}
    close={onClose}
    slides={slides}
  />
);

export default LazyLightbox;
