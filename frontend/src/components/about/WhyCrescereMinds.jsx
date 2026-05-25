import {
    Box,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

import SectionHeader from
    "../common/typography/SectionHeader";

export default function WhyCrescereMinds() {
    return (
        <Box
            sx={{
                backgroundColor: "background.subtle",

                py: {
                    xs: 10,
                    md: 16,
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
                            eyebrow="WHY CRESCERE MINDS"

                            title="Support rooted in empathy, trust, and real human connection."

                            description="
                We believe mental wellness support
                should feel safe, compassionate,
                accessible, and deeply personal.
              "

                            titleVariant="h2"

                            maxWidth="650px"
                        />



                        <Typography
                            variant="body1"
                            sx={{
                                maxWidth: "650px",

                                color: "text.secondary",

                                lineHeight: 2,
                            }}
                        >
                            At Crescere Minds, we prioritize
                            emotional safety, dignity, and
                            genuine connection. Our approach
                            combines professional guidance with
                            compassionate care to create spaces
                            where healing, growth, and resilience
                            can truly flourish.
                        </Typography>

                    </Grid>



                    {/* RIGHT FEATURES */}

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Stack
                            spacing={3}
                        >

                            <Box
                                sx={{
                                    backgroundColor:
                                        "background.paper",

                                    borderRadius: "28px",

                                    p: 4,

                                    boxShadow:
                                        "0 12px 40px rgba(0,0,0,0.05)",
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{ mb: 1 }}
                                >
                                    Safe & Confidential
                                </Typography>

                                <Typography
                                    variant="body1"
                                >
                                    We create emotionally safe
                                    environments where individuals
                                    feel respected, heard, and
                                    protected.
                                </Typography>
                            </Box>



                            <Box
                                sx={{
                                    backgroundColor:
                                        "background.paper",

                                    borderRadius: "28px",

                                    p: 4,

                                    boxShadow:
                                        "0 12px 40px rgba(0,0,0,0.05)",
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{ mb: 1 }}
                                >
                                    Growth-Centered Care
                                </Typography>

                                <Typography
                                    variant="body1"
                                >
                                    We focus not only on healing,
                                    but also emotional growth,
                                    resilience, and long-term
                                    wellness.
                                </Typography>
                            </Box>



                            <Box
                                sx={{
                                    backgroundColor:
                                        "background.paper",

                                    borderRadius: "28px",

                                    p: 4,

                                    boxShadow:
                                        "0 12px 40px rgba(0,0,0,0.05)",
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{ mb: 1 }}
                                >
                                    Community & Connection
                                </Typography>

                                <Typography
                                    variant="body1"
                                >
                                    We believe stronger emotional
                                    support systems create healthier,
                                    more resilient communities.
                                </Typography>
                            </Box>

                        </Stack>

                    </Grid>

                </Grid>

            </Container>

        </Box>
    );
}