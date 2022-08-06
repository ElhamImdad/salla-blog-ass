import React from "react";
const CardWithSide=()=> {
  return (
    <div className="grid grid-cols-3 gap-1">
      <div className="">
        <img
          src={"https://www.path2usa.com/images/articles/workculture.jpg"}
          alt="car"
          className="object-cover h-full"
        ></img>
      </div>
      <div className="px-2 md:p-2 col-span-2">
        <div>
          <span className="h-2 md:h-5  border-primary-light border-solid border-r-2  ml-1"></span>
          <span className="text-xs md:text-sm test-black-neutrals">
            أفكار البزنس
          </span>
        </div>
        <p className="text-xs md:text-1xl text-black-900">ماهو مستقبل التجارة الالكترونية؟</p>
        <p className="text-xs md:text-sm text-gray-600">
          من المتوقع أن تزيد المبيعات ..
        </p>
        <p className="text-xs md:text-sm test-black-neutrals py-1">
          بواسطة عبدالله عاد
        </p>
      </div>
    </div>
  );
}

export default CardWithSide;
