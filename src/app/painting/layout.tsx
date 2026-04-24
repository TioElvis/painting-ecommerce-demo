import { Fragment } from "react/jsx-runtime";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <Fragment>{children}</Fragment>;
}
