import { Camera, Flashlight } from "lucide-react";
import React from "react";
import Icon from "../icon/Icon";

const ActionLockScreen = () => {
  return (
    <div className="w-full flex justify-between px-4 py-4 dark:text-slate-300">
      <Icon>
        <Flashlight />
      </Icon>
      <Icon>
        <Camera />
      </Icon>
    </div>
  );
};

export default ActionLockScreen;
