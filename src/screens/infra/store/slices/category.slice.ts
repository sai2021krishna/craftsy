import { StateCreator } from "zustand";
import { Categories } from "./../models/context.model";

export const createCategorySlice: StateCreator<Categories> = (set) => ({
  catDetails: { categories: [] },
  setCategories: (categories: any) =>
    set((state) => ({ catDetails: { ...state.catDetails, categories } })),
  resetCategories: () => set((state) => ({ catDetails: { categories: [] } })),
});
