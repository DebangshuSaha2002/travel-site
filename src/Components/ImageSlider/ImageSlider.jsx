import React, { useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const ImageSlider = () => {
  const slides = [
    {
      url: "https://images.pexels.com/photos/2532439/pexels-photo-2532439.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "lobster",
    },
    {
      url: "https://images.pexels.com/photos/3620705/pexels-photo-3620705.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Sushi",
    },
    {
      url: "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Pasta",
    },
    {
      url: "https://images.unsplash.com/photo-1508170754725-6e9a5cfbcabf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      title: "Salmon",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = index === slides.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };

  const gotoSlide = (slideIndex) => {
    setIndex(slideIndex);
  };
  return (
    <div className="max-w-[1100px] h-[600px] w-full m-auto px-4 py-16 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[index].url})` }}
      ></div>
      {/* Left Arrow */}
      <div className="absolute top-[50%] -translate-x-0  left-5 text-2xl rounded-full group-hover:bg-black/20 text-white cursor-pointer font-bold z-30">
        <BsChevronCompactLeft onClick={prevSlide} size={20} />
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[50%] -translate-x-0  right-5 text-2xl rounded-full group-hover:bg-black/20 cursor-pointer text-white">
        <BsChevronCompactRight onClick={nextSlide} size={20} />
      </div>

      <div className="top-4 flex justify-center py-2 ">
        {slides.map((slide, slideIndex) => (
          <div
            className="cursor-pointer"
            key={slideIndex}
            onClick={() => gotoSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
