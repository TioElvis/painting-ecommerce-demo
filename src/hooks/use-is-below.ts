import { useEffect, useState } from "react";

export function useIsBelow(breakpoint = 768) {
  const [isBelow, setIsBelow] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const onChange = () => setIsBelow(window.innerWidth < breakpoint);

    mql.addEventListener("change", onChange);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsBelow(window.innerWidth < breakpoint);
    return () => mql.removeEventListener("change", onChange);
  }, [breakpoint]);

  return !!isBelow;
}
