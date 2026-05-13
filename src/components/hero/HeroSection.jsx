import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import heroBg from "../../assets/images/hero-bg.png";

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",

        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.45),
            rgba(0,0,0,0.45)
          ),
          url(${heroBg})
        `,

        backgroundSize: "cover",
        backgroundPosition: "center",

        display: "flex",
        alignItems: "center",

        py: 10,
      }}
    >
      <Container>
        {/* MAIN HERO CARD */}
        <Box
          sx={{
            border: "2px solid rgba(255,255,255,0.6)",
            borderRadius: 8,
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
            mx: "auto",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "white",
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
          spacing={4}
          sx={{
            mt: 4,
          }}
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                border: "2px solid rgba(255,255,255,0.6)",
                borderRadius: 6,
                p: 4,
                backdropFilter: "blur(3px)",
                textAlign: "center",
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

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                border: "2px solid rgba(255,255,255,0.6)",
                borderRadius: 6,
                p: 4,
                backdropFilter: "blur(3px)",
                textAlign: "center",
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
