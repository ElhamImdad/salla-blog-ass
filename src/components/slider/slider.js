import React, { useState, createRef } from "react";
import {SliderData} from "./SliderData";
import './Slider.scss';

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalIndexs = SliderData.length;

  const refs = SliderData.reduce((acc, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToIndex = i => {
    setCurrentIndex(i);
    refs[i].current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
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

  const arrowStyle =
    'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';
    
  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousIndex : nextIndex}
      className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
      style={{ top: "40%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? "◀" : "▶"}
      </span>
    </button>
  );

  return (
    <>
      <div className="flex justify-center w-screen w-full">
        <div className="relative w-full">
          <div className="slider">
            {sliderControl(true)}
            {SliderData.map(({img}, i) => (
              <div className="w-full flex-shrink-0" key={i} ref={refs[i]}>
                {console.log('curren i--> ', i)}
                {console.log(img)}
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}
            {sliderControl()}
          </div>
        </div>


      </div>
      <h1 className="text-3xl font-bold underline text-purple-900">
          Hello world!
        </h1>
        <p className="text-red-500 text-lg">react and tailwind</p>
    </>
  );
}

export default Slider;
