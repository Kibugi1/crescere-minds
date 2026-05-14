import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import heroDesktop from "../../assets/images/hero-desktop.png";
import heroMobile from "../../assets/images/hero-mobile.png";

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",

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

        display: "flex",
        alignItems: "center",

        py: {
          xs: 14,
          md: 10,
        },
      }}
    >
      <Container>
        {/* MAIN HERO CARD */}
        <Box
          sx={{
            border: "2px solid rgba(255,255,255,0.6)",
            borderRadius: {
              xs: 5,
              md: 8,
            },
            backdropFilter: "blur(3px)",

            px: {
              xs: 3,
              md: 8,
            },

            py: {
              xs: 5,
              md: 8,
            },

            textAlign: "center",

            maxWidth: "1000px",
            /*mx: "auto",*/
            ml: "0px",
            mt: 12,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontSize: {
                xs: "3.2rem",
                sm: "4rem",
                md: "5.5rem",
              },

              lineHeight: 1,
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
            variant="body1"
            sx={{
              color: "white",
              maxWidth: "700px",
              mx: "auto",
              mt: 4,
              fontSize: {
                xs: "1rem",
                md: "1.2rem",
              },
            }}
          >
            Professional mental wellness support,
            counseling, and growth-centered care
            designed to help individuals,
            families, and communities thrive.
          </Typography>
        </Box>

        {/* CTA CARDS */}
        <Grid
          container
          spacing={{
            xs: 2,
            md: 4,
          }}
          sx={{
            mt: {
              xs: 1,
              md: 12,
            },
          }}
        >
          {/* FIRST CTA */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                border: "2px solid rgba(255,255,255,0.6)",
                borderRadius: 6,
                p: {
                  xs: 3,
                  md: 4,
                },
                backdropFilter: "blur(3px)",
                textAlign: "center",
                mx: "auto",
                maxWidth: {
                  xs: "340px",
                  md: "100%",
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  mb: 3,
                }}
              >
                We love listening to you
              </Typography>

              <Button
                variant="contained"
                color="primary"
              >
                Get Support
              </Button>
            </Box>
          </Grid>

          {/* SECOND CTA */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                border: "2px solid rgba(255,255,255,0.6)",
                borderRadius: 6,
                p: {
                  xs: 3,
                  md: 4,
                },
                backdropFilter: "blur(3px)",
                textAlign: "center",
                mx: "auto",
                maxWidth: {
                  xs: "340px",
                  md: "100%",
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  mb: 3,
                }}
              >
                Tailored specifically for you
              </Typography>

              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                }}
              >
                View Programs
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
