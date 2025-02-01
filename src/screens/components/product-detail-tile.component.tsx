import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ImageComponent } from "./image.component";

type ProductDetailsProps = {
  name: string;
  image: string;
  altText: string;
  listPrice: string;
  salePrice: string;
  id: number;
  isSaleActive: boolean;
};

export const ProductDetailTile = (props: ProductDetailsProps) => {
  const { id, name, image, altText } = props;
  const { listPrice, salePrice, isSaleActive } = props;

  const navigate = useNavigate();

  const handleProductClick = useCallback(
    (id: number) => {
      navigate(`/products/${id}`);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id]
  );
  return (
    <div
      className="p-2 h-60 w-1/2 flex-2 active:bg-kriviBlack active:bg-opacity-10 active:transition active:ease-in-out active:scale-105"
      onClick={() => handleProductClick(id)}
    >
      <div>
        <ImageComponent src={`/${image}`} altText={altText} classes="border-none rounded-md"/>
      </div>
      <p className="italic mt-3 text-md font-kriviCenturyFont font-semibold">
        {name}
      </p>
      {isSaleActive && (
        <p className="line-through text-sm font-light font-kriviCourierFont ">
          Rs. {listPrice}
        </p>
      )}
      <p className="font-kriviCourierFont text-md font-light">
        Rs. {salePrice}
      </p>
    </div>
  );
};
