import {
    Box,
    Button,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

export default function AboutHero() {
    return (
        <Box
            sx={{
                backgroundColor: "#FFFFFF",

                minHeight: {
                    xs: "auto",
                    md: "85vh",
                },

                display: "flex",
                alignItems: "center",

                py: {
                    xs: 10,
                    md: 14,
                },

                overflow: "hidden",

                // Manipulation point:
                // increase py to create more vertical spacing

                // Manipulation point:
                // change background color here
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

                // Manipulation point:
                // increase spacing to separate left and right sections more
                >

                    {/* LEFT CONTENT */}

                    <Grid item xs={12} md={6}>

                        <Box>

                            <Typography
                                variant="overline"
                                sx={{
                                    color: "#4CAF50",

                                    letterSpacing: 2,

                                    fontWeight: 700,

                                    // Manipulation point:
                                    // increase letterSpacing for more elegant feel
                                }}
                            >
                                ABOUT CRESCERE MINDS
                            </Typography>



                            <Typography
                                variant="h1"
                                sx={{
                                    color: "#2B2B2B",

                                    fontSize: {
                                        xs: "2.5rem",
                                        md: "4.8rem",
                                    },

                                    lineHeight: 1.1,

                                    mt: 2,

                                    mb: 3,

                                    // Manipulation point:
                                    // increase mt to move heading downward

                                    // Manipulation point:
                                    // increase mb to create more space below heading
                                }}
                            >
                                Healing Minds.
                                <br />

                                Strengthening Lives.
                            </Typography>



                            <Typography
                                sx={{
                                    color: "#5B5B5B",

                                    fontSize: {
                                        xs: "1rem",
                                        md: "1.15rem",
                                    },

                                    maxWidth: "600px",

                                    lineHeight: 1.9,

                                    mb: 5,

                                    // Manipulation point:
                                    // reduce maxWidth to make text area narrower

                                    // Manipulation point:
                                    // increase lineHeight for more breathing room
                                }}
                            >
                                Crescere Minds exists to create safe,
                                supportive, and empowering spaces for
                                individuals, families, and communities
                                to grow emotionally, mentally, and
                                psychologically.
                            </Typography>



                            {/* CTA BUTTONS */}

                            <Stack
                                direction={{
                                    xs: "column",
                                    sm: "row",
                                }}

                                spacing={2}

                            // Manipulation point:
                            // spacing controls gap between buttons

                            // xs = stacked vertically on phones
                            // sm = side-by-side on larger screens
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
                                    Learn More
                                </Button>

                            </Stack>

                        </Box>

                    </Grid>



                    {/* RIGHT ILLUSTRATION AREA */}

                    <Grid item xs={12} md={6}>

                        <Box
                            sx={{
                                backgroundColor: "#F3FBF5",

                                borderRadius: "40px",

                                minHeight: {
                                    xs: 300,
                                    md: 550,
                                },

                                boxShadow:
                                    "0 20px 60px rgba(0,0,0,0.06)",

                                display: "flex",

                                alignItems: "center",

                                justifyContent: "center",

                                overflow: "hidden",

                                p: 4,

                                // Manipulation point:
                                // increase minHeight to make illustration area taller

                                // Manipulation point:
                                // increase borderRadius for softer appearance

                                // Manipulation point:
                                // change justifyContent to move content horizontally

                                // Manipulation point:
                                // change alignItems to move content vertically
                            }}
                        >

                            <Typography
                                sx={{
                                    color: "#4CAF50",
                                }}
                            >
                                Illustration Placeholder
                            </Typography>

                        </Box>

                    </Grid>

                </Grid>

            </Container>
        </Box>
    );
}