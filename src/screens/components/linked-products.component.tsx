import { useKriviStore } from "../infra/store/store";
import { ProductDetailTile } from "./product-detail-tile.component";

type LinkedProductsProps = {
  linkedProductIds: number[] | string[];
};

export const LinkedProductsComponent = (props: LinkedProductsProps) => {
  const { linkedProductIds } = props;
  const { products } = useKriviStore.getState().prodDetails;

  const linkedProductdetails = linkedProductIds.map((productId) =>
    products.find((product) => product.id === Number(productId))
  );

  return (
    <div className="p-2 bg-kriviBlack bg-opacity-5 rounded-md">
      <p className="font-kriviCenturyFont italic text-lg font-semibold">
        Linked products...
      </p>
      <div className="mt-3 flex flex-wrap">
        {linkedProductdetails.map((productDetails, index) => {
          return (
            productDetails && (
                <ProductDetailTile
                  id={productDetails.id}
                  name={productDetails.name}
                  image={productDetails.pictures[0]}
                  listPrice={productDetails.listPrice}
                  salePrice={productDetails.salePrice}
                  isSaleActive
                  altText={productDetails.altText}
                  key={index}
                />
            )
          );
        })}
      </div>
    </div>
  );
};
