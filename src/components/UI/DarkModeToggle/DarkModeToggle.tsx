import { UIContext } from "lib/context";
import React, { useContext, useEffect } from "react";
import { HiMoon } from "react-icons/hi";
import { BsSun, BsSnow } from "react-icons/bs";
import { GiVampireDracula } from "react-icons/gi";

export function DarkModeToggle() {
  const { state, dispatch } = useContext(UIContext);

  useEffect(() => {
    const saved = localStorage.getItem("balthazar-portfolio-lightmode");
    if (saved) {
      const initialValue = JSON.parse(saved);
      document.querySelector("html")?.setAttribute("data-theme", initialValue);
      dispatch({ type: "SET_COLOR_MODE", payload: initialValue });
    }
  }, []);

  const toggleMode = (mode: string) => {
    localStorage.setItem("balthazar-portfolio-lightmode", JSON.stringify(mode));
    document.querySelector("html")?.setAttribute("data-theme", mode);
    dispatch({ type: "SET_COLOR_MODE", payload: mode });
  };

  const colorIcons = [
    {
      title: "dark",
      icons: HiMoon,
      next: "light",
    },
    {
      title: "light",
      icons: BsSun,
      next: "dracula",
    },
    {
      title: "dracula",
      icons: GiVampireDracula,
      next: "winter",
    },
    {
      title: "winter",
      icons: BsSnow,
      next: "dark",
    },
  ];

  return (
    <div className="relative h-8 w-8 ">
      {colorIcons.map((icon: any) => {
        return (
          <button onClick={() => toggleMode(icon.next)}>
            <icon.icons
              className={` absolute left-0 top-0 h-8 w-8 transform text-xs  text-primary transition-all  duration-300 ${
                state.colorMode === icon.title
                  ? "pointer-events-auto rotate-0 opacity-100"
                  : "pointer-events-none rotate-180 opacity-0"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
