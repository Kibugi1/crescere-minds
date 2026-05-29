import {
    Box,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

import ProgramCard from "./ProgramCard";



/* IMAGES */

import mindfulImg from
    "../../../assets/programs/mindful.jpg";

import teenImg from
    "../../../assets/programs/teen.jpg";

import stressImg from
    "../../../assets/programs/stress.jpg";

import sleepImg from
    "../../../assets/programs/sleep.jpg";



const programs = [

    {
        title: "Mindful Living Workshop",
        status: "Active",
        participants: 23,
        nextSession: "May 28, 2025",
        image: mindfulImg,
    },

    {
        title: "Teen Mental Wellness",
        status: "Active",
        participants: 45,
        nextSession: "Jun 02, 2025",
        image: teenImg,
    },

    {
        title: "Stress Management Program",
        status: "Draft",
        participants: 12,
        nextSession: "Not scheduled",
        image: stressImg,
    },

    {
        title: "Sleep Better Program",
        status: "Active",
        participants: 31,
        nextSession: "May 30, 2025",
        image: sleepImg,
    },
];



export default function ProgramOverview() {

    return (

        <Box
            sx={{

                backgroundColor: "white",

                borderRadius: "28px",

                p: {
                    xs: 2,
                    md: 3,
                },

                border:
                    "1px solid rgba(0,0,0,0.04)",

                boxShadow:
                    "0 10px 40px rgba(0,0,0,0.04)",

                height: "100%",

                // Manipulation point:
                // increase p
                // for more internal spacing
            }}
        >

            {/* HEADER */}

            <Stack
                direction="row"

                justifyContent="space-between"

                alignItems="center"

                sx={{
                    mb: 3,
                }}
            >

                <Typography
                    sx={{

                        fontWeight: 800,

                        fontSize: "1.35rem",

                        color: "#111827",
                    }}
                >
                    Program Overview
                </Typography>



                <Typography
                    sx={{

                        color: "#2E7D32",

                        fontWeight: 700,

                        cursor: "pointer",

                        fontSize: "0.95rem",

                        "&:hover": {
                            opacity: 0.8,
                        },
                    }}
                >
                    View all programs
                </Typography>

            </Stack>



            {/* PROGRAM GRID */}

            <Grid
                container

                spacing={{
                    xs: 2,
                    md: 2.5,
                }}
            >

                {programs.map((program) => (

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        lg={3}

                        key={program.title}
                    >

                        <ProgramCard
                            title={program.title}
                            status={program.status}
                            participants={
                                program.participants
                            }
                            nextSession={
                                program.nextSession
                            }
                            image={program.image}
                        />

                    </Grid>

                ))}

            </Grid>

        </Box>
    );
}