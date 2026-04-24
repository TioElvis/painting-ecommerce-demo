import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

type Props = PropsWithChildren<ComponentProps<"div">>;

export function MaxWidthWrapper({
  children,
  className,
  ...props
}: Readonly<Props>) {
  return (
    <div
      className={cn("w-full max-w-full px-4 md:px-8 lg:px-12", className)}
      {...props}>
      {children}
    </div>
  );
}
