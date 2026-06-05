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
    Upload,
} from "lucide-react";

const drafts = [

    {
        id: 1,

        title:
            "Managing Stress in University",

        category:
            "Mental Wellness",

        edited:
            "2 hours ago",
    },

    {
        id: 2,

        title:
            "Understanding Teen Anxiety",

        category:
            "Teen Wellness",

        edited:
            "Yesterday",
    },

    {
        id: 3,

        title:
            "Healthy Sleep Habits",

        category:
            "Self Care",

        edited:
            "3 days ago",
    },
];

export default function DraftsTable() {

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

            {drafts.map((draft) => (

                <Stack

                    key={draft.id}

                    direction="row"

                    justifyContent="space-between"

                    alignItems="center"

                    sx={{

                        py: 2,

                        borderBottom:
                            "1px solid rgba(0,0,0,0.06)",
                        width: "100%",
                        flexGrow: 1,
                    }}
                >

                    <Typography
                        fontWeight={700}
                    >
                        {draft.title}
                    </Typography>

                    <Typography
                        sx={{
                            color: "#6B7280",
                        }}
                    >
                        {draft.category}
                    </Typography>


                    <Box>
                        <Stack
                            direction="row"
                            spacing={2}

                            alignItems="center"
                        >

                            <Chip

                                label="Draft"

                                sx={{

                                    backgroundColor:
                                        "rgba(245,158,11,0.15)",

                                    color: "#B45309",

                                    fontWeight: 700,
                                }}
                            />

                            <Typography
                                sx={{
                                    color: "#6B7280",
                                }}
                            >
                                {draft.edited}
                            </Typography>

                            <Button

                                startIcon={
                                    <Pencil size={16} />
                                }

                                sx={{
                                    textTransform: "none",
                                }}
                            >
                                Edit
                            </Button>

                            <Button

                                startIcon={
                                    <Upload size={16} />
                                }

                                color="success"

                                sx={{
                                    textTransform: "none",
                                }}
                            >
                                Publish
                            </Button>

                            <Button

                                startIcon={
                                    <Trash2 size={16} />
                                }

                                color="error"

                                sx={{
                                    textTransform: "none",
                                }}
                            >
                                Delete
                            </Button>

                        </Stack>
                    </Box>

                </Stack>

            ))}

        </Box>
    );
}