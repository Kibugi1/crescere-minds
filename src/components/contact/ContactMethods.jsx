import {
    Box,
    Container,
    Grid,
    Typography,
} from "@mui/material";

import SectionHeader from
    "../common/typography/SectionHeader";

export default function ContactMethods() {
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
                            sx={{
                                backgroundColor:
                                    "background.paper",

                                borderRadius: "28px",

                                p: 5,

                                height: "100%",
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
                            sx={{
                                backgroundColor:
                                    "background.paper",

                                borderRadius: "28px",

                                p: 5,

                                height: "100%",
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
                                +254 700 000 000
                            </Typography>

                        </Box>

                    </Grid>



                    <Grid size={{ xs: 12, md: 4 }}>

                        <Box
                            sx={{
                                backgroundColor:
                                    "background.paper",

                                borderRadius: "28px",

                                p: 5,

                                height: "100%",
                            }}
                        >

                            <Typography
                                variant="h4"
                                sx={{ mb: 2 }}
                            >
                                Community Support
                            </Typography>

                            <Typography
                                variant="body1"
                            >
                                Available through workshops,
                                wellness sessions, and community
                                initiatives.
                            </Typography>

                        </Box>

                    </Grid>

                </Grid>

            </Container>

        </Box>
    );
}