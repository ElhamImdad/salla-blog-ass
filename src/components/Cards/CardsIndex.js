import React, {useState} from "react";
import { AiOutlineLeft } from "react-icons/ai";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import CardDetails from "./cardDetails/CardDetails";
import CardWithFooter from "./cardDetails/CardWithFooter";
import CardWithSide from "./cardDetails/CardWithSide";
import { SliderData as DataList } from "../slider/SliderData";
import Modal from "../modal/Modal";

const CardsIndex = () => {
  const [showModal, setShowModal] = useState(false);
  const checkList = (img, i) => {
    if (i < 3) {
      <CardDetails imgSrc={img} />;
    }
  };

  return (
    <>
      <div className="bg-white-light w-fill container mx-auto px-7 md:px-16 py-3 md:py-10 relative flex flex-col space-y-3 md:space-y-8">
        <div className="">
          <div className="flex justify-between pb-1 md:pb-4">
            <div className="text-base md:text-2xl font-normal">
              الأكثر قراءة
            </div>
            <div className="flex flex-row items-center text-sm md:text-base font-normal">
              <span className="pb-1" onClick={() => setShowModal(true)}>عرض المزيد</span>
              <i className="p-1 ">
                <AiOutlineLeft />
              </i>
              <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
              />
            </div>
          </div>
          <div className="lg:gap-4 lg:columns-3 sm:gap-6 md:gap-3 md:columns-2 sm:columns-1">
            {DataList.slice(0, 3).map(({ img }, i) => {
              return <CardDetails imgSrc={img} idx={i} />;
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 ">
          <div className="h-full w-full hidden md:flex">
            <CardWithFooter height1={"h-4/6"} height2={"h-2/6"} />
          </div>
          <div className="grid grid-cols-1 gap-y-2">
            <CardWithSide />
       
            <CardWithSide />
            <CardWithSide />
          </div>
        </div>

        <div className="border-t-2 border-gray-100"></div>

        <div className="relative ">
          <img
            src={"https://www.path2usa.com/images/articles/workculture.jpg"}
            alt="car"
            className="w-full h-60 md-h-80 object-cover rounded-md"
          ></img>
          <div className="absolute flex flex-item-center opacity-70 bg-black-light inset-0 rounded-md">
            <div className="text-white font-normal my-auto lg:w-1/2 m-2 md:mr-12">
              <div className="">
                <span className="h-3 md:h-5 border-primary-light border-solid border-r-2  mx-1"></span>
                <span className="text-xs md:text-sm test-black-neutrals">
                  أفكار البزنس
                </span>
              </div>
              <p className="text-base md:text-2xl py-2">
                ماهو مستقبل التجارة الالكترونية؟
              </p>
              <div className="text-sx md:text-base">
                من المتوقع أن تزيد المبيعات من 1ز3 تريلون عام 2014 الى 4ز5
                تريلون في عام 2021
              </div>
              <div className="text-xs md:text-sm py-2">بواسطة عبدالله عادل</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-row">
            <div className="overflow-hidden bg-white w-full rounded-md">
              <button className="text-xs md:text-lg px-1.5 md:px-2.5 py-1 md:py-1.5  underline underline-offset-8 ">
                الاكثر قراءة
              </button>
              <button className="text-xs md:text-lg px-1.5 md:px-2.5 py-1 md:py-1.5  text-gray-300">
                الاكثر قراءة
              </button>
              <button className="text-xs md:text-lg px-1.5 md:px-2.5 py-1 md:py-1.5 text-gray-300">
                الاكثر قراءة
              </button>
            </div>
           
              <button className="contact-icon rounded-icon mx-1 md:mx-3"><FiChevronLeft className="stroke-gray-600"/></button>
              <button className="contact-icon rounded-icon"><FiChevronRight className="stroke-gray-600"/></button>
       
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3  my-3">
            {DataList.map(({ img }, i) => (
              <CardWithFooter height1={"h-1/2"} height2={"h-1/2"} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsIndex;
