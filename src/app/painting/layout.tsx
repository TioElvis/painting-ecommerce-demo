import { Fragment } from "react/jsx-runtime";
import { Header } from "../components/header";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Fragment>
      {/* <Header /> */}
      {children}
    </Fragment>
  );
}
