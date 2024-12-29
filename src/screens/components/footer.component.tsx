import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const FooterComponent = () => {
  return (
    <>
      <div className="h-24 pl-5 pr-5 pt-2 pb-2 grid-row-2 justify-center items-center">
        <p className="text-kriviBase text-md font-kriviCenturyFont flex justify-center">
          Subscribe to our newsletter
        </p>
        <div className="flex justify-center items-center">
          <div className="w-32 h-8 mt-2 flex items-center border rounded-sm border-kriviBase">
            <input
              placeholder="Email"
              className="w-24 p-2 bg-transparent font-kriviCourierFont text-sm"
            />
            <ArrowRightIcon className="h-4 w-6 text-kriviBase" />
          </div>
        </div>
        <div>
          <p>Instagram Icon</p>
        </div>
      </div>
      <div className="h-8 border-t border-kriviBase flex items-center justify-center">
        <p className="flex justify-center items-center text-kriviBase text-xs font-kriviCourierFont">
          Copyrights, Krivi
        </p>
      </div>
    </>
  );
};
