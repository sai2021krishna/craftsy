import { StateCreator } from "zustand";
import { Products } from "./../models/context.model";

export const createProductsSlice: StateCreator<Products> = (set) => ({
  prodDetails: { products: [] },
  setProducts: (products: any) =>
    set((state) => ({
      prodDetails: { ...state.prodDetails, products },
    })),
  resetProducts: () =>
    set((state) => ({
      prodDetails: { products: [] },
    })),
});
