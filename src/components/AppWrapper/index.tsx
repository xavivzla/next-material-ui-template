import { useContext, useMemo } from "react";
import {
  createTheme,
  jssPreset,
  StylesProvider,
} from "@material-ui/core/styles";

import { MuiThemeProvider } from "@material-ui/core";

import CssBaseline from "@material-ui/core/CssBaseline";
import AppContext from "../../contenxts/AppContext/Context";

const AppWrapper = ({ children }) => {
  const { theme } = useContext(AppContext);

  const muiTheme = useMemo(() => {
    return createTheme(theme);
  }, [theme]);

  return (
    <div>
      <CssBaseline />
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </div>
  );
};

export default AppWrapper;
