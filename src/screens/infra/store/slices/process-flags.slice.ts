import { StateCreator } from "zustand";
import { ProcessFlags } from "./../models/context.model";

export const createProcessFlagsSLice: StateCreator<ProcessFlags> = (set) => ({
  processFlags: {
    isErrorScreenActive: false,
    isLoaderActive: false,
    isProductsLoaded: false,
  },
  resetProcessFlags: () =>
    set((state) => ({
      processFlags: {
        isErrorScreenActive: false,
        isLoaderActive: false,
        isProductsLoaded: false,
      },
    })),
  toggleLoaderActive: (isLoaderActive: boolean) =>
    set((state) => ({
      processFlags: {
        ...state.processFlags,
        isLoaderActive,
      },
    })),
  toggleErrorScreenActive: (isErrorScreenActive: boolean) =>
    set((state) => ({
      processFlags: {
        ...state.processFlags,
        isErrorScreenActive,
      },
    })),
  toggleProductsLoaded: (isProductsLoaded: boolean) => {
    set((state) => ({
      processFlags: {
        ...state.processFlags,
        isProductsLoaded,
      },
    }));
  },
});

/* processFlags: {
  isErrorScreenActive: false,
  isLoaderActive: false
},
toggleErrorScreenActive: (isErrorScreenActive: boolean) =>
  set((state) => ({processFlags{ ...state.processFlags, isErrorScreenActive }})),
toggleLoaderActive: (isLoaderActive: boolean) =>
  set((state) => ({processFlags: { ...state.processFlags, isLoaderActive }})),
resetProcessFlags: () => set((state) => ({processFlags: {isErrorScreenActive: false,
  isLoaderActive: false}})), */
