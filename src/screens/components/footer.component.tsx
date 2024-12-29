import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const FooterComponent = () => {
  return (
    <>
      <div className="h-48 pl-5 pr-5 pt-2 pb-2 flex flex-col justify-center items-center">
        <p className="text-kriviBase text-xl font-bold font-kriviCenturyFont flex justify-center">
          Subscribe to our newsletter
        </p>
        <div className="mt-5 flex justify-center items-center">
          <div className="w-40 h-8 mt-2 flex items-center border rounded-sm border-kriviBase">
            <input
              placeholder="Email"
              className="w-32 p-2 bg-transparent font-kriviCourierFont text-sm"
            />
            <ArrowRightIcon className="h-4 w-6 text-kriviBase active:transition active:ease-in-out active:scale-125" />
          </div>
        </div>
        <div className="mt-5">
          <img src="/instagram.png" alt="instagram" className="h-6 w-6 bg-kriviBase" />
        </div>
      </div>
      <div className="h-12 border-t border-kriviBase flex items-center justify-center">
        <p className="flex justify-center items-center text-kriviBase text-xs font-kriviCourierFont">
          Copyrights, Krivi
        </p>
      </div>
    </>
  );
};
