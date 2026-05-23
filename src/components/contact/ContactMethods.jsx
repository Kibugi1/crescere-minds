import {
    Box,
    Container,
    Grid,
    Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import SectionHeader from
    "../common/typography/SectionHeader";

export default function ContactMethods() {
    const navigate = useNavigate();
    return (

        <Box
            id="contact-methods"
            sx={{
                backgroundColor: "background.subtle",

                py: {
                    xs: 10,
                    md: 16,
                },
            }}
        >

            <Container maxWidth="xl">

                <SectionHeader
                    eyebrow="WAYS TO CONNECT"

                    title="Reach us through the channels most comfortable for you."

                    description="
            We are committed to creating
            approachable and accessible
            communication spaces for support
            and wellness conversations.
          "

                    align="center"

                    maxWidth="760px"
                />



                <Grid
                    container

                    spacing={{
                        xs: 4,
                        md: 5,
                    }}
                >

                    <Grid size={{ xs: 12, md: 4 }}>

                        <Box
                            component="a"

                            href="mailto:support@crescere.org"

                            sx={{

                                backgroundColor:
                                    "background.paper",

                                borderRadius: "28px",

                                p: 5,

                                height: "100%",
                                display: "block",
                                textDecoration: "none",

                                cursor: "pointer",

                                transition:
                                    "all 0.3s ease",

                                border:
                                    "2px solid transparent",

                                "&:hover": {
                                    transform:
                                        "translateY(-4px)",

                                    border:
                                        "2px solid #2E7D32",

                                    boxShadow:
                                        "0 16px 40px rgba(46,125,50,0.12)",
                                },
                            }}
                        >

                            <Typography
                                variant="h4"
                                sx={{ mb: 2 }}
                            >
                                Email
                            </Typography>

                            <Typography
                                variant="body1"
                            >
                                support@crescere.org
                            </Typography>

                        </Box>

                    </Grid>



                    <Grid size={{ xs: 12, md: 4 }}>

                        <Box
                            component="a"

                            href="tel:+254726373321"

                            sx={{
                                backgroundColor:
                                    "background.paper",

                                borderRadius: "28px",

                                p: 5,

                                height: "100%",

                                display: "block",

                                textDecoration: "none",

                                cursor: "pointer",

                                transition:
                                    "all 0.3s ease",

                                border:
                                    "2px solid transparent",

                                "&:hover": {
                                    transform:
                                        "translateY(-4px)",

                                    border:
                                        "2px solid #2E7D32",

                                    boxShadow:
                                        "0 16px 40px rgba(46,125,50,0.12)",
                                },
                            }}
                        >

                            <Typography
                                variant="h4"
                                sx={{ mb: 2 }}
                            >
                                Phone
                            </Typography>

                            <Typography
                                variant="body1"
                            >
                                +254 726 373 321
                            </Typography>

                        </Box>

                    </Grid>



                    <Grid size={{ xs: 12, md: 4 }}>

                        <Box
                            component="a"

                            href="https://maps.app.goo.gl/2ho4JGQ9btcSbX7R6"

                            target="_blank"

                            rel="noopener noreferrer"

                            sx={{
                                backgroundColor:
                                    "background.paper",

                                borderRadius: "28px",

                                p: 5,

                                height: "100%",

                                display: "block",

                                textDecoration: "none",

                                cursor: "pointer",

                                transition:
                                    "all 0.3s ease",

                                border:
                                    "2px solid transparent",

                                "&:hover": {

                                    transform:
                                        "translateY(-4px)",

                                    border:
                                        "2px solid #2E7D32",

                                    boxShadow:
                                        "0 16px 40px rgba(46,125,50,0.12)",
                                },
                            }}
                        >

                            <Typography
                                variant="h4"
                                sx={{
                                    mb: 2,
                                    color: "text.primary",
                                }}
                            >
                                Visit Us
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: "text.secondary",
                                }}
                            >
                                Ruiru, Kenya

                                <br /><br />

                                Available for wellness sessions,
                                workshops, community support,
                                and collaborative initiatives.
                            </Typography>
                        </Box>

                    </Grid>

                </Grid>

            </Container>

        </Box>
    );
}