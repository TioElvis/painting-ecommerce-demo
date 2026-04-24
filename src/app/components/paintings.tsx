"use client";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { Painting } from "@/lib/constants";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

interface Props {
  paintings: Painting[];
}

export function Paintings({ paintings }: Props) {
  const [current, setCurrent] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const router = useRouter();

  const plugin = useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));

  useEffect(() => {
    gsap.set(["#paintings"], { clearProps: "all" });

    gsap.fromTo(
      "#paintings",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1.8, ease: "power3.out" },
    );
  }, []);

  useEffect(() => {
    if (!api) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleTransition = (id: string) => {
    const tl = gsap.timeline({
      onComplete: () => {
        router.push(`/painting/${id}`);
      },
    });

    tl.to(["#title", "#nav", "#text1", "#text2"], {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }).to(
      "#paintings",
      {
        y: 10,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "<",
    );
  };

  return (
    <main className="flex-1">
      <MaxWidthWrapper id="paintings" className="opacity-0">
        <Carousel
          // eslint-disable-next-line react-hooks/refs
          plugins={[plugin.current]}
          // eslint-disable-next-line react-hooks/refs
          onMouseEnter={plugin.current.stop}
          // eslint-disable-next-line react-hooks/refs
          onMouseLeave={plugin.current.reset}
          setApi={setApi}
          opts={{ loop: true, align: "center" }}>
          <CarouselContent className="py-12">
            {paintings.map((painting, i) => {
              return (
                <CarouselItem
                  key={painting.id}
                  className="basis-80 md:basis-96">
                  <Card
                    className={cn(
                      "h-96 md:h-104 relative p-0 shadow-2xl transition-all duration-500 ease-out cursor-pointer",
                      current === i
                        ? "-translate-y-8"
                        : "translate-y-0 opacity-50",
                    )}
                    onClick={() => api?.scrollTo(i)}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      id={`img-${painting.id}`}
                      src={painting.image}
                      alt={painting.title}
                      className="w-full h-full"
                    />
                    <section className="w-full absolute bottom-8 flex items-center justify-center">
                      <Button
                        size="lg"
                        variant="secondary"
                        className="w-72 cursor-pointer"
                        disabled={current !== i}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTransition(painting.id);
                        }}>
                        View {painting.title}
                      </Button>
                    </section>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </MaxWidthWrapper>
    </main>
  );
}
