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
          <Grid item xs={12} md={8}>
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
                  xs: 4,
                  md: 8,
                },

                pt: {
                  xs: 12,
                  md: 16,
                },

                mx: "auto",
                maxWidth: {
                  xs: "340px",
                  md: "100%",
                }
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
                sx={{
                  color: "white",
                  mt: 3,
                  maxWidth: "700px",
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
              justifyContent: "flex-end", // ADDED: pushes CTA column right
            }}
          >
            <Stack
              spacing={{
                xs: 2,
                md: 4,
              }}
              sx={{
                width: {
                  xs: "320px",
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
                  border: "2px solid rgba(255,255,255,0.6)",
                  borderRadius: 6,
                  p: 4,
                  backdropFilter: "blur(3px)",
                  textAlign: "center",
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
                >
                  Get Support
                </Button>
              </Box>


              {/* CTA 2 */}
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
                    color: "white",
                    borderColor: "white",
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
