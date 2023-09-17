import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import { UiContext } from "./UiContext";

import { Box, debounce } from "@mui/material";

export const UiContextProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLElement>(document.createElement("div"));

  const onLayoutChange = useMemo(
    () => () => {
      if (ref.current) {
        if (ref.current.offsetWidth < 980) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      }
    },
    [ref.current],
  );

  const debouncedOnLayoutChange = useMemo(
    () => debounce(onLayoutChange, 300),
    [],
  );

  useLayoutEffect(onLayoutChange, []);

  // Update view ports when window is resized
  useEffect(() => {
    window.addEventListener("resize", debouncedOnLayoutChange);
    return () => {
      window.removeEventListener("resize", debouncedOnLayoutChange);
    };
  }, []);

  return (
    <UiContext.Provider
      value={{
        isMobile,
      }}
    >
      <Box
        className="ui-context-wrapper"
        ref={ref}
        sx={{ height: "100%", position: "relative", overflow: "hidden" }}
      >
        {children}
      </Box>
    </UiContext.Provider>
  );
};
