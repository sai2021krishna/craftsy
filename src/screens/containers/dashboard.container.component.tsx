import React from "react";
import { CategoryComponent } from "../components/category.component";

export const DashboardContainerComponent = () => {
  return (
    <div className="p-5 h-full w-full">
      <div className="h-1/2 mb-5">
        <CategoryComponent
          imageName="candlepicture.png"
          categoryTitle="Candles"
          categoryDescription="Scented with prefection, Designed with love!"
        />
      </div>
      <div className="h-1/2">
        <CategoryComponent
          imageName="cardphotoshoot.png"
          categoryTitle="Wedding Cards"
          categoryDescription="For the special day your special ones have been waiting for!"
        />
      </div>
    </div>
  );
};
