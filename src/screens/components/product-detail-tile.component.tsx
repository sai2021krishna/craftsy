import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const ProductDetailTile = (props: any) => {
  const { id, name, image, altText } = props;
  const { listPrice, salePrice } = props;

  const navigate = useNavigate();

  const handleProductClick = useCallback(
    (id: number) => {
      navigate(`:${id}`);
    },
    [id]
  );
  return (
    <div
      className="p-2 h-60 w-1/2 flex-2 active:bg-kriviBlack active:bg-opacity-10 active:transition active:ease-in-out active:scale-105"
      onClick={() => handleProductClick(id)}
    >
      <div>
        <img src={image} alt={altText} className="border-none rounded-md" />
      </div>
      <p className="italic text-md font-kriviCenturyFont font-semibold">
        {name}
      </p>
      <p className="line-through text-sm font-light font-kriviCourierFont ">
        Rs. {listPrice}
      </p>
      <p className="font-kriviCourierFont text-md font-light">
        Rs. {salePrice}
      </p>
    </div>
  );
};
