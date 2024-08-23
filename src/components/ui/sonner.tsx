"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ className, ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className={`toaster group ${className}`}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:h-unset group-[.toaster]:p-2 group-[.toaster]:bg-background dark:group-[.toaster]:bg-neutral-900 group-[.toaster]:text-foreground dark:group-[.toaster]:text-slate-300 group-[.toaster]:border-transparent group-[.toaster]:shadow-lg group-[.toaster]:font-normal",
          icon: "group-[.toaster]:mr-2 group-[.toaster]:w-6 group-[.toaster]:h-6 ",
          description:
            "group-[.toast]:text-muted-foreground dark:group-[.toaster]:text-slate-300 group-[.toast]:font-light",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
