import { LockScreenStore } from "@/types";
import { create } from "zustand";

export const useLockScreen = create<LockScreenStore>((set) => ({
  visible: true,
  handleClose: () => set((state) => ({ ...state, visible: false })),
  handleOpen: () => set((state) => ({ ...state, visible: true })),
  handleVisible: (open: boolean) =>
    set((state) => ({ ...state, visible: open })),
}));
