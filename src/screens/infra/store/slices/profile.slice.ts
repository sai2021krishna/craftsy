import { StateCreator } from "zustand";
import { ProfileDetails } from "../models/context.model";

export const ProfileSlice: StateCreator<ProfileDetails> = (set) => ({
  profile: {
    email: "",
  },
  setEmail: (email: string) =>
    set((state) => {
      return { profile: { email } };
    }),
  resetProfile: () => ({
    profile: {
      email: "",
    },
  }),
});
