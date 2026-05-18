import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
} from "@mui/material";

export default function FinalCTA() {
    return (
        <Box
            sx={{
                backgroundColor: "primary.main",

                py: {
                    xs: 10,
                    md: 14,
                },

                textAlign: "center",
            }}
        >

            <Container maxWidth="md">

                <Typography
                    variant="h2"
                    sx={{
                        color: "white",

                        mb: 3,
                    }}
                >
                    You do not have to
                    navigate life alone.
                </Typography>



                <Typography
                    variant="body1"
                    sx={{
                        color: "rgba(255,255,255,0.85)",

                        maxWidth: "700px",

                        mx: "auto",

                        lineHeight: 2,

                        mb: 5,
                    }}
                >
                    Crescere Minds is here to support
                    healing, emotional wellness, growth,
                    and meaningful human connection every
                    step of the journey.
                </Typography>



                <Stack
                    direction={{
                        xs: "column",
                        sm: "row",
                    }}

                    spacing={2}

                    justifyContent="center"
                >

                    <Button
                        variant="contained"

                        size="large"

                        sx={{
                            backgroundColor: "#FFFFFF",

                            color: "primary.main",

                            "&:hover": {
                                backgroundColor: "#F5F5F5",
                            },
                        }}
                    >
                        Get Support
                    </Button>



                    <Button
                        variant="outlined"

                        size="large"

                        sx={{
                            color: "#FFFFFF",

                            borderColor: "#FFFFFF",

                            "&:hover": {
                                borderColor: "#FFFFFF",

                                backgroundColor:
                                    "rgba(255,255,255,0.08)",
                            },
                        }}
                    >
                        Contact Us
                    </Button>

                </Stack>

            </Container>

        </Box>
    );
}