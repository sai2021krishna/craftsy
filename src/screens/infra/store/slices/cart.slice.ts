import { StateCreator } from "zustand";
import { CartDetails, CartProduct } from "../models/context.model";

export const CartSlice: StateCreator<CartDetails> = (set) => ({
  cart: { products: [] },
  pushNewProductsToCart: (product: CartProduct) =>
    set((state) => {
      const { products } = state.cart;
      products.push(product);
      return { cart: { ...state.cart, products } };
    }),
  updateExistingProductQuant: (productId: number, quantity: number) =>
    set((state) => {
      const products = state.cart.products;
      products.forEach((product) => {
        if (product.productId === productId) {
          product.quantity = quantity;
        }
      });
      return { cart: { ...state.cart, products } };
    }),
  removeProductFromCart: (productId: number) =>
    set((state) => {
      const filteredProducts = state.cart.products.filter(
        (product) => product.productId !== productId
      );
      return { cart: { ...state.cart, products: filteredProducts } };
    }),
  resetCart: () =>
    set(() => {
      return { cart: { products: [] } };
    }),
});
