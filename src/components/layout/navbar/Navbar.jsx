import {
  Box,
  Button,
  Container,
  Stack,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";

import logo from "../../../assets/images/crescere-logo.svg";
import greenlogo from "../../../assets/images/greencm.svg";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";
import { useLocation } from "react-router-dom";

const navItems = [
  {
    label: "Home",
    path: "/",
  },

  {
    label: "About",
    path: "/about",
  },

  {
    label: "Services",
    path: "/services",
  },

  {
    label: "Programs",
    path: "/programs",
  },

  {
    label: "Blog",
    path: "/blog",
  },

  {
    label: "Contact Us",
    path: "/contact",
  },
];

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 20,
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
          src={
            isHomePage
              ? logo
              : greenlogo
          }

          alt="Crescere Minds"
          sx={{
            width: {
              xs: 170, // small logo on mobile
              md: 220,
            },

            objectFit: "contain",
          }}
        />

        {/*NAVIGATION*/}
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
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
                key={item.label}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // Faint vertical separators
                  borderRight:
                    index !== navItems.length - 1
                      ? "2px solid rgba(46,125,50,0.18)"
                      : "none",
                  px: 1,
                }}
              >
                <Button
                  component={Link}
                  to={item.path}
                  sx={{
                    color: "#2E7D32",
                    fontWeight: 700,
                    minWidth: "unset",
                  }}
                >
                  {item.label}
                </Button>
              </Box>
            ))}
          </Stack>
        </Box>

        {/*Mobile menu Button */}
        <Box
          sx={{
            display: {
              xs: "block",
              md: "none",
            },
          }}
        >
          <IconButton
            onClick={handleDrawerToggle}

            sx={{
              color: "white",

              // ADDED:
              // Mobile glass effect
              background: "rgba(255,255,255,0.12)",

              backdropFilter: "blur(10px)",

              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Container>

      { /* Full mobile navigation */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        <Box
          sx={{
            width: 260,
            height: "100%",

            backgroundColor: "#F5F7F2",

            pt: 4,
          }}
        >
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item.label}
                disablePadding
              >
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle}

                  sx={{
                    borderRadius: 2,
                    mx: 1,
                    my: 0.5,

                    "&:hover": {
                      backgroundColor: "rgba(46,125,50,0.08)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      fontWeight: 700,
                      color: "#2E7D32",
                      fontSize: "1rem",
                    }}
                  >
                    {item.label}
                  </Box>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
