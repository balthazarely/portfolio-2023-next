import { useEffect, useLayoutEffect, useState } from "react";

export function useLockBodyScroll(isLocked: boolean): void {
  useEffect((): (() => void) => {
    const originalStyle: string = window.getComputedStyle(
      document.body
    ).overflow;
    document.body.style.overflow = isLocked ? "hidden" : originalStyle;
    return () => (document.body.style.overflow = originalStyle);
  }, [isLocked]);
}

export function useEscapeKeyPress(onEscape: any) {
  useEffect(() => {
    function handleKeyPress(event: any) {
      if (event.keyCode === 27) {
        onEscape();
      }
    }

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [onEscape]);
}
