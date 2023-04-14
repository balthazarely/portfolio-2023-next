import { UIContext } from "lib/context";
import React, { useContext, useEffect } from "react";

export function LoadingScreen() {
  const { state, dispatch } = useContext(UIContext);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "HIDE_LOADING_SCREEN" });
    }, 1000);
  }, []);

  return (
    <div
      className={`${
        state.loadingScreenActive ? "opacity-100" : "opacity-0"
      } pointer-events-none fixed inset-0 z-[400] bg-primary transition-opacity duration-300 `}
    ></div>
  );
}
