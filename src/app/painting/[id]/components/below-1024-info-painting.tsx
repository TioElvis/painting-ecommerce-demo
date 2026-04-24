import { Painting } from "@/lib/constants";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Props {
  painting: Painting;
}

export function Below1024InfoPainting({ painting }: Props) {
  return (
    <section className="w-full flex justify-center items-center flex-col gap-12">
      <Card id={`card-${painting.id}`} className="w-full h-88 p-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={painting.image}
          alt={painting.title}
          className="w-full h-full"
        />
      </Card>
      <div>
        <h2 className="text-4xl font-bold">
          {painting.title} - {painting.date}
        </h2>
        <p className="text-lg text-muted-foreground">{painting.description}</p>
        <p className="text-2xl font-bold">${painting.price.toFixed(2)}</p>
        <br />
        <br />
        <Badge variant="secondary">
          {painting.forSale ? "For Sale" : "Not For Sale"}
        </Badge>
      </div>
    </section>
  );
}
