"use client";
import { useEffect, useState } from "react";

import { Painting } from "@/lib/constants";
import { useIsBelow } from "@/hooks/use-is-below";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

import { NormalInfoPainting } from "./normal-info-painting";
import { Below1024InfoPainting } from "./below-1024-info-painting";

interface Props {
  painting: Painting;
}

export function SelectInfoPainting({ painting }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  const isBelow1024 = useIsBelow(1024);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <MaxWidthWrapper className="h-full">
      {isBelow1024 && <Below1024InfoPainting painting={painting} />}
      {!isBelow1024 && <NormalInfoPainting painting={painting} />}
    </MaxWidthWrapper>
  );
}
