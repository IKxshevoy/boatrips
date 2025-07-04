import { FC } from "react";
import "./index.css";
import { Title } from "@/ui-kit/title/Title";

interface ImagesProps {
  data: {
    src: string;
    title: string;
    description: string;
  }[];
  onClick: (index: number) => void;
}

const Images: FC<ImagesProps> = (props) => {
  const { data, onClick } = props;

  const handleClickImage = (index: number) => {
    onClick(index);
  };

  return (
    <div className="images-wrapper">
      <Title title="Image Gallery" bgPicture="/bg_title.webp" />
      <div className="images-container">
        {data.map((slide, index) => (
          <div
            onClick={() => handleClickImage(index)}
            key={index}
            className="image"
          >
            <img src={slide.src} alt={slide.description} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
