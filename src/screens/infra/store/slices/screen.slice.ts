import { StateCreator } from "zustand";
import { Screen, ScreenTypes } from "./../models/context.model";

export const createScreenSlice: StateCreator<Screen> = (set) => ({
  screenDetails: {
    activeScreen: "DASHBOARD",
  },
  setActiveScreen: (activeScreen: ScreenTypes) =>
    set((state) => ({
      screenDetails: { ...state.screenDetails, activeScreen },
    })),
  resetScreen: () =>
    set((state) => ({
      screenDetails: {
        activeScreen: "DASHBOARD",
      },
    })),
});
