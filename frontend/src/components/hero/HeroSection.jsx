import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Stack,
} from "@mui/material";

import heroDesktop from "../../assets/images/hero-desktop.png";
import heroMobile from "../../assets/images/hero-mobile.png";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: {
          xs: "100svh",
          md: "100vh",
        },

        position: "relative",

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        // Reserve navbar space
        pt: {
          xs: "88px",
          md: "100px",
        },

        boxSizing: "border-box",

        overflow: "hidden",

        backgroundImage: {
          xs: `
      linear-gradient(
        rgba(0,0,0,0.45),
        rgba(0,0,0,0.45)
      ),
      url(${heroMobile})
    `,

          md: `
      linear-gradient(
        rgba(0,0,0,0.45),
        rgba(0,0,0,0.45)
      ),
      url(${heroDesktop})
    `,
        },

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{
            xs: 3,
            md: 10,
          }}

          alignItems="center"

          sx={{
            justifyContent: "center",

            mt: {
              xs: 2,
              md: 0,
            },
          }}
        >

          {/* LEFT MAIN CARD */}
          <Grid
            item
            xs={12}
            md={8}

            sx={{

              mb: {
                xs: 6,
                md: 0,
              },

              // Manipulation point:
              // increase xs value
              // for more space below hero on phones
            }}
          >
            <Box
              sx={{
                background: "rgba(255,255,255,0.06)",

                border: "1px solid rgba(255,255,255,0.18)",

                borderRadius: {
                  xs: "40px",
                  md: "32px",
                },

                backdropFilter: "blur(14px)",

                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.12)",

                px: {
                  xs: 2.5,
                  md: 8,
                },

                py: {
                  xs: 3,
                  md: 8,
                },

                pt: {
                  xs: 3,
                  md: 10,
                },

                mx: "auto",
                maxWidth: {
                  xs: "100%",
                  md: "100%",
                }
              }}
            >
              <Typography
                variant="h1"

                sx={{

                  color: "white",

                  fontSize: {
                    xs: "4rem",
                    sm: "4.8rem",
                    md: "6rem",
                  },

                  lineHeight: 1.02,

                  letterSpacing: "-0.03em",

                  // Manipulation point:
                  // reduce xs size if still too large
                }}
              >
                Growing Stronger
                <br />

                <Box
                  component="span"
                  sx={{
                    color: "#4CAF50",
                  }}
                >
                  Minds,
                </Box>

                <br />

                One Life at a Time
              </Typography>

              <Typography
                sx={{

                  color: "rgba(255,255,255,0.92)",

                  mt: 3,

                  maxWidth: "680px",

                  fontSize: {
                    xs: "1rem",
                    md: "1.15rem",
                  },

                  lineHeight: 1.9,
                }}
              >
                Professional mental wellness support,
                counseling and growth-centered care
                designed to help individuals,
                families and communities thrive.
              </Typography>
            </Box>
          </Grid>



          {/* RIGHT CTA COLUMN */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{

              display: "flex",

              justifyContent: "flex-end",

              alignItems: "flex-start",

              pt: {
                xs: 0,
                md: 6,
              },

              // Manipulation point:
              // reduce md value
              // if CTA still too low
            }}
          >
            <Stack
              spacing={{
                xs: 2,
                md: 4,
              }}
              sx={{
                width: {
                  xs: "100%",
                  sm: "340px",
                  md: "320px",
                },

                alignItems: {
                  xs: "center",
                  md: "stretch",
                },
              }}
            >
              {/* CTA 1 */}
              <Box
                sx={{
                  background: "rgba(255,255,255,0.06)",

                  border: "1px solid rgba(255,255,255,0.18)",

                  borderRadius: {
                    xs: "32px",
                    md: "28px",
                  },

                  p: {
                    xs: 3,
                    md: 4,
                  },

                  backdropFilter: "blur(14px)",

                  boxShadow:
                    "0 20px 40px rgba(0,0,0,0.10)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "white",
                    mb: 2,
                  }}
                >
                  We love listening to you
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate("/contact")}
                  sx={{

                    px: {
                      xs: 4,
                      md: 5,
                    },

                    py: {
                      xs: 1.2,
                      md: 1.5,
                    },

                    borderRadius: "999px",

                    fontSize: {
                      xs: "1rem",
                      md: "1.05rem",
                    },

                    fontWeight: 700,
                  }}
                >
                  Get Support
                </Button>
              </Box>


              {/* CTA 2 */}
              <Box
                sx={{
                  background: "rgba(255,255,255,0.06)",

                  border: "1px solid rgba(255,255,255,0.18)",

                  borderRadius: {
                    xs: "32px",
                    md: "28px",
                  },

                  p: {
                    xs: 3,
                    md: 4,
                  },

                  backdropFilter: "blur(14px)",

                  boxShadow:
                    "0 20px 40px rgba(0,0,0,0.10)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "white",
                    mb: 2,
                  }}
                >
                  Tailored specifically for you
                </Typography>

                <Button
                  variant="outlined"
                  sx={{

                    px: {
                      xs: 4,
                      md: 5,
                    },

                    py: {
                      xs: 1.2,
                      md: 1.5,
                    },

                    borderRadius: "999px",

                    fontSize: {
                      xs: "1rem",
                      md: "1.05rem",
                    },

                    fontWeight: 700,
                  }}
                  onClick={() => navigate("/programs")}
                >
                  View Programs
                </Button>
              </Box>

            </Stack>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
