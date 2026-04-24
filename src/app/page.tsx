import { Fragment } from "react/jsx-runtime";

import { Hero } from "./components/hero";
import { Header } from "./components/header";
import { Paintings } from "./components/paintings";

import { MOCKED_DATA_PAINTINGS } from "@/lib/constants";

export default function Page() {
  return (
    <Fragment>
      <Header withAnimation />
      <Hero />
      <Paintings paintings={MOCKED_DATA_PAINTINGS} />
    </Fragment>
  );
}
