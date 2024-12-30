import React from "react";
import { useKriviStore } from "../infra/store/store";
import { products as helperProducts } from "./helper/products";

function CartContainer() {
  const { cart } = useKriviStore.getState();

  const products = cart.products;

  return (
    <div className="p-5">
      <p className="italic font-kriviCenturyFont text-2xl font-bold">Cart</p>
      {products.length && (
        <div className="mt-5">
          {products.map((product) => {
            const productDetail = helperProducts.find(
              (helperProduct) => helperProduct.id === product.productId
            );
            return (
              <div className="h-20 w-full p-3 border-b flex justify-between">
                <p className="font-kriviCenturyFont font-bold">
                  {productDetail?.name}
                </p>
                <p className="font-kriviCourierFont text-lg font-bold">
                  <span className="text-sm font-kriviCenturyFont">Qty. </span>
                  {product.quantity}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CartContainer;
