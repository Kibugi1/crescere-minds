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
        title: "Managing Stress in University",
        category: "Mental Wellness",
        edited: "2 hours ago",
    },

    {
        id: 2,
        title: "Understanding Teen Anxiety",
        category: "Teen Wellness",
        edited: "Yesterday",
    },

    {
        id: 3,
        title: "Healthy Sleep Habits",
        category: "Self Care",
        edited: "3 days ago",
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

            {/* TABLE HEADER */}

            <Box
                sx={{

                    display: "grid",

                    gridTemplateColumns:
                        "minmax(250px, 3fr) minmax(150px, 1.5fr) 120px 150px 350px",

                    gap: 3,

                    alignItems: "center",

                    pb: 2,

                    borderBottom:
                        "1px solid rgba(0,0,0,0.08)",

                    mb: 1,
                }}
            >

                <Typography fontWeight={700}>
                    Title
                </Typography>

                <Typography
                    fontWeight={700}
                    sx={{
                        display: {
                            xs: "none",
                            lg: "block",
                        },
                    }}
                >
                    Category
                </Typography>

                <Typography
                    fontWeight={700}
                    sx={{
                        display: {
                            xs: "none",
                            lg: "block",
                        },
                    }}
                >
                    Status
                </Typography>

                <Typography
                    fontWeight={700}
                    sx={{
                        display: {
                            xs: "none",
                            lg: "block",
                        },
                    }}
                >
                    Last Edited
                </Typography>

                <Typography
                    fontWeight={700}
                    sx={{
                        display: {
                            xs: "none",
                            lg: "block",
                        },
                    }}
                >
                    Actions
                </Typography>

            </Box>



            {/* DRAFT ROWS */}

            {drafts.map((draft) => (

                <Box

                    key={draft.id}

                    sx={{

                        display: "grid",

                        gridTemplateColumns:
                            "minmax(250px, 3fr) minmax(150px, 1.5fr) 120px 150px 350px",

                        gap: 3,

                        alignItems: "center",

                        py: 2,

                        borderBottom:
                            "1px solid rgba(0,0,0,0.06)",
                    }}
                >

                    {/* TITLE */}

                    <Typography
                        fontWeight={700}
                    >
                        {draft.title}
                    </Typography>



                    {/* CATEGORY */}

                    <Typography
                        sx={{
                            color: "#6B7280",
                        }}
                    >
                        {draft.category}
                    </Typography>



                    {/* STATUS */}

                    <Chip

                        label="Draft"

                        sx={{

                            width: "fit-content",

                            backgroundColor:
                                "rgba(245,158,11,0.15)",

                            color: "#B45309",

                            fontWeight: 700,
                        }}
                    />



                    {/* LAST EDITED */}

                    <Typography
                        sx={{

                            color: "#6B7280",

                            textTransform:
                                "capitalize",
                        }}
                    >
                        {draft.edited}
                    </Typography>



                    {/* ACTIONS */}

                    <Stack

                        direction="row"

                        spacing={1}

                        flexWrap="wrap"
                    >

                        <Button

                            startIcon={
                                <Pencil size={16} />
                            }

                            sx={{

                                textTransform:
                                    "none",

                                minWidth:
                                    "auto",
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

                                textTransform:
                                    "none",

                                minWidth:
                                    "auto",
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

                                textTransform:
                                    "none",

                                minWidth:
                                    "auto",
                            }}
                        >
                            Delete
                        </Button>

                    </Stack>

                </Box>

            ))
            }

        </Box >

    );
}