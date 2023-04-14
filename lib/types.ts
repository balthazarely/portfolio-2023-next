import { ReactNode } from "react";
import { IconType } from "react-icons";

export type Project = {
  id: number;
  year: string | null;
  client: string | null;
  url: string;
  slug: string;
  otherImages?: string[] | null;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  category: string;
  github: string | null;
  link: string | null;
};

export type UIAction =
  | { type: "OPEN_NAV_DRAWER" }
  | { type: "CLOSE_NAV_DRAWER" }
  | { type: "SET_SELECTED_PROJECT"; payload: Project }
  | { type: "CLEAR_SELECTED_PROJECT" }
  | { type: "SET_COLOR_MODE"; payload: string }
  | { type: "SHOW_LOADING_SCREEN" }
  | { type: "HIDE_LOADING_SCREEN" }
  | { type: "SET_ACTIVE_SECTION"; payload: string };

export type InitialStateType = {
  navDrawerOpen: boolean;
  loadingScreenActive: boolean;
  selectedProject: Project | null;
  colorMode: string;
  activeSection: string;
};

export type GlobalProviderProps = {
  children: ReactNode;
};

export type IColorIcons = {
  title: string;
  icons: IconType;
  next: string;
};
