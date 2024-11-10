import { Category } from "../../models/category-detail.model";
import { Product } from "../../models/product-details.model";

export type ScreenTypes = 'DASHBOARD' | 'PRODUCTS' | 'PRODUCTDETAILS' | 'CONTACTUS';

export type Screen = {
  screenDetails: {activeScreen: ScreenTypes};
  setActiveScreen: (screenType: ScreenTypes) => void;
  resetScreen: () => void;
}

export type Categories = {
  catDetails: {
    categories: Category[];
  };
  setCategories: (categories: any) => void;
  resetCategories: () => void;
};

export type CategoryProducts = {
  catProdDetails : {
    categoryProducts: Product[];
    category: string;
  };
  setCategoryProducts: (categoryProducts: any) => void;
  setCategory: (category: string) => void;
  resetCategoryProducts: () => void;
}

export type ProcessFlags = {
  processFlags: {
    isLoaderActive: boolean;
    isErrorScreenActive: boolean;
  };
  toggleErrorScreenActive: (isErrorScreenActive: boolean) => void;
  toggleLoaderActive: (isLoaderActive: boolean) => void;
  resetProcessFlags: () => void;
}