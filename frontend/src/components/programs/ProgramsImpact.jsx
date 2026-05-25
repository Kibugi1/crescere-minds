import {
    Box,
    Container,
    Grid,
    Typography,
} from "@mui/material";

import SectionHeader from
    "../common/typography/SectionHeader";

const impactStats = [
    {
        number: "500+",
        label: "Lives Reached",
    },

    {
        number: "20+",
        label: "Community Programs",
    },

    {
        number: "100+",
        label: "Support Sessions",
    },

    {
        number: "10+",
        label: "Wellness Workshops",
    },
];

export default function ProgramsImpact() {
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
                    eyebrow="OUR IMPACT"

                    title="Creating meaningful emotional and community impact."

                    description="
            Crescere Minds continues to nurture
            healthier minds, stronger relationships,
            and resilient communities through
            compassionate wellness initiatives.
          "

                    align="center"

                    maxWidth="760px"
                />



                <Grid
                    container

                    spacing={{
                        xs: 3,
                        md: 4,
                    }}
                >

                    {impactStats.map((item) => (
                        <Grid
                            key={item.label}

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

                                    p: {
                                        xs: 4,
                                        md: 5,
                                    },

                                    textAlign: "center",

                                    height: "100%",
                                }}
                            >

                                <Typography
                                    variant="h2"
                                    sx={{
                                        color: "primary.main",

                                        mb: 2,
                                    }}
                                >
                                    {item.number}
                                </Typography>



                                <Typography
                                    variant="h4"
                                >
                                    {item.label}
                                </Typography>

                            </Box>

                        </Grid>
                    ))}

                </Grid>

            </Container>

        </Box>
    );
}