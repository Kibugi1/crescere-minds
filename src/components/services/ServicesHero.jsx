import {
    Box,
    Button,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

import SectionHeader from
    "../common/typography/SectionHeader";

export default function ServicesHero() {
    return (
        <Box
            sx={{
                backgroundColor: "#FFFFFF",

                minHeight: {
                    xs: "auto",
                    md: "80vh",
                },

                display: "flex",

                alignItems: "center",

                py: {
                    xs: 10,
                    md: 14,
                },
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
                >

                    {/* LEFT CONTENT */}

                    <Grid size={{ xs: 12, md: 6 }}>

                        <SectionHeader
                            eyebrow="OUR SERVICES"

                            title="Support designed for healing, growth, and emotional wellness."

                            description="
                Crescere Minds offers compassionate
                mental wellness support tailored
                to individuals, couples, families,
                teens, and communities navigating
                emotional and psychological challenges.
              "

                            titleVariant="h1"

                            maxWidth="650px"
                        />



                        <Stack
                            direction={{
                                xs: "column",
                                sm: "row",
                            }}

                            spacing={2}
                        >

                            <Button
                                variant="contained"
                                size="large"
                            >
                                Get Support
                            </Button>



                            <Button
                                variant="outlined"
                                size="large"
                            >
                                Explore Programs
                            </Button>

                        </Stack>

                    </Grid>



                    {/* RIGHT VISUAL */}

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Box
                            sx={{
                                minHeight: {
                                    xs: 320,
                                    md: 540,
                                },

                                borderRadius: "40px",

                                background:
                                    "linear-gradient(135deg, #F3FBF5 0%, #E8F5E9 100%)",

                                boxShadow:
                                    "0 20px 60px rgba(0,0,0,0.05)",

                                display: "flex",

                                alignItems: "center",

                                justifyContent: "center",

                                position: "relative",

                                overflow: "hidden",
                            }}
                        >

                            {/* DECORATIVE SHAPES */}

                            <Box
                                sx={{
                                    position: "absolute",

                                    width: 240,
                                    height: 240,

                                    borderRadius: "50%",

                                    backgroundColor:
                                        "rgba(76,175,80,0.12)",

                                    top: -40,
                                    left: -40,
                                }}
                            />



                            <Box
                                sx={{
                                    position: "absolute",

                                    width: 180,
                                    height: 180,

                                    borderRadius: "50%",

                                    backgroundColor:
                                        "rgba(46,125,50,0.10)",

                                    bottom: 30,
                                    right: 30,
                                }}
                            />



                            <Typography
                                variant="h4"
                                sx={{
                                    position: "relative",

                                    zIndex: 2,

                                    color: "primary.main",

                                    textAlign: "center",

                                    maxWidth: "320px",

                                    px: 3,
                                }}
                            >
                                Professional support for
                                healthier minds, stronger
                                relationships, and resilient
                                communities.
                            </Typography>

                        </Box>

                    </Grid>

                </Grid>

            </Container>

        </Box>
    );
}