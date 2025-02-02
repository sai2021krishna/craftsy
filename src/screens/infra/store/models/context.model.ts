import { Category } from "../../models/category-detail.model";
import { ProductInfo } from "../../models/product-details.model";

export type ScreenTypes =
  | "DASHBOARD"
  | "PRODUCTS"
  | "PRODUCTDETAILS"
  | "CONTACTUS";

export type Categories = {
  catDetails: {
    categories: Category[];
  };
  setCategories: (categories: any) => void;
  resetCategories: () => void;
};

export type Products = {
  prodDetails: {
    products: ProductInfo[];
  };
  setProducts: (products: any) => void;
  resetProducts: () => void;
};

export type ProcessFlags = {
  processFlags: {
    isLoaderActive: boolean;
    isErrorScreenActive: boolean;
    isProductsLoaded: boolean
  };
  toggleErrorScreenActive: (isErrorScreenActive: boolean) => void;
  toggleLoaderActive: (isLoaderActive: boolean) => void;
  toggleProductsLoaded: (isProductsLoaded: boolean) => void;
  resetProcessFlags: () => void;
};

export type CartProduct = { productId: number; fargrance: string; quantity: number; customisation: string };

export type CartDetails = {
  cart: {
    products: CartProduct[];
  };
  pushNewProductsToCart: (product: CartProduct) => void;
  updateExistingProductQuant: (productId: number, quantity: number) => void;
  removeProductFromCart: (productId: number) => void;
  resetCart: () => void;
};

export type ProfileDetails = {
  profile: {
    email: string;
  };
  setEmail: (email: string) => void;
  resetProfile: () => void;
};
