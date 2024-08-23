import React, { DetailedHTMLProps, PropsWithChildren } from "react";

interface IIconProps
  extends DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    PropsWithChildren {}

const Icon = ({ className, children, ...props }: IIconProps) => {
  return (
    <div
      className={`!bg-opacity-15 dark:bg-slate-950 rounded-full p-4 cursor-pointer active:scale-110 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Icon;
