import { createTheme } from "@mui/material/";
import { blueGrey } from "@mui/material/colors";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  palette: {
    primary: {
      main: blueGrey[700],
      light: blueGrey[300],
      dark: blueGrey[900]
    }
  },
  typography: {
    "fontFamily": `"Roboto", "Helvetica", "Merienda", "Inter", "Arial"`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 500,
    "fontWeightMedium": 900,
  }
});
