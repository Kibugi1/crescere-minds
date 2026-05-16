import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import palette from "./palette";

let theme = createTheme({
  palette,

  shape: {
    borderRadius: 20,
  },

  typography: {
    // Global font for the app
    fontFamily: "'Nunito Sans', sans-serif",

    h1: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 700,
      fontSize: "5rem",
      lineHeight: 1,
      letterSpacing: "-1px",
      color: palette.text.primary,
    },

    h2: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 700,
      fontSize: "4rem",
      lineHeight: 1.1,
      color: palette.text.primary,
    },

    h3: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
      fontSize: "3rem",
      color: palette.text.primary,
    },

    h4: {
      fontWeight: 700,
      fontSize: "2rem",
      color: palette.text.primary,
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.8,
      color: palette.text.secondary,
    },

    body2: {
      fontSize: "0.95rem",
      lineHeight: 1.7,
      color: palette.text.secondary,
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
          boxShadow: "none",
          transition: "all 0.3s ease",

          "&:hover": {
            boxShadow: "0 8px 24px rgba(0,0,0,0.8)",
            transform: "translateY(-2px)",
          },
        },
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },

    MuiCard: {
      styleOverrides: {

        root: {

          borderRadius: 24,

          boxShadow:
            "0 12px 40px rgba(0,0,0,0.05)",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
