import { useEffect } from "react";

export function useEscapeKeyPress(onEscape: () => void) {
  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onEscape();
      }
    }
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [onEscape]);
}
