"use client";
import { gsap } from "gsap";
import { useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon } from "@hugeicons/core-free-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

interface Props {
  withAnimation?: boolean;
}

export function Header({ withAnimation }: Props) {
  useEffect(() => {
    if (withAnimation) {
      gsap.set(["#title", "#nav"], { clearProps: "all" });

      const tl = gsap.timeline();

      tl.fromTo(
        "#title",
        { y: "45vh", opacity: 0 },
        { opacity: 1, duration: 1, fontSize: "3.5rem", ease: "power3.out" },
      )
        .to("#title", {
          y: 0,
          duration: 1,
          fontSize: "1.5rem",
          ease: "power3.out",
        })
        .fromTo(
          "#nav",
          { y: -50, opacity: 0 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.5",
        );
    }
  }, [withAnimation]);

  return (
    <header className="relative py-4 md:py-8 lg:py-12">
      <MaxWidthWrapper className="flex">
        <div className="flex-1 flex items-center justify-center">
          <span
            id="title"
            className={cn("font-semibold", withAnimation && "opacity-0")}>
            DEMO
          </span>
        </div>
        <nav id="nav" className={cn(withAnimation && "opacity-0")}>
          <Button variant="outline" size="icon-lg" className="cursor-pointer">
            <HugeiconsIcon icon={Menu01Icon} />
          </Button>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
}
