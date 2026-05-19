import {
    Box,
    Container,
    Divider,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

const footerLinks = {
    navigation: [
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
            label: "Contact",
            path: "/contact",
        },
    ],

    support: [
        "Individual Counseling",
        "Teen Wellness",
        "Couples Support",
        "Community Wellness",
    ],
};

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: "#F8FBF8",

                pt: {
                    xs: 10,
                    md: 14,
                },

                pb: 4,

                borderTop:
                    "1px solid rgba(46,125,50,0.08)",
            }}
        >

            <Container maxWidth="xl">

                <Grid
                    container

                    spacing={{
                        xs: 6,
                        md: 10,
                    }}
                >

                    {/* BRAND */}

                    <Grid size={{ xs: 12, md: 4 }}>

                        <Typography
                            variant="h3"

                            sx={{
                                color: "primary.main",

                                mb: 3,
                            }}
                        >
                            Crescere Minds
                        </Typography>



                        <Typography
                            variant="body1"

                            sx={{
                                color: "text.secondary",

                                lineHeight: 2,

                                maxWidth: "340px",
                            }}
                        >
                            Supporting emotional wellness,
                            healing, growth, and stronger
                            communities through compassionate
                            mental wellness care.
                        </Typography>

                    </Grid>



                    {/* NAVIGATION */}

                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>

                        <Typography
                            variant="h4"

                            sx={{
                                mb: 3,
                            }}
                        >
                            Navigation
                        </Typography>



                        <Stack spacing={2}>

                            {footerLinks.navigation.map((item) => (
                                <Typography
                                    key={item.label}

                                    component={Link}

                                    to={item.path}

                                    sx={{
                                        textDecoration: "none",

                                        color: "text.secondary",

                                        transition:
                                            "color 0.3s ease",

                                        "&:hover": {
                                            color: "primary.main",
                                        },
                                    }}
                                >
                                    {item.label}
                                </Typography>
                            ))}

                        </Stack>

                    </Grid>



                    {/* SERVICES */}

                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>

                        <Typography
                            variant="h4"

                            sx={{
                                mb: 3,
                            }}
                        >
                            Support Areas
                        </Typography>



                        <Stack spacing={2}>

                            {footerLinks.support.map((item) => (
                                <Typography
                                    key={item}

                                    sx={{
                                        color: "text.secondary",
                                    }}
                                >
                                    {item}
                                </Typography>
                            ))}

                        </Stack>

                    </Grid>



                    {/* CONTACT */}

                    <Grid size={{ xs: 12, md: 3 }}>

                        <Typography
                            variant="h4"

                            sx={{
                                mb: 3,
                            }}
                        >
                            Contact
                        </Typography>



                        <Stack spacing={2}>

                            <Typography
                                sx={{
                                    color: "text.secondary",
                                }}
                            >
                                support@crescere.org
                            </Typography>



                            <Typography
                                sx={{
                                    color: "text.secondary",
                                }}
                            >
                                +254 700 000 000
                            </Typography>



                            <Typography
                                sx={{
                                    color: "text.secondary",

                                    lineHeight: 1.8,
                                }}
                            >
                                Supporting healthier minds,
                                stronger relationships, and
                                resilient communities.
                            </Typography>

                        </Stack>

                    </Grid>

                </Grid>



                <Divider
                    sx={{
                        my: {
                            xs: 6,
                            md: 8,
                        },
                    }}
                />



                {/* BOTTOM BAR */}

                <Stack
                    direction={{
                        xs: "column",
                        sm: "row",
                    }}

                    spacing={2}

                    justifyContent="space-between"

                    alignItems={{
                        xs: "flex-start",
                        sm: "center",
                    }}
                >

                    <Typography
                        sx={{
                            color: "text.secondary",
                        }}
                    >
                        © 2026 Crescere Minds.
                        All rights reserved.
                    </Typography>



                    <Stack
                        direction="row"

                        spacing={3}
                    >

                        <Typography
                            sx={{
                                color: "text.secondary",

                                cursor: "pointer",
                            }}
                        >
                            Privacy Policy
                        </Typography>



                        <Typography
                            sx={{
                                color: "text.secondary",

                                cursor: "pointer",
                            }}
                        >
                            Terms
                        </Typography>

                    </Stack>

                </Stack>

            </Container>

        </Box>
    );
}