import { createContext, useReducer } from "react";

const UIReducer = (state: any, action: any) => {
  switch (action.type) {
    case "OPEN_NAV_DRAWER":
      return { ...state, navDrawerOpen: true };
    case "CLOSE_NAV_DRAWER":
      return { ...state, navDrawerOpen: false };
    case "SET_SELECTED_PROJECT":
      return { ...state, selectedProject: action.payload };
    case "CLEAR_SELECTED_PROJECT":
      return { ...state, selectedProject: null };
    case "TOGGLE_DARK_MODE":
      return { ...state, isDarkMode: !state.isDarkMode };
    case "SET_DARK_MODE":
      return { ...state, isDarkMode: true };
    case "SET_LIGHT_MODE":
      return { ...state, isDarkMode: false };
    case "SET_COLOR_MODE":
      return { ...state, colorMode: action.payload };
    default:
      return state;
  }
};

type InitialStateType = {
  navDrawerOpen: boolean;
  selectedProject: any;
  isDarkMode: boolean;
  colorMode: string;
};

const initialState = {
  navDrawerOpen: false,
  selectedProject: null,
  isDarkMode: false,
  colorMode: "light",
};

export const UIContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(UIReducer, initialState);

  return (
    <UIContext.Provider value={{ state, dispatch }}>
      {children}
    </UIContext.Provider>
  );
};

export default GlobalProvider;
