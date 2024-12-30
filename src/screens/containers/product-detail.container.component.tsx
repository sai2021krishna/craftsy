import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CarouselComponent from "../components/carousel.component";
import { useKriviStore } from "../infra/store/store";
import { products } from "./helper/products";

const ProductDetailsContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const { profile } = useKriviStore.getState();

  const [quantity, setQuantity] = useState(1);

  const productId = pathname.split("/")[2];

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

  const manageProductInCart = () => {
    const {
      cart,
      pushNewProductsToCart,
      updateExistingProductQuant,
      removeProductFromCart,
    } = useKriviStore.getState();

    const { products } = cart;

    const exitsingProduct = products.find(
      (product) => product.productId === Number(productId)
    );

    if (quantity === 0) {
      removeProductFromCart(Number(productId));
    } else if (!products.length || !exitsingProduct) {
      pushNewProductsToCart({ productId: Number(productId), quantity });
    } else {
      updateExistingProductQuant(Number(productId), quantity);
    }
  };

  const handleCartNBuyButtonClicks = (type: "CART" | "BUY") => {
    if (!profile?.email) {
      navigate("/session-creation", { state: { from: location.pathname } });
    } else {
      manageProductInCart();
      // update cart details in firestore
      if (type === "BUY") {
        navigate("/cart");
      }
    }
  };

  return (
    <div className="h-full">
      <div className="mt-5 w-full">
        <CarouselComponent />
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
          <button
            onClick={() => handleCartNBuyButtonClicks("CART")}
            className="w-full h-10 font-kriviCenturyFont border  active:bg-kriviBlack active:bg-opacity-10 active:transition active:ease-in-out active:scale-105"
          >
            Add to cart
          </button>
          <button
            onClick={() => handleCartNBuyButtonClicks("BUY")}
            className="w-full mt-3 h-10 font-kriviCenturyFont bg-kriviBlack text-kriviBase active:transition active:ease-in-out active:scale-105"
          >
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
