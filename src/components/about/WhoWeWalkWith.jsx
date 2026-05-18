import {
    Box,
    Container,
    Grid,
} from "@mui/material";

import SectionHeader from
    "../common/typography/SectionHeader";

import AudienceCard from
    "../common/cards/AudienceCard";

export default function WhoWeWalkWith() {
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
                    eyebrow="WHO WE WALK WITH"

                    title="Supporting people through every stage of life."

                    description="
            Crescere Minds is committed to
            providing emotional and psychological
            support tailored to diverse needs,
            relationships, and life experiences.
          "

                    align="center"

                    maxWidth="760px"
                />



                <Grid
                    container

                    spacing={{
                        xs: 3,
                        md: 5,
                    }}
                >

                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <AudienceCard
                            title="Teens"

                            description="
                Helping young people navigate
                emotional growth, identity,
                pressure, anxiety, and life
                transitions with confidence.
              "
                        />
                    </Grid>



                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <AudienceCard
                            title="Couples & Marriages"

                            description="
                Supporting healthier
                communication, emotional
                connection, conflict resolution,
                and relationship wellness.
              "
                        />
                    </Grid>



                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <AudienceCard
                            title="Families"

                            description="
                Helping families strengthen
                emotional bonds, navigate
                challenges, and create healthier
                support systems together.
              "
                        />
                    </Grid>



                    <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                        <AudienceCard
                            title="Individuals"

                            description="
                Providing compassionate guidance
                for emotional healing, personal
                growth, self-awareness, and
                mental wellness journeys.
              "
                        />
                    </Grid>



                    <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                        <AudienceCard
                            title="Communities"

                            description="
                Building emotionally resilient
                communities through education,
                wellness programs, support
                initiatives, and shared healing.
              "
                        />
                    </Grid>

                </Grid>

            </Container>

        </Box>
    );
}