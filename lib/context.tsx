import { createContext, useReducer } from "react";
import {
  GlobalProviderProps,
  InitialStateType,
  Project,
  UIAction,
} from "./types";

const UIReducer = (state: InitialStateType, action: UIAction) => {
  switch (action.type) {
    case "OPEN_NAV_DRAWER":
      return { ...state, navDrawerOpen: true };
    case "CLOSE_NAV_DRAWER":
      return { ...state, navDrawerOpen: false };
    case "SET_SELECTED_PROJECT":
      return { ...state, selectedProject: action.payload };
    case "CLEAR_SELECTED_PROJECT":
      return { ...state, selectedProject: null };
    case "SET_COLOR_MODE":
      return { ...state, colorMode: action.payload };
    case "SHOW_LOADING_SCREEN":
      return { ...state, loadingScreenActive: true };
    case "HIDE_LOADING_SCREEN":
      return { ...state, loadingScreenActive: false };
    case "SET_ACTIVE_SECTION":
      return { ...state, activeSection: action.payload };
    default:
      return state;
  }
};

const initialState = {
  navDrawerOpen: false,
  loadingScreenActive: true,
  selectedProject: null,
  colorMode: "light",
  activeSection: "hero",
};

export const UIContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [state, dispatch] = useReducer(UIReducer, initialState);

  return (
    <UIContext.Provider value={{ state, dispatch }}>
      {children}
    </UIContext.Provider>
  );
};

export default GlobalProvider;
