import {
    Box,
    Button,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import SectionHeader from
    "../common/typography/SectionHeader";

export default function ContactHero() {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                backgroundColor: "#FFFFFF",

                minHeight: {
                    xs: "auto",
                    md: "75vh",
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
            }
            }
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
                            eyebrow="CONTACT US"

                            title="Reach out for support, guidance, or connection."

                            description="
                Crescere Minds is here to provide
                safe, compassionate, and supportive
                spaces for healing, emotional wellness,
                and growth.
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
                                onClick={() => navigate("/contact#contact-form")}
                            >
                                Get Support
                            </Button>



                            <Button
                                variant="outlined"
                                size="large"
                                onClick={() => navigate("/contact#contact-methods")}
                            >
                                Learn More
                            </Button>

                        </Stack>

                    </Grid>



                    {/* RIGHT */}

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Box
                            sx={{
                                minHeight: {
                                    xs: 320,
                                    md: 520,
                                },

                                borderRadius: "40px",

                                background:
                                    "linear-gradient(135deg, #F3FBF5 0%, #E8F5E9 100%)",

                                display: "flex",

                                alignItems: "center",

                                justifyContent: "center",

                                position: "relative",

                                overflow: "hidden",

                                boxShadow:
                                    "0 20px 60px rgba(0,0,0,0.05)",
                            }}
                        >

                            <Typography
                                variant="h4"
                                sx={{
                                    color: "primary.main",

                                    textAlign: "center",

                                    maxWidth: "320px",

                                    px: 3,

                                    position: "relative",

                                    zIndex: 2,
                                }}
                            >
                                Every conversation begins
                                with compassion, safety,
                                and understanding.
                            </Typography>

                        </Box>

                    </Grid>

                </Grid>

            </Container>

        </Box >
    );
}