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

export default function ProgramsHero() {
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

                pt: {
                    xs: 14,
                    md: 18,
                },

                pb: {
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

                    {/* LEFT */}

                    <Grid size={{ xs: 12, md: 6 }}>

                        <SectionHeader
                            eyebrow="OUR PROGRAMS"

                            title="Programs designed to nurture healthier minds and communities."

                            description="
                Crescere Minds develops impactful
                wellness programs, workshops,
                and community-centered initiatives
                that promote emotional growth,
                resilience, and meaningful support.
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
                                Explore Programs
                            </Button>



                            <Button
                                variant="outlined"
                                size="large"
                            >
                                Partner With Us
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

                                position: "relative",

                                overflow: "hidden",

                                display: "flex",

                                alignItems: "center",

                                justifyContent: "center",

                                boxShadow:
                                    "0 20px 60px rgba(0,0,0,0.05)",
                            }}
                        >

                            <Box
                                sx={{
                                    position: "absolute",

                                    width: 220,
                                    height: 220,

                                    borderRadius: "50%",

                                    backgroundColor:
                                        "rgba(76,175,80,0.12)",

                                    top: -30,
                                    left: -30,
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

                                    maxWidth: "340px",

                                    px: 3,
                                }}
                            >
                                Empowering emotional wellness
                                through programs, education,
                                connection, and support.
                            </Typography>

                        </Box>

                    </Grid>

                </Grid>

            </Container>

        </Box>
    );
}