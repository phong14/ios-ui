"use client";
import { useLockScreen } from "@/stores";
import { Battery, SignalHigh, Wifi } from "lucide-react";
import DynamicIsland from "../dynamic-island.tsx/DynamicIsland";
import { Toaster } from "../ui/sonner";

const SIZE_ICON = 24;
const Header = () => {
  const { visible, handleOpen } = useLockScreen();

  return (
    <div className="fixed flex flex-row items-center justify-between top-0 left-0 w-full h-14 px-4 py-2">
      <div className="flex-1" onDragEnd={handleOpen} onTouchEnd={handleOpen}>
        <span className="text-black text-md dark:text-slate-300">Viettel</span>
      </div>
      <Toaster
        className={`${visible ? "!bottom-28" : "!top-12"}`}
        visibleToasts={visible ? 7 : 1}
        position={visible ? "bottom-center" : "top-center"}
      />
      <DynamicIsland />
      <div className="flex-1 flex gap-1 items-center justify-end dark:text-slate-300">
        <SignalHigh size={SIZE_ICON} />
        <Wifi size={SIZE_ICON} />
        <Battery size={SIZE_ICON} />
      </div>
    </div>
  );
};

export default Header;
