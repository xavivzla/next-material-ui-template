import React, { useState, useMemo } from "react";
import AppContext from "./Context";
import defaultContext from "./defaultContext";

const initialThemeValue = defaultContext.theme;

const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialThemeValue);
  const [themeType, setThemeType] = useState(defaultContext.themeType);
  const [layout, setLayout] = useState(defaultContext.layout);

  const contextValue = useMemo(() => {
    return {
      theme,
      setTheme,
      layout,
      setLayout,
      themeType,
      setThemeType,
    };
  }, [theme, themeType, layout]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
