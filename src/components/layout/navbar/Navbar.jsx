import {
  Box,
  Button,
  Container,
  Stack,
} from "@mui/material";

import logo from "../../../assets/images/logo.svg";

const navItems = [
  "Home",
  "About",
  "Services",
  "Programs",
  "Blog",
  "Contact",
];

export default function Navbar() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 10,
        py: 3,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LOGO */}
        <Box
          component="img"
          src={logo}
          alt="Crescere Minds"
          sx={{
            width: 220,
            objectFit: "contain",
          }}
        />

        {/* NAVIGATION */}
        <Stack
  direction="row"
  sx={{
    background: "rgba(255,255,255,0.85)",
    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
    backdropFilter: "blur(12px)",
    borderRadius: "999px",
    px: 2,
    py: 1.2,
    alignItems: "center",
  }}
>
  {navItems.map((item, index) => (
    <Box
      key={item}
      sx={{
        display: "flex",
        alignItems: "center",
        borderRight:
          index !== navItems.length - 1
            ? "1px solid rgba(46,125,50,0.18)"
            : "none",
        px: 1,
      }}
    >
      <Button
        sx={{
          color: "#2E7D32",
          fontWeight: 700,
          minWidth: "unset",
        }}
      >
        {item}
      </Button>
    </Box>
  ))}
</Stack>
      </Container>
    </Box>
  );
}
