import { Fragment } from "react/jsx-runtime";

import { Hero } from "./components/hero";
import { Header } from "./components/header";

export default function Page() {
  return (
    <Fragment>
      <Header withAnimation />
      <Hero />
      <main></main>
    </Fragment>
  );
}
