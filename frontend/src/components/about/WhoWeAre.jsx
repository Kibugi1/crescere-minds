import {
    Box,
    Container,
    Grid,
    Typography,
} from "@mui/material";

import SectionHeader from
    "../common/typography/SectionHeader";

export default function WhoWeAre() {
    return (
        <Box
            id="who-we-are"
            sx={{
                backgroundColor: "background.subtle",

                py: {
                    xs: 10,
                    md: 16,
                },

                overflow: "hidden",

                // Manipulation point:
                // increase py to create more vertical spacing

                // Manipulation point:
                // change backgroundColor for different section feel
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
                // increase spacing to separate left and right more
                >



                    {/* LEFT VISUAL AREA */}

                    <Grid item xs={12} md={5}>

                        <Box
                            sx={{
                                position: "relative",

                                minHeight: {
                                    xs: 320,
                                    md: 500,
                                },

                                borderRadius: "36px",

                                background:
                                    "linear-gradient(135deg, #E8F5E9 0%, #F3FBF5 100%)",

                                overflow: "hidden",

                                display: "flex",

                                alignItems: "center",

                                justifyContent: "center",

                                boxShadow:
                                    "0 20px 60px rgba(0,0,0,0.06)",

                                // Manipulation point:
                                // increase minHeight to make section taller

                                // Manipulation point:
                                // increase borderRadius for softer cards

                                // Manipulation point:
                                // change justifyContent for horizontal movement

                                // Manipulation point:
                                // change alignItems for vertical movement
                            }}
                        >

                            {/* DECORATIVE CIRCLES */}

                            <Box
                                sx={{
                                    position: "absolute",

                                    width: 220,
                                    height: 220,

                                    borderRadius: "50%",

                                    backgroundColor:
                                        "rgba(76,175,80,0.12)",

                                    top: -40,
                                    left: -40,

                                    // Manipulation point:
                                    // adjust top/left to move circle
                                }}
                            />



                            <Box
                                sx={{
                                    position: "absolute",

                                    width: 140,
                                    height: 140,

                                    borderRadius: "50%",

                                    backgroundColor:
                                        "rgba(46,125,50,0.10)",

                                    bottom: 30,
                                    right: 30,

                                    // Manipulation point:
                                    // adjust bottom/right to move circle
                                }}
                            />



                            <Typography
                                variant="h4"
                                sx={{
                                    color: "primary.main",

                                    position: "relative",

                                    zIndex: 2,

                                    textAlign: "center",

                                    px: 4,

                                    maxWidth: "320px",

                                    // Manipulation point:
                                    // reduce maxWidth to tighten text area
                                }}
                            >
                                Creating safe spaces
                                for healing, growth,
                                and emotional wellness.
                            </Typography>

                        </Box>

                    </Grid>



                    {/* RIGHT CONTENT */}

                    <Grid item xs={12} md={7}>

                        <SectionHeader
                            eyebrow="WHO WE ARE"

                            title="A compassionate space for healing and transformation."

                            description="
                Crescere Minds is a mental wellness and psychology organization
                committed to helping individuals, families, couples, teens,
                and communities navigate emotional and psychological challenges
                with care, dignity, and evidence-based support.
              "

                            titleVariant="h2"

                            maxWidth="700px"
                        />



                        <Typography
                            variant="body1"
                            sx={{
                                maxWidth: "700px",

                                color: "text.secondary",

                                lineHeight: 2,

                                // Manipulation point:
                                // increase lineHeight for more breathing room

                                // Manipulation point:
                                // reduce maxWidth for narrower text
                            }}
                        >
                            We believe mental wellness should feel safe,
                            accessible, and deeply human. Through counseling,
                            guidance, emotional support, and community-centered
                            programs, we aim to nurture healthier minds,
                            stronger relationships, and resilient communities.
                        </Typography>

                    </Grid>

                </Grid>

            </Container>

        </Box>
    );
}