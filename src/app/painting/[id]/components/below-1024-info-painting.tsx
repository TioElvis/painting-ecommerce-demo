import { Painting } from "@/lib/constants";

interface Props {
  painting: Painting;
}

export function Below1024InfoPainting({ painting }: Props) {
  return <section>This is not responsive</section>;
}
