import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Lights will Guide You Home",
    description: `A cinnamon scented candle inspired by Coldplay's Fix you.
            \n
            100% Soy wax.
            \n
            Hand-poured with Love.`,
    listPrice: "700.00",
    salePrice: "650.00",
    isSaleActive: true,
  },
  {
    id: 2,
    name: "Espresso Short",
    description: `A cinnamon scented candle inspired by Sabrina Crapenter.
            <br />
            100% Soy wax.
            <br />
            Hand-poured with Love.`,
    listPrice: "635.00",
    salePrice: "585.00",
    isSaleActive: true,
  },
  {
    id: 3,
    name: "Sunny Blossom",
    description: `Warmth of sun in the shape of a blossom.
            <br />
            100% Soy wax candle.
            <br />
            Hand-poured with Love in cinnamon vanilla fragrance.`,
    listPrice: "585.00",
    salePrice: "550.00",
    isSaleActive: true,
  },
  {
    id: 4,
    name: "Woodland Blues",
    description: `A rose scented soy wax candle poured with love in a hand crafted wooden doe.`,
    listPrice: "800.00",
    salePrice: "750.00",
    isSaleActive: true,
  },
];

const ProductDetailsContainer = () => {
  const location = useLocation();
  const { pathname } = location;

  const [quantity, setQuantity] = useState(1);

  const productId = pathname.split("/")[2]?.split(":")[1];

  const productDetails = products.find(
    (product) => product.id === Number(productId)
  );

  const handleQuantityMutation = (type: "-" | "+") => {
    if (type === "+") {
      setQuantity((quantity) => quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity((quantity) => quantity - 1);
      }
    }
  };

  const handleInputChange = (e: any) => {
    e.preventDefault();
    const value = e.target.value;
    if (Number.isNaN(Number(value))) {
      setQuantity(1);
    } else {
      setQuantity(Number(value));
    }
  };

  return (
    <div className="h-full">
      <div className="mt-5 w-full">
        <img
          src="/coldplay-candle.jpeg"
          alt="coldplay candle"
          className="p-3"
        />
        <div className="mt-3 flex justify-center">
          <p className="font-kriviCenturyFont text-sm"> 1/2 </p>
        </div>
      </div>
      <div className="p-5">
        <p className="font-kriviCourierFont text-xs opacity-50">KRIVI</p>
        <p className="font-kriviCenturyFont text-2xl font-bold">
          {productDetails?.name}
        </p>
        <div className="w-2/3 mt-5 flex justify-between">
          {productDetails?.isSaleActive && (
            <p className="line-through font-kriviCourierFont text-sm">
              Rs. {productDetails?.listPrice}
            </p>
          )}
          <p className="font-kriviCourierFont text-sm">
            Rs. {productDetails?.salePrice}
          </p>
          {productDetails?.isSaleActive && (
            <p className="w-12 font-kriviCourierFont text-sm border opacity-30 rounded-xl text-center">
              Sale
            </p>
          )}
        </div>
        <div className="mt-5">
          <p className="font-kriviCourierFont text-md opacity-70">Quantity</p>
          <div className="mt-2 w-32 h-8 flex justify-center border">
            <p
              className="w-10 font-kriviCourierFont text-xl text-center active:transition active:ease-in-out active:scale-105"
              onClick={() => handleQuantityMutation("-")}
            >
              -
            </p>
            <input
              type="text"
              value={quantity}
              className="w-10 font-kriviCourierFont text-xl text-center"
              onChange={handleInputChange}
            />
            <p
              className="w-10 font-kriviCourierFont text-xl text-center active:transition active:ease-in-out active:scale-105"
              onClick={() => handleQuantityMutation("+")}
            >
              +
            </p>
          </div>
        </div>
        <div className="mt-5">
          <button className="w-full h-10 font-kriviCenturyFont border  active:bg-kriviBlack active:bg-opacity-10 active:transition active:ease-in-out active:scale-105">
            Add to cart
          </button>
          <button className="w-full mt-3 h-10 font-kriviCenturyFont bg-kriviBlack text-kriviBase active:transition active:ease-in-out active:scale-105">
            Buy it now
          </button>
        </div>
        <div className="mt-5">
          <p className="font-kriviCourierFont">{productDetails?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsContainer;
