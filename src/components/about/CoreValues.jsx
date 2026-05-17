import {
    Box,
    Container,
    Grid,
} from "@mui/material";

import SectionHeader from
    "../common/typography/SectionHeader";

import ValueCard from
    "../common/cards/ValueCard";

export default function CoreValues() {
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
                    eyebrow="CORE VALUES"

                    title="The principles that guide our care."

                    description="
            At Crescere Minds, every interaction,
            program, and support system is grounded
            in compassion, dignity, emotional safety,
            and human connection.
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

                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ValueCard
                            title="Compassion"

                            description="
                We approach every individual
                with kindness, understanding,
                patience, and genuine care.
              "
                        />
                    </Grid>



                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ValueCard
                            title="Empathy"

                            description="
                We listen deeply and create
                emotionally safe spaces where
                people feel heard and valued.
              "
                        />
                    </Grid>



                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ValueCard
                            title="Growth"

                            description="
                We believe healing and emotional
                wellness are lifelong journeys
                rooted in intentional growth.
              "
                        />
                    </Grid>



                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ValueCard
                            title="Confidentiality"

                            description="
                Trust is foundational to our work,
                and we prioritize emotional safety
                and privacy in every interaction.
              "
                        />
                    </Grid>



                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ValueCard
                            title="Community"

                            description="
                We believe stronger communities
                are built through emotional support,
                connection, and collective healing.
              "
                        />
                    </Grid>



                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <ValueCard
                            title="Hope"

                            description="
                We encourage resilience and believe
                every individual deserves support,
                healing, and renewed hope.
              "
                        />
                    </Grid>

                </Grid>

            </Container>

        </Box>
    );
}