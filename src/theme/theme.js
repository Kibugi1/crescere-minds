import { createTheme } from "@mui/material/styles";
import palette from "./palette";

const theme = createTheme({
  palette,

  typography: {
    fontFamily: "'Nunito Sans', sans-serif",

    h1: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 700,
      letterSpacing: "-1px",
    },

    h2: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 700,
      letterSpacing: "-0.5px",
    },

    h3: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
    },

    button: {
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 700,
      textTransform: "none",
    },
  },
});

export default theme;
