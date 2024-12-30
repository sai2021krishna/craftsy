import React from "react";

const CarouselComponent = () => {
  return (
    <div
      id="default-carousel"
      className="relative w-full p-4"
      data-carousel="active"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="duration-700 ease-in-out" data-carousel-item>
          <img
            src="/coldplay-candle.jpeg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <div className="duration-700 ease-in-out" data-carousel-item>
          <img
            src="/espresso-short.jpeg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <div className="duration-700 ease-in-out" data-carousel-item>
          <img
            src="/sunny-blossom.jpeg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
      </div>
    </div>
  );
};

export default CarouselComponent;
