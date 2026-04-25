"use client";
import { gsap } from "gsap";
import { useEffect } from "react";

import { Painting } from "@/lib/constants";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props {
  painting: Painting;
}

export function Below1024InfoPainting({ painting }: Props) {
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
    <div className="w-full h-full flex items-center justify-center py-4 md:py-8 lg:py-12">
      <section className="w-full md:w-lg h-full flex flex-col items-center justify-center">
        <div className="w-full h-88 md:h-96">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            id="card-image"
            src={painting.image}
            alt={painting.title}
            className="w-full h-full rounded-t-lg"
          />
        </div>
        <div className="h-72 md:h-80 text-white bg-background/20 backdrop-blur-3xl rounded-b-lg p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl md:text-4xl font-bold">
                {painting.title}
              </h2>
              <Badge variant="secondary">
                {painting.forSale ? "For Sale" : "Not For Sale"}
              </Badge>
            </div>
            <p className="md:text-lg">{painting.description}</p>
            <p className="text-xl md:text-2xl font-bold">
              ${painting.price.toFixed(2)}
            </p>
            <Button size="lg" variant="outline" className="cursor-pointer w-52">
              Add to Cart
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg md:text-xl font-bold">{painting.date}</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
