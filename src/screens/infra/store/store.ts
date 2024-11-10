import { create } from "zustand";
import {
  Screen,
  Categories,
  CategoryProducts,
  ProcessFlags,
} from "./models/context.model";
import { createScreenSlice } from "./slices/screen.slice";
import { createCategorySlice } from "./slices/category.slice";
import { createCategoryProductsSlice } from "./slices/category-products.slice";
import { createProcessFlagsSLice } from "./slices/process-flags.slice";

export const useKriviStore = create<
  Screen & Categories & CategoryProducts & ProcessFlags
>()((...a) => ({
  ...createScreenSlice(...a),
  ...createCategorySlice(...a),
  ...createCategoryProductsSlice(...a),
  ...createProcessFlagsSLice(...a),
}));
