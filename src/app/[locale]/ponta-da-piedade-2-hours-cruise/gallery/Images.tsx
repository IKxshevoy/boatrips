import { FC, useEffect, useState } from "react";
import "./index.css";
import { Title } from "@/ui-kit/title/Title";
import styles from "../styles.module.scss";
import useIsMobile from "@/components/gallery/isMobile";
import { useTranslations } from "next-intl";

interface ImagesProps {
  data: {
    src: string;
    title: string;
    description: string;
  }[];
  onClick: (index: number) => void;
}

const Images: FC<ImagesProps> = ({ data, onClick }) => {
  const t = useTranslations("gallery");
  const isMobile = useIsMobile();
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setThumbnailIndex((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile, data.length]);

  const handleClickImage = () => {
    onClick(thumbnailIndex);
  };

  return (
    <div className="images-wrapper">
      {isMobile ? (
        <h2 className={styles.title}>{t("image_gallery")}</h2>
      ) : (
        <Title title={t("image_gallery")} bgPicture="/bg_title.webp" />
      )}
      <div className="images-container">
        {isMobile ? (
          <div className="image" onClick={handleClickImage}>
            <img
              src={data[thumbnailIndex].src}
              alt={data[thumbnailIndex].description}
              loading="lazy"
            />
          </div>
        ) : (
          data.map((slide, index) => (
            <div onClick={() => onClick(index)} key={index} className="image">
              <img src={slide.src} alt={slide.description} loading="lazy" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Images;
