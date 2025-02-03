import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CarouselComponent from "../components/carousel.component";
import { useKriviStore } from "../infra/store/store";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { LinkedProductsComponent } from "../components/linked-products.component";
import { QuantityRegulatorComponent } from "../components/qunatity-regulator.component";

const fragranceOptions = [
  "Cinnamon Vanilla",
  "Rose",
  "Cinnamon",
  "Cafe coffee",
  "lavender",
  "bubblegum",
  "Extensia",
];

const ProductDetailsContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const { profile } = useKriviStore.getState();
  const { products } = useKriviStore.getState().prodDetails;

  const [quantity, setQuantity] = useState(1);
  const [productsAddedInCart, setProductsAddedInCart] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFrag, setSelectedFrag] = useState("");
  const [fragranceError, setFragranceError] = useState(false);

  const productId = pathname.split("/")[2];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

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
      (product) =>
        product.productId === Number(productId) &&
        product.fargrance === selectedFrag
    );

    if (quantity === 0) {
      removeProductFromCart(Number(productId), selectedFrag);
    } else if (!products.length || !exitsingProduct) {
      pushNewProductsToCart({
        productId: Number(productId),
        quantity,
        fargrance: selectedFrag,
        customisation: "",
      });
    } else {
      updateExistingProductQuant(Number(productId), quantity, selectedFrag);
    }
  };

  const handleCartNBuyButtonClicks = (type: "CART" | "BUY") => {
    if (!profile?.email) {
      navigate("/session-creation", { state: { from: location.pathname } });
    } else {
      if (!selectedFrag) {
        setFragranceError(true);
        return;
      }
      manageProductInCart();
      if (type === "CART") {
        setProductsAddedInCart(true);
        setTimeout(() => {
          setProductsAddedInCart(false);
        }, 6000);
        setQuantity(1);
        setSelectedFrag("");
      }
      // update cart details in firestore
      else if (type === "BUY") {
        navigate("/cart");
      }
    }
  };

  return (
    <div className="h-full w-full">
      {productsAddedInCart && (
        <div className="h-16 mt-5 ml-3 mr-3 p-3 bg-kriviSuccess bg-opacity-10 border-2 border-kriviSuccess rounded-md flex items-center">
          <div className="h-10 w-10 flex justify-left items-center">
            <CheckCircleIcon className="h-8 text-kriviSuccess" />
          </div>
          <div className="">
            <p className="font-kriviCenturyFont text-base text-left font-semibold">
              Items added to cart
            </p>
          </div>
        </div>
      )}
      <div className="mt-5 w-full">
        <CarouselComponent carouselImages={productDetails?.pictures} />
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
          <div className="relative inline-block  w-2/3 h-6">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-2 py-1 bg-kriviBase border text-md flex justify-between items-center font-kriviCourierFont"
            >
              <span className={!selectedFrag ? "opacity-40" : ""}>
                {selectedFrag || "Fragrance"}
              </span>
              <span className="ml-2 active:transition active:ease-in-out active:scale-105">
                {isDropdownOpen ? "▲" : "▼"}
              </span>
            </button>
            {fragranceError && (
              <p className="font-kriviCourierFont text-sm text-kriviError font-semibold">
                Please select a fragrance.
              </p>
            )}

            {isDropdownOpen && (
              <ul className="absolute mt-2 w-full bg-kriviBase font-kriviCourierFont border z-10 trasition-transform duration-700 ease-in-out">
                {fragranceOptions.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSelectedFrag(option);
                      setFragranceError(false);
                      setIsDropdownOpen(false);
                    }}
                    className="px-2 py-1 active:transition active:ease-in-out active:scale-105"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-5">
          <QuantityRegulatorComponent
            isQuantityTextVisible={true}
            quantity={quantity}
            handleInputChange={handleInputChange}
            handleQuantityMutation={handleQuantityMutation}
            display="details"
          />
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
        {!!productDetails?.linkedProductsId?.length && (
          <div className="mt-5">
            <LinkedProductsComponent
              linkedProductIds={productDetails.linkedProductsId}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsContainer;
