import React, { useEffect, useState } from "react";
import { ImageComponent } from "./image.component";

type CarouselComponentProps = {
  carouselImages?: string[];
};

const CarouselComponent = (props: CarouselComponentProps) => {
  const { carouselImages } = props;
  const [displayImageIndex, setDisplayImageIndex] = useState(0);

  useEffect(() => {
    if (carouselImages?.length && carouselImages?.length > 1) {
      const interval = setInterval(() => {
        setDisplayImageIndex(
          (previousImageIndex) =>
            (previousImageIndex + 1) % carouselImages.length
        );
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [carouselImages?.length]);

  return (
    <div id="default-carousel" className="relative w-full h-64 md:h-96">
      <div
        className="w-full h-full flex trasition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${displayImageIndex * 100}%)` }}
      >
        {carouselImages?.length &&
          carouselImages.map((src, index) => (
            <img
              key={index}
              src={`/${src}`}
              className="w-full h-64 p-4 object-cover flex-shrink-0"
              alt="..."
            />
          ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
