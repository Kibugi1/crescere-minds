import {
    Box,
    Container,
    Grid,
    Typography,
} from "@mui/material";

import SectionHeader from
    "../common/typography/SectionHeader";

const steps = [
    "Reach Out",
    "Connect With Support",
    "Receive Guidance",
    "Grow & Heal",
];

export default function SupportProcess() {
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

            <Container maxWidth="xl">

                <SectionHeader
                    eyebrow="OUR PROCESS"

                    title="Simple steps toward emotional wellness."

                    description="
            Seeking support should feel safe,
            approachable, and empowering.
          "

                    align="center"

                    maxWidth="700px"
                />



                <Grid
                    container

                    spacing={{
                        xs: 3,
                        md: 4,
                    }}
                >

                    {steps.map((step, index) => (
                        <Grid
                            key={step}

                            size={{
                                xs: 12,
                                sm: 6,
                                md: 3,
                            }}
                        >

                            <Box
                                sx={{
                                    backgroundColor:
                                        "background.subtle",

                                    borderRadius: "28px",

                                    p: 5,

                                    textAlign: "center",

                                    height: "100%",
                                }}
                            >

                                <Typography
                                    variant="h2"
                                    sx={{
                                        color: "primary.light",

                                        mb: 2,
                                    }}
                                >
                                    0{index + 1}
                                </Typography>



                                <Typography
                                    variant="h4"
                                >
                                    {step}
                                </Typography>

                            </Box>

                        </Grid>
                    ))}

                </Grid>

            </Container>

        </Box>
    );
}