import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

import { Button } from "@/components/ui/button";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Fragment>
      <Button
        asChild
        variant="secondary"
        className="absolute top-12 right-4 md:right-8 lg:right-12 cursor-pointer">
        <Link href="/">Back</Link>
      </Button>
      {children}
    </Fragment>
  );
}
