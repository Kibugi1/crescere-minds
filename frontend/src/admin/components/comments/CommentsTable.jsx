import {
    Box,
    Button,
    Chip,
    Stack,
    Typography,
} from "@mui/material";

import {
    Check,
    X,
} from "lucide-react";

const comments = [

    {
        id: 1,

        commenter:
            "Brian Kibugi",

        blog:
            "Managing Stress in University",

        comment:
            "This article was very insightful.",

        date:
            "Today",

        status:
            "Pending",
    },

    {
        id: 2,

        commenter:
            "Mary Wanjiku",

        blog:
            "Healthy Sleep Habits",

        comment:
            "Thank you for sharing this.",

        date:
            "Yesterday",

        status:
            "Approved",
    },

    {
        id: 3,

        commenter:
            "John Kamau",

        blog:
            "Teen Wellness Guide",

        comment:
            "Would love more examples.",

        date:
            "3 days ago",

        status:
            "Pending",
    },
];

export default function CommentsTable() {

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

            {/* HEADER */}

            <Box
                sx={{

                    display: {
                        xs: "none",
                        lg: "grid",
                    },

                    gridTemplateColumns:
                        "160px minmax(180px,2fr) minmax(280px,3fr) 120px 120px 220px",

                    gap: 2,

                    pb: 2,

                    borderBottom:
                        "1px solid rgba(0,0,0,0.08)",
                }}
            >

                <Typography fontWeight={700}>
                    Commenter
                </Typography>

                <Typography fontWeight={700}>
                    Blog
                </Typography>

                <Typography fontWeight={700}>
                    Comment
                </Typography>

                <Typography fontWeight={700}>
                    Date
                </Typography>

                <Typography fontWeight={700}>
                    Status
                </Typography>

                <Typography fontWeight={700}>
                    Actions
                </Typography>

            </Box>



            {/* COMMENTS */}

            {comments.map((comment) => (

                <Box

                    key={comment.id}

                    sx={{

                        display: {
                            xs: "flex",
                            lg: "grid",
                        },

                        flexDirection: "column",

                        gridTemplateColumns:
                            "160px minmax(180px,2fr) minmax(280px,3fr) 120px 120px 220px",

                        gap: 2,

                        py: 3,

                        borderBottom:
                            "1px solid rgba(0,0,0,0.06)",
                    }}
                >

                    <Typography fontWeight={700}>
                        {comment.commenter}
                    </Typography>



                    <Typography
                        color="#6B7280"
                    >
                        {comment.blog}
                    </Typography>



                    <Typography
                        color="#6B7280"
                    >
                        {comment.comment}
                    </Typography>



                    <Typography
                        color="#6B7280"
                    >
                        {comment.date}
                    </Typography>



                    <Chip

                        label={comment.status}

                        color={
                            comment.status ===
                                "Approved"

                                ? "success"

                                : "warning"
                        }

                        sx={{
                            width: "fit-content",
                        }}
                    />



                    <Stack

                        direction="row"

                        spacing={1}
                    >

                        <Button

                            color="success"

                            startIcon={
                                <Check size={16} />
                            }

                            sx={{
                                textTransform:
                                    "none",
                            }}
                        >
                            Approve
                        </Button>



                        <Button

                            color="error"

                            startIcon={
                                <X size={16} />
                            }

                            sx={{
                                textTransform:
                                    "none",
                            }}
                        >
                            Reject
                        </Button>

                    </Stack>

                </Box>

            ))}

        </Box>

    );
}