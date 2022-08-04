import React from "react";
import "../Card.scss";

function CardDetails({imgSrc, idx}) {
  return (
    <div className="rounded-md h-52 md:h-64 relative ">
      <img
        src={imgSrc}
        alt="most read"
        className="h-full w-full object-cover rounded-md"
      ></img>
      {console.log(idx)}
      <div class="absolute opacity-50 bg-black-light inset-0 rounded-md">
        <div class="text-white inset-x-3 bottom-2 absolute font-normal">
            <div className="text-base md:text-lg pt-1">التسويق</div>
            <div className="text-sm md:text-base pt-1">من المتوقع أن تزيد المبيعات من 1ز3 تريلون عام 2014 الى 4ز5 تريلون في عام 2021</div>
            <div className="text-xs md:text-sm pt-1">بواسطة عبدالله عادل</div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
