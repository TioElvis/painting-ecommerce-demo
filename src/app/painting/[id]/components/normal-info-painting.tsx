"use client";
import { gsap } from "gsap";
import { useEffect } from "react";

import { Painting } from "@/lib/constants";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props {
  painting: Painting;
}

export function NormalInfoPainting({ painting }: Props) {
  useEffect(() => {
    gsap.set(["#card-image"], { clearProps: "all" });

    gsap.fromTo(
      "#card-image",
      {
        scale: 0,
        opacity: 0,
        transformOrigin: "center center",
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <section className="w-full flex items-center justify-center">
        <div className="w-xl h-120 flex flex-col justify-between bg-background/20 backdrop-blur-3xl rounded-l-lg p-4 text-white">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-5xl font-bold">{painting.title}</h2>
              <Badge variant="secondary">
                {painting.forSale ? "For Sale" : "Not For Sale"}
              </Badge>
            </div>
            <p className="text-lg">{painting.description}</p>
            <p className="text-2xl font-bold">${painting.price.toFixed(2)}</p>
            <Button size="lg" variant="outline" className="cursor-pointer w-52">
              Add to Cart
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">{painting.date}</h2>
          </div>
        </div>
        <div className="w-xl h-150">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            id="card-image"
            src={painting.image}
            alt={painting.title}
            className="w-full h-full rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}
