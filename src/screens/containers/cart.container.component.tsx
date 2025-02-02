import React, { useEffect, useState } from "react";
import { useKriviStore } from "../infra/store/store";
import { products as helperProducts } from "./helper/products";
import { useNavigate } from "react-router-dom";
import { ProductInfo } from "../infra/models/product-details.model";
import { TrashIcon } from "@heroicons/react/24/outline";
import { ImageComponent } from "../components/image.component";

function CartContainer() {
  const navigate = useNavigate();
  const cart = useKriviStore((state) => state.cart);
  const {
    processFlags,
    prodDetails,
    setProducts: setStoreProducts,
    removeProductFromCart,
  } = useKriviStore.getState();
  const [products, setProducts] = useState<ProductInfo[]>(prodDetails.products);

  useEffect(() => {
    if (!processFlags.isProductsLoaded) {
      setProducts(helperProducts);
      setStoreProducts(helperProducts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteProductFromCart = (productId: number, fragrance: string) => {
    removeProductFromCart(productId, fragrance);
  };

  return (
    <div className="p-5">
      <p className="italic font-kriviCenturyFont text-2xl font-bold">Cart</p>
      {cart.products.length ? (
        <>
          <div className="mt-5">
            {cart.products.map((cartProduct) => {
              const productDetail = products.find(
                (product) => product.id === cartProduct.productId
              );
              return (
                <div className="h-28 w-full p-3 border-b flex justify-between items-center">
                  <div className="w-1/3 p-2 flex justify-center" onClick={() => {navigate(`/products/${productDetail?.id}`)}}>
                    <ImageComponent
                      src={`/${productDetail?.pictures[0]}`}
                      altText={productDetail?.altText ?? ""}
                      classes="h-12"
                    />
                  </div>

                  <div className="w-2/3 p-2">
                    <p className="font-kriviCenturyFont font-bold">
                      {productDetail?.name}
                    </p>
                    <p className="font-kriviCourierFont text-sm">
                      {cartProduct.fargrance}
                    </p>
                    <p className="font-kriviCourierFont text-sm font-semibold">
                      Qty.
                      {cartProduct.quantity}
                    </p>
                  </div>
                  <div
                    onClick={() =>
                      handleDeleteProductFromCart(productDetail?.id as number, cartProduct.fargrance)
                    }
                    className="w-1/3 flex justify-center items-center active:transition active:ease-in-out active:scale-105"
                  >
                    <TrashIcon className="h-6 w-6 text-kriviError" />
                  </div>
                </div>
              );
            })}
          </div>
          <button className="h-12 w-full mt-3 font-kriviCourierFont text-lg text-kriviBase bg-kriviBlack active:transition active:ease-in-out active:scale-105 rounded-sm">
            Proceed to buy
          </button>
        </>
      ) : (
        <div className="mt-5">
          <p className="font-kriviCourierFont text-lg font-bold">
            Nothing in you cart yet!
          </p>
          <button
            onClick={() => {
              navigate("/products");
            }}
            className="h-12 w-full mt-3 bg-kriviBlack font-kriviCourierFont text-lg text-kriviBase active:scale-105 active:trasition active:ease-in-out rounded-sm"
          >
            Browse products
          </button>
        </div>
      )}
    </div>
  );
}

export default CartContainer;
