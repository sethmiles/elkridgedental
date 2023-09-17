import { createContext, useContext } from "react";

type Context = {
  isMobile: boolean;
};

export const UiContext = createContext<Context>({
  isMobile: false,
});

export const useUiContext = (): Context => useContext(UiContext);
