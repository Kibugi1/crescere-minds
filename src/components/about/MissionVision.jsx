import {
    Box,
    Container,
    Grid,
} from "@mui/material";

import SectionHeader from
    "../common/typography/SectionHeader";

import InfoCard from
    "../common/cards/InfoCard";

export default function MissionVision() {
    return (
        <Box
            sx={{
                backgroundColor: "#FFFFFF",

                py: {
                    xs: 10,
                    md: 16,
                },

                // Manipulation point:
                // increase py for more vertical spacing
            }}
        >

            <Container maxWidth="xl">

                <SectionHeader
                    eyebrow="MISSION & VISION"

                    title="Driven by purpose. Guided by compassion."

                    description="
            Everything we do at Crescere Minds
            is rooted in emotional healing,
            psychological growth, and building
            healthier communities.
          "

                    align="center"

                    maxWidth="750px"
                />



                <Grid
                    container

                    spacing={{
                        xs: 4,
                        md: 6,
                    }}

                    alignItems="stretch"

                // Manipulation point:
                // increase spacing to separate cards more
                >

                    {/* MISSION CARD */}

                    <Grid item xs={12} md={6}>

                        <InfoCard
                            eyebrow="OUR MISSION"

                            title="
                To provide compassionate,
                accessible, and transformative
                mental wellness support.
              "

                            description="
                We are committed to helping
                individuals, couples, families,
                and communities navigate
                emotional and psychological
                challenges through safe,
                professional, and growth-centered
                care.
              "
                        />

                    </Grid>



                    {/* VISION CARD */}

                    <Grid item xs={12} md={6}>

                        <InfoCard
                            eyebrow="OUR VISION"

                            title="
                A world where mental wellness
                is embraced with dignity,
                support, and hope.
              "

                            description="
                We envision emotionally healthy
                individuals and resilient
                communities where people feel
                empowered to heal, grow,
                connect, and thrive without fear
                or stigma.
              "
                        />

                    </Grid>

                </Grid>

            </Container>

        </Box>
    );
}