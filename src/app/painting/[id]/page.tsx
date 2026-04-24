import { MOCKED_DATA_PAINTINGS } from "@/lib/constants";
import { SelectInfoPainting } from "./components/select-info-painting";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  const painting = MOCKED_DATA_PAINTINGS.find((p) => p.id === id);

  if (!painting) {
    return <p>Painting not found</p>;
  }

  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${painting.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(50px)",
        }}
      />
      <SelectInfoPainting painting={painting} />
    </div>
  );
}
