import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import CardDetails from "./cardDetails/CardDetails";
import {SliderData as DataList} from "../slider/SliderData";

function CardsIndex() {
  const checkList = (img, i) => {
    if (i < 3 ) {
      <CardDetails imgSrc={img}/>
    }
  }

  return (
    <>
      <div className="bg-white-light w-fill container mx-auto px-7 py-3 md:px-16 md:py-10 relative flex flex-col">
        <div className="py-5">
          <div className="flex justify-between pb-4">
            <div className="text-base md:text-2xl font-normal">
              الأكثر قراءة
            </div>
            <div className="flex flex-row items-center text-sm md:text-base font-normal">
              <span className="pb-1">عرض المزيد</span>
              <i className="p-1 ">
                <AiOutlineLeft />
              </i>
            </div>
          </div>
          <div className="lg:gap-4 lg:columns-3 md:gap-3 md:columns-2 sm:columns-1">
            {
              DataList.slice(0, 3).map(({ img }, i)  => {
                return <CardDetails imgSrc={img} idx={i} />
            })
            }
          </div>
        </div>

        <div className="py-5 md:gap-3 md:columns-2 sm:columns-1 h-1/4">
          <div>
            b1
          </div>
          <div>
            b2
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsIndex;
