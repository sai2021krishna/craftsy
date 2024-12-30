import { create } from "zustand";
import {
  Categories,
  Products,
  ProcessFlags,
  ProfileDetails,
  CartDetails,
} from "./models/context.model";
import { createCategorySlice } from "./slices/category.slice";
import { createProductsSlice } from "./slices/category-products.slice";
import { createProcessFlagsSLice } from "./slices/process-flags.slice";
import { CartSlice } from "./slices/cart.slice";
import { ProfileSlice } from "./slices/profile.slice";

export const useKriviStore = create<
  Categories & Products & ProcessFlags & ProfileDetails & CartDetails
>()((...a) => ({
  ...createCategorySlice(...a),
  ...createProductsSlice(...a),
  ...createProcessFlagsSLice(...a),
  ...CartSlice(...a),
  ...ProfileSlice(...a)
}));
