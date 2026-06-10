import {
    Box,
    Button,
    Chip,
    Stack,
    Typography,
} from "@mui/material";

import {
    Pencil,
    Trash2,
} from "lucide-react";

const programs = [

    {
        id: 1,

        name:
            "Teen Wellness Program",

        category:
            "Teen Wellness",

        status:
            "Active",

        duration:
            "8 Weeks",

        participants:
            32,
    },

    {
        id: 2,

        name:
            "Sleep Better Initiative",

        category:
            "Self Care",

        status:
            "Draft",

        duration:
            "4 Weeks",

        participants:
            18,
    },

    {
        id: 3,

        name:
            "Stress Management Workshop",

        category:
            "Mental Wellness",

        status:
            "Active",

        duration:
            "6 Weeks",

        participants:
            25,
    },
];

export default function ProgramsTable() {

    return (

        <Box
            sx={{

                backgroundColor: "white",

                borderRadius: "24px",

                p: 3,

                border:
                    "1px solid rgba(0,0,0,0.04)",

                boxShadow:
                    "0 10px 40px rgba(0,0,0,0.04)",
            }}
        >

            {/* TABLE HEADER */}

            <Box
                sx={{

                    display: {
                        xs: "none",
                        lg: "grid",
                    },

                    gridTemplateColumns:
                        "minmax(250px, 3fr) minmax(150px, 1.5fr) 120px 120px 120px 180px",

                    gap: 2,

                    pb: 2,

                    borderBottom:
                        "1px solid rgba(0,0,0,0.08)",
                }}
            >

                <Typography fontWeight={700}>
                    Program
                </Typography>

                <Typography fontWeight={700}>
                    Category
                </Typography>

                <Typography fontWeight={700}>
                    Status
                </Typography>

                <Typography fontWeight={700}>
                    Duration
                </Typography>

                <Typography fontWeight={700}>
                    Participants
                </Typography>

                <Typography fontWeight={700}>
                    Actions
                </Typography>

            </Box>



            {/* PROGRAMS */}

            {programs.map((program) => (

                <Box

                    key={program.id}

                    sx={{

                        display: {
                            xs: "flex",
                            lg: "grid",
                        },

                        flexDirection: "column",

                        gridTemplateColumns:
                            "minmax(250px, 3fr) minmax(150px, 1.5fr) 120px 120px 120px 180px",

                        gap: 2,

                        py: 3,

                        borderBottom:
                            "1px solid rgba(0,0,0,0.06)",
                    }}
                >

                    <Typography fontWeight={700}>
                        {program.name}
                    </Typography>

                    <Typography
                        color="#6B7280"
                    >
                        {program.category}
                    </Typography>

                    <Chip

                        label={program.status}

                        color={
                            program.status ===
                                "Active"

                                ? "success"

                                : "default"
                        }

                        sx={{
                            width: "fit-content",
                        }}
                    />

                    <Typography
                        color="#6B7280"
                    >
                        {program.duration}
                    </Typography>

                    <Typography
                        color="#6B7280"
                    >
                        {program.participants}
                    </Typography>

                    <Stack

                        direction="row"

                        spacing={1}
                    >

                        <Button

                            startIcon={
                                <Pencil size={16} />
                            }

                            sx={{
                                textTransform:
                                    "none",
                            }}
                        >
                            Edit
                        </Button>

                        <Button

                            color="error"

                            startIcon={
                                <Trash2 size={16} />
                            }

                            sx={{
                                textTransform:
                                    "none",
                            }}
                        >
                            Delete
                        </Button>

                    </Stack>

                </Box>

            ))}

        </Box>

    );
}