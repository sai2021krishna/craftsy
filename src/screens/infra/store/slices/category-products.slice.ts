import { StateCreator } from "zustand";
import { CategoryProducts } from "./../models/context.model";

export const createCategoryProductsSlice: StateCreator<CategoryProducts> = (
  set
) => ({
  catProdDetails: { categoryProducts: [], category: "" },
  setCategoryProducts: (categoryProducts: any) =>
    set((state) => ({
      catProdDetails: { ...state.catProdDetails, categoryProducts },
    })),
  setCategory: (category: string) =>
    set((state) => ({ catProdDetails: { ...state.catProdDetails, category } })),
  resetCategoryProducts: () =>
    set((state) => ({
      catProdDetails: { categoryProducts: [], category: "" },
    })),
});
