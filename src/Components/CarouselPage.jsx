import React, { useRef } from "react";
import Carousel from "./Ui/Carousel";

function CarouselPage() {
  const carouselRef = useRef(null);

  const items = [
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600",
    "https://plus.unsplash.com/premium_photo-1661301084402-1a0452b5850e?w=600"
  ];

  return (
    <>
      <div className="w-full h-96 mt-10">
        <Carousel
          ref={carouselRef}
          items={items.map((src, i) => (
            <div key={i} className="h-1/2 w-screen flex justify-center">
              <img
                src={src}
                alt={`slide-${i}`}
                className="h-full w-full"
              />
            </div>
          ))}
        />
      </div>

{/* 
      <div className="flex gap-3 mt-4 justify-center">
        <button
          onClick={() => carouselRef.current?.prev()}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          Prev
        </button>

        <button
          onClick={() => carouselRef.current?.next()}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          Next
        </button>

        <button
          onClick={() => carouselRef.current?.goTo(2)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go to 3
        </button>
      </div> */}
    </>
  );
}

export default CarouselPage;
