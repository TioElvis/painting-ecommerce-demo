import { Painting } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

interface Props {
  painting: Painting;
}

export function NormalInfoPainting({ painting }: Props) {
  return (
    <section className="h-full grid grid-cols-2">
      <div className="flex flex-col justify-center items-center">
        <div className="w-96 h-128">
          <h2 className="text-4xl font-bold">
            {painting.title} - {painting.date}
          </h2>
          <p className="text-lg text-muted-foreground">
            {painting.description}
          </p>
          <p className="text-2xl font-bold">${painting.price.toFixed(2)}</p>
          <br />
          <br />
          <Badge variant="secondary">
            {painting.forSale ? "For Sale" : "Not For Sale"}
          </Badge>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={painting.image}
          alt={painting.title}
          className="w-96 h-128 rounded-lg shadow-2xl"
        />
      </div>
    </section>
  );
}
