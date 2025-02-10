import { ProductDetailTile } from "../components/product-detail-tile.component";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { products as helperProducts } from "./helper/products";
import { useKriviStore } from "../infra/store/store";
import { useEffect, useState } from "react";
import { ProductInfo } from "../infra/models/product-details.model";

export const ProductsContainerComponent = () => {
  // set these products in store
  const {
    setProducts: setStoreProducts,
    toggleProductsLoaded,
    processFlags,
    prodDetails,
  } = useKriviStore.getState();

  const [products, setProducts] = useState<ProductInfo[]>(prodDetails.products);

  useEffect(() => {
    let prods;
    if (!processFlags.isProductsLoaded) {
      prods = helperProducts;
    } else {
      prods = prodDetails.products;
    }
    toggleProductsLoaded(true);
    setProducts(prods);
    setStoreProducts(prods);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-full p-5">
      <div className="h-10 w-full flex flex-row">
        <div className="flex flex-1 active:scale-105 active:transition active:ease-in-out">
          <AdjustmentsHorizontalIcon className="h-6" />
          <p className="ml-2 font-kriviCenturyFont">Filter and sort</p>
        </div>
        <p className="font-kriviCenturyFont">{products.length} products</p>
      </div>
      <p className="italic text-xl font-bold font-kriviCenturyFont">Products</p>
      {products?.length ? (
        <div className="mt-3 flex justify-evenly flex-wrap">
          {products.map((product, index) => {
            return (
              <ProductDetailTile
                name={product.name}
                image={product.pictures[0]}
                altText={product.altText}
                listPrice={product.listPrice}
                salePrice={product.salePrice}
                id={product.id}
                isSaleActive={product.isSaleActive}
                key={index}
              />
            );
          })}
        </div>
      ) : (
        <p>LOADING...</p>
      )}
    </div>
  );
};
