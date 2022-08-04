import React from "react";
function CardWithFooter({height1, height2}) {
  return (
    <div className="flex flex-col h-full w-full ">
      <div className={(height2=='h-1/2'? `md:${height1}`: 'h-3/5')}>
        <img
          src={"https://www.path2usa.com/images/articles/workculture.jpg"}
          alt="what do you know about e-comm?"
          className="h-full w-full object-cover"
        ></img>
      </div>
      <div className={"p-2 bg-white " + (height2=='h-1/2'? `md:${height2}`:'h-2/5')}>
        <div className="py-1">
          <span className="h-5 border-primary-light border-solid border-r-2  mx-1"></span>
          <span className={"text-xs test-black-neutrals "+(height2=='h-1/2'? 'md:text-xs': "md:text-sm")}>
            أفكار البزنس
          </span>
        </div>
        <p className={height2=='h-1/2'? 'text-xs md:text-sm' : 'text-lg md:text-1xl'}>ماهو مستقبل التجارة الالكترونية؟</p>
        <p className="text-xs md:text-sm text-gray-neutrals">
          من المتوقع أن تزيد المبيعات ..
        </p>
        <p className={"text-xs test-black-neutrals py-1 "+(height2=='h-1/2'? 'md:text-xs': "md:text-sm")}>
          بواسطة عبدالله عاد
        </p>
      </div>
    </div>
  );
}

export default CardWithFooter;
