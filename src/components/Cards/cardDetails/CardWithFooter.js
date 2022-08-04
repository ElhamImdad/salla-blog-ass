import React from "react";
function CardWithFooter() {
  return (
    <div className="flex flex-col h-full w-full ">
      <div className="h-4/6">
        <img
          src={"https://www.path2usa.com/images/articles/workculture.jpg"}
          alt="what do you know about e-comm?"
          className="h-full w-full object-cover"
        ></img>
      </div>
      <div className="p-4 h-2/6 bg-white ">
        <div className="py-1">
          <span className="h-5  border-primary-light border-solid border-r-2  mx-1"></span>
          <span className="text-xs md:text-sm test-black-neutrals">
            أفكار البزنس
          </span>
        </div>
        <p className="text-lg md:text-1xl">ماهو مستقبل التجارة الالكترونية؟</p>
        <p className="text-xs md:text-sm text-gray-neutrals">
          من المتوقع أن تزيد المبيعات ..
        </p>
        <p className="text-xs md:text-sm test-black-neutrals py-1">
          بواسطة عبدالله عاد
        </p>
      </div>
    </div>
  );
}

export default CardWithFooter;
