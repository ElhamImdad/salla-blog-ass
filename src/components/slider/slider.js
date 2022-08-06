import React, { useState, createRef, useEffect } from "react";
import { SliderData } from "./SliderData";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import "./Slider.scss";

const Slider=()=> {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalIndexs = SliderData.length;

  const refs = SliderData.reduce((acc, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToIndex = (i) => {
    setCurrentIndex(i);
    refs[i].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const nextIndex = () => {
    if (currentIndex >= totalIndexs - 1) {
      scrollToIndex(0);
    } else {
      scrollToIndex(currentIndex + 1);
    }
  };

  const previousIndex = () => {
    if (currentIndex === 0) {
      scrollToIndex(totalIndexs - 1);
    } else {
      scrollToIndex(currentIndex - 1);
    }
  };

  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousIndex : nextIndex}
      className={`rounded-icon absolute text-white bg-black opacity-75 top-[40%] ${
        isLeft ? "md:left-24 left-10" : "md:right-24 right-10"
      }`}
    >
      <span>{isLeft ? <FiChevronLeft/> : <FiChevronRight/>}</span>
    </button>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // nextIndex();
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="flex justify-center w-screen relative">
          <div className="slider">
            {sliderControl(true)}
            {SliderData.map(({ img }, i) => (
              <div className="w-full flex-shrink-0" key={i} ref={refs[i]}>
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt="مركز المدونة"
                />
              
              </div>
            ))}
            {/* <h1 className="items-center justify-center text-1xl font-bold sm:text-2xl text-primary-light">
                  مركز المدونة
                </h1> */}
            {sliderControl()}
          </div>
      </div>
    </>
  );
}

export default Slider;
