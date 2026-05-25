import {
    Box,
    Container,
    Grid,
} from "@mui/material";

import SectionHeader from
    "../common/typography/SectionHeader";

import InfoCard from
    "../common/cards/InfoCard";

export default function ServicesGrid() {
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
                    eyebrow="WHAT WE OFFER"

                    title="Support tailored to different emotional and mental wellness needs."

                    description="
            Our services are designed to provide
            safe, compassionate, and growth-centered
            support for individuals, relationships,
            families, and communities.
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

                    <Grid size={{ xs: 12, md: 6 }}>
                        <InfoCard
                            eyebrow="COUNSELING"

                            title="
                Individual Counseling
              "

                            description="
                Personalized emotional and
                psychological support focused
                on healing, self-awareness,
                resilience, and personal growth.
              "
                        />
                    </Grid>



                    <Grid size={{ xs: 12, md: 6 }}>
                        <InfoCard
                            eyebrow="TEEN SUPPORT"

                            title="
                Teen Mental Wellness
              "

                            description="
                Helping young people navigate
                emotional challenges, pressure,
                identity, anxiety, and life
                transitions in safe spaces.
              "
                        />
                    </Grid>



                    <Grid size={{ xs: 12, md: 6 }}>
                        <InfoCard
                            eyebrow="RELATIONSHIPS"

                            title="
                Couples & Marriage Support
              "

                            description="
                Strengthening communication,
                emotional connection, trust,
                and healthier relationship
                dynamics for couples.
              "
                        />
                    </Grid>



                    <Grid size={{ xs: 12, md: 6 }}>
                        <InfoCard
                            eyebrow="FAMILY CARE"

                            title="
                Family Wellness Support
              "

                            description="
                Supporting families through
                healthier communication,
                emotional healing, and
                stronger support systems.
              "
                        />
                    </Grid>

                </Grid>

            </Container>

        </Box>
    );
}