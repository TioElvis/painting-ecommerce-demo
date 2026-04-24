import Image from "next/image";
import { MOCKED_DATA_PAINTINGS } from "@/lib/constants";

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
    <Image
      src={painting.image}
      alt={painting.title}
      fill
      className="w-full h-full absolute object-cover blur-2xl"
    />
  );
}
