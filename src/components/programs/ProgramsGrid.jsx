import {
    Box,
    Container,
    Grid,
} from "@mui/material";

import SectionHeader from
    "../common/typography/SectionHeader";

import InfoCard from
    "../common/cards/InfoCard";

export default function ProgramsGrid() {
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
                    eyebrow="OUR INITIATIVES"

                    title="Programs that create lasting emotional impact."

                    description="
            Our programs are designed to foster
            healing, emotional awareness,
            resilience, and stronger support
            systems across different communities.
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
                            eyebrow="YOUTH WELLNESS"

                            title="
                Teen Emotional Wellness Programs
              "

                            description="
                Safe spaces and support initiatives
                focused on emotional growth,
                mental wellness awareness, and
                resilience for young people.
              "
                        />
                    </Grid>



                    <Grid size={{ xs: 12, md: 6 }}>
                        <InfoCard
                            eyebrow="RELATIONSHIPS"

                            title="
                Marriage & Relationship Workshops
              "

                            description="
                Workshops that strengthen healthy
                communication, emotional connection,
                trust, and relationship wellness.
              "
                        />
                    </Grid>



                    <Grid size={{ xs: 12, md: 6 }}>
                        <InfoCard
                            eyebrow="COMMUNITY"

                            title="
                Community Wellness Initiatives
              "

                            description="
                Programs designed to promote
                collective healing, emotional
                support, and healthier communities.
              "
                        />
                    </Grid>



                    <Grid size={{ xs: 12, md: 6 }}>
                        <InfoCard
                            eyebrow="EDUCATION"

                            title="
                Mental Wellness Awareness Sessions
              "

                            description="
                Educational sessions focused on
                emotional health, psychological
                awareness, stigma reduction,
                and wellness advocacy.
              "
                        />
                    </Grid>

                </Grid>

            </Container>

        </Box>
    );
}