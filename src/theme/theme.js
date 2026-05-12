import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import palette from "./palette";

let theme = createTheme({
  palette,

  shape: {
    borderRadius: 20,
  },

  typography: {
    fontFamily: "'Nunito Sans', sans-serif",

    h1: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 700,
      fontSize: "5rem",
      lineHeight: 1,
      letterSpacing: "-1px",
    },

    h2: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 700,
      fontSize: "4rem",
      lineHeight: 1.1,
    },

    h3: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
      fontSize: "3rem",
    },

    h4: {
      fontWeight: 700,
      fontSize: "2rem",
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.8,
    },

    button: {
      fontWeight: 700,
      textTransform: "none",
      fontSize: "1rem",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "999px",
          paddingInline: "24px",
          paddingBlock: "10px",
        },
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
