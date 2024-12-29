import { useParams } from "react-router-dom";
import { ProductDetailTile } from "../components/product-detail-tile.component";
import { useKriviStore } from "../infra/store/store";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

export const ProductsContainerComponent = () => {
  return (
    <div className="h-full p-5">
      <div className="h-10 w-full flex flex-row">
        <div className="flex flex-1 active:scale-105 active:transition active:ease-in-out">
          <AdjustmentsHorizontalIcon className="h-6" />
          <p className="ml-2 font-kriviCenturyFont">Filter and sort</p>
        </div>
        <p className="font-kriviCenturyFont">4 products</p>
      </div>
      <p className="italic text-xl font-bold font-kriviCenturyFont">Products</p>
      <div className="mt-3 flex flex-wrap">
        <ProductDetailTile
          name="Lights will guide you home"
          image="coldplay-candle.jpeg"
          altText="Coldplay Candle"
          listPrice="700.00"
          salePrice="650.00"
          id={1}
        />
        <ProductDetailTile
          name="Woodland blues"
          image="woodland-blues.jpeg"
          altText="Woodland Blues Candle"
          listPrice="800.00"
          salePrice="700.00"
          id={4}
        />
        <ProductDetailTile
          name="Espresso Short"
          image="espresso-short.jpeg"
          altText="Espresso Short Candle"
          listPrice="635.00"
          salePrice="585.00"
          id={2}
        />
        <ProductDetailTile
          name="Sunny Blossom"
          image="sunny-blossom.jpeg"
          altText="Sunny Blossom Candle"
          listPrice="585.00"
          salePrice="550.00"
          id={3}
        />
      </div>
    </div>
  );
};
