import React from "react";
function CardWithSide() {
  return (
    <div className="flex flex-row ">
      <div>
        <img
          src={"https://www.path2usa.com/images/articles/workculture.jpg"}
          alt="car"
          className="h-20 w-16 md:h-28 md:w-28 object-cover "
        ></img>
      </div>
      <div className="px-2 md:p-2 relative">
        <div>
          <span className="h-2 md:h-5  border-primary-light border-solid border-r-2  ml-1"></span>
          <span className="text-xs md:text-sm test-black-neutrals">
            أفكار البزنس
          </span>
        </div>
        <p className="text-xs md:text-1xl">ماهو مستقبل التجارة الالكترونية؟</p>
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

export default CardWithSide;
