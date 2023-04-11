import { useEffect, useLayoutEffect, useState } from "react";

export function useLockBodyScroll(isLocked: boolean): void {
  useLayoutEffect((): (() => void) => {
    const originalStyle: string = window.getComputedStyle(
      document.body
    ).overflow;
    document.body.style.overflow = isLocked ? "hidden" : originalStyle;
    return () => (document.body.style.overflow = originalStyle);
  }, [isLocked]);
}
