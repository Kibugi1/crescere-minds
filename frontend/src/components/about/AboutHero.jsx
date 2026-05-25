import {
    Box,
    Button,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

import SectionHeader from "../common/typography/SectionHeader";
import aboutheroimage from "../../assets/images/aboutimages/abouthero.webp";
import { useNavigate } from "react-router-dom";

export default function AboutHero() {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                backgroundColor: "#FFFFFF",

                minHeight: {
                    xs: "auto",
                    md: "85vh",
                },

                display: "flex",
                alignItems: "center",

                py: {
                    xs: 10,
                    md: 14,
                },

                pt: {
                    xs: 12,
                    md: 16,
                },

                overflow: "hidden",

                // Manipulation point:
                // increase py to create more vertical spacing

                // Manipulation point:
                // change background color here
            }}
        >
            <Container maxWidth="xl">

                <Grid
                    container
                    spacing={{
                        xs: 6,
                        md: 10,
                    }}
                    alignItems="center"

                // Manipulation point:
                // increase spacing to separate left and right sections more
                >

                    {/* LEFT CONTENT */}

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box>

                            <SectionHeader
                                eyebrow="ABOUT CRESCERE MINDS"

                                title={
                                    <>
                                        Healing Minds.
                                        <br />
                                        Strengthening Lives.
                                    </>
                                }

                                description="
        Crescere Minds exists to create safe,
        supportive, and empowering spaces for
        individuals, families, and communities
        to grow emotionally, mentally, and
        psychologically.
      "

                                titleVariant="h1"

                                maxWidth="600px"
                            />


                            {/* CTA BUTTONS */}

                            <Stack
                                direction={{
                                    xs: "column",
                                    sm: "row",
                                }}

                                spacing={2}

                            // Manipulation point:
                            // spacing controls gap between buttons

                            // xs = stacked vertically on phones
                            // sm = side-by-side on larger screens
                            >

                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={() => navigate("/contact")}
                                >
                                    Get Support
                                </Button>



                                <Button
                                    variant="outlined"
                                    size="large"
                                    onClick={() =>
                                        navigate("/about#who-we-are")
                                    }
                                >
                                    Learn More
                                </Button>

                            </Stack>

                        </Box>

                    </Grid>



                    {/* RIGHT ILLUSTRATION AREA */}

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Box
                            sx={{
                                backgroundImage: `
      linear-gradient(
        rgba(0,0,0,0.04),
        rgba(0,0,0,0.04)
      ),
      url(${aboutheroimage})
    `,

                                backgroundSize: "cover",

                                backgroundPosition: "center",

                                backgroundRepeat: "no-repeat",

                                borderRadius: "40px",

                                minHeight: {
                                    xs: 300,
                                    md: 550,
                                },

                                boxShadow:
                                    "0 20px 60px rgba(0,0,0,0.06)",

                                overflow: "hidden",

                                position: "relative",

                                // Manipulation point:
                                // increase minHeight to make image taller

                                // Manipulation point:
                                // change backgroundPosition
                                // e.g. "top", "center", "right"

                                // Manipulation point:
                                // reduce overlay darkness by lowering rgba values
                            }}
                        />


                    </Grid>

                </Grid>

            </Container>
        </Box>
    );
}