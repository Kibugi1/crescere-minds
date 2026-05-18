import {
    Box,
    Button,
    Container,
    Grid,
    Stack,
    TextField,
} from "@mui/material";

import SectionHeader from
    "../common/typography/SectionHeader";

export default function ContactFormSection() {
    return (
        <Box
            sx={{
                backgroundColor: "#FFFFFF",

                py: {
                    xs: 10,
                    md: 16,
                },
            }}
        >

            <Container maxWidth="lg">

                <Grid
                    container

                    spacing={{
                        xs: 6,
                        md: 10,
                    }}

                    alignItems="center"
                >

                    {/* LEFT */}

                    <Grid size={{ xs: 12, md: 5 }}>

                        <SectionHeader
                            eyebrow="SEND A MESSAGE"

                            title="Let’s begin the conversation."

                            description="
                Whether you are seeking support,
                guidance, collaboration, or simply
                want to learn more, we would love
                to hear from you.
              "

                            titleVariant="h2"

                            maxWidth="500px"
                        />

                    </Grid>



                    {/* RIGHT FORM */}

                    <Grid size={{ xs: 12, md: 7 }}>

                        <Box
                            sx={{
                                backgroundColor:
                                    "background.subtle",

                                borderRadius: "32px",

                                p: {
                                    xs: 4,
                                    md: 6,
                                },
                            }}
                        >

                            <Stack spacing={3}>

                                <TextField
                                    fullWidth
                                    label="Full Name"
                                />



                                <TextField
                                    fullWidth
                                    label="Email Address"
                                />



                                <TextField
                                    fullWidth
                                    label="Subject"
                                />



                                <TextField
                                    fullWidth

                                    multiline

                                    rows={5}

                                    label="Your Message"
                                />



                                <Button
                                    variant="contained"

                                    size="large"
                                >
                                    Send Message
                                </Button>

                            </Stack>

                        </Box>

                    </Grid>

                </Grid>

            </Container>

        </Box>
    );
}