"use client";
import { gsap } from "gsap";
import { useEffect, useState } from "react";

import { useIsBelow } from "@/hooks/use-is-below";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  const isBelow768 = useIsBelow(768);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    gsap.set(["#text1", "#text2"], { clearProps: "all" });

    const tl = gsap.timeline();

    if (isBelow768) {
      tl.fromTo(
        "#text1",
        { x: -10, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1.5 },
      ).fromTo(
        "#text2",
        { x: 10, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "<",
      );
    } else {
      tl.fromTo(
        "#text1",
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1.5 },
      ).fromTo(
        "#text2",
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "<",
      );
    }
  }, [isBelow768, isMounted]);

  return (
    <MaxWidthWrapper className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between">
      <p id="text1" className="opacity-0">
        <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          For the
        </span>
        <br />
        <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase">
          art lovers
        </span>
      </p>
      <p id="text2" className="sm:text-right opacity-0">
        This is a demo for an e-commerce that sells painting. <br />
        You can find various paintings here. <br />
        We provide high quality paintings for art lovers.
      </p>
    </MaxWidthWrapper>
  );
}
