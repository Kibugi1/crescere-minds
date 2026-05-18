import {
    Box,
    Container,
    Typography,
} from "@mui/material";

import SectionHeader from
    "../common/typography/SectionHeader";

export default function WhySeekSupport() {
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

            <Container maxWidth="md">

                <SectionHeader
                    eyebrow="WHY SEEK SUPPORT"

                    title="Seeking help is a sign of strength, not weakness."

                    description="
            Emotional wellness matters at every
            stage of life, and support can make
            healing and growth feel less overwhelming.
          "

                    align="center"
                />



                <Typography
                    variant="body1"
                    sx={{
                        textAlign: "center",

                        lineHeight: 2,

                        color: "text.secondary",
                    }}
                >
                    At Crescere Minds, we believe everyone
                    deserves spaces where they feel heard,
                    supported, respected, and empowered to
                    navigate life’s emotional challenges
                    with dignity and hope.
                </Typography>

            </Container>

        </Box>
    );
}