"use client";

import {
  CURRENT_DAY,
  FORMAT_HOUR_MINUTE,
  FORMAT_NAME_DAY_MONTH,
} from "@/constants";
import { useLockScreen } from "@/stores";
import dayjs from "dayjs";
import ActionLockScreen from "../action-lock-screen/ActionLockScreen";
import Header from "../header/Header";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
} from "../ui/drawer";

const LockScreen = () => {
  const { visible, handleVisible } = useLockScreen();

  return (
    <Drawer direction="top" open={visible} onOpenChange={handleVisible}>
      <DrawerPortal>
        <DrawerOverlay className="fixed inset-0 bg-black/40" />
        <DrawerContent className="h-screen bg-lock-screen bg-contain border-transparent outline-none">
          <div
            data-vaul-no-drag
            className="h-screen bg-lock-screen bg-contain border-transparent"
          >
            <Header />
            <DrawerHeader>
              <div className="mt-10 flex flex-col items-center">
                <span className="text-lg dark:text-slate-300">
                  {dayjs(CURRENT_DAY).format(FORMAT_NAME_DAY_MONTH)}
                </span>

                <span className="text-7xl font-bold dark:text-slate-300">
                  {dayjs(CURRENT_DAY).format(FORMAT_HOUR_MINUTE)}
                </span>
              </div>
            </DrawerHeader>
          </div>
          <DrawerFooter>
            <ActionLockScreen />
            <DrawerClose>
              <div className="mx-auto w-32 h-1 bg-slate-950 dark:bg-slate-300 rounded-full" />
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export default LockScreen;
