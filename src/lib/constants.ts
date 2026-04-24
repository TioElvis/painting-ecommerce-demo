export type Painting = {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  date: string;
  forSale: boolean;
};

export const MOCKED_DATA_PAINTINGS: Painting[] = [
  {
    id: "1",
    image: "/ALE03516.jpg",
    title: "ALE03516",
    description:
      "Gestural composition in black ink on white. Interlocking lines evoke continuous energy and movement.",
    price: 1200,
    date: "2022-03-14",
    forSale: true,
  },
  {
    id: "2",
    image: "/ALE03568.jpg",
    title: "ALE03568",
    description:
      "Schematic figure on a metallic silver background with pink accent. Geometric abstraction of a human silhouette.",
    price: 2800,
    date: "2023-07-02",
    forSale: false,
  },
  {
    id: "3",
    image: "/ALE03615.jpg",
    title: "ALE03615",
    description:
      "Biomorphic organic form in dense black on pale gray. Single mass with interior voids, echoing sculptural tradition.",
    price: 950,
    date: "2021-11-08",
    forSale: true,
  },
  {
    id: "4",
    image: "/ALE03618.jpg",
    title: "ALE03618",
    description:
      "Minimalist nocturne: two white undulating lines and a circle suspended over absolute black.",
    price: 1750,
    date: "2023-01-19",
    forSale: true,
  },
  {
    id: "5",
    image: "/Cristiana-3.jpg",
    title: "Cristiana-3",
    description:
      "Broad curvilinear brushstrokes in black over silver and ivory. Large-scale expressionist gesture.",
    price: 3400,
    date: "2024-04-30",
    forSale: false,
  },
  {
    id: "6",
    image: "/Cristiana-5.jpg",
    title: "Cristiana-5",
    description:
      "Detail of a larger work: concave and convex forms create rhythmic tension across a textured surface.",
    price: 3400,
    date: "2024-04-30",
    forSale: true,
  },
];
