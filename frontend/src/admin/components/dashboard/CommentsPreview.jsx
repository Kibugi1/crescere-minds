import {
    Avatar,
    Box,
    Stack,
    Typography,
} from "@mui/material";



const comments = [

    {
        name: "Olivia Brown",
        blog: "Managing Anxiety Naturally",
        comment:
            "This really helped me understand stress better.",
        time: "5m",
    },

    {
        name: "Liam Anderson",
        blog: "Building Self-Esteem in Teens",
        comment:
            "Great insights! Very helpful.",
        time: "15m",
    },

    {
        name: "Noah Thompson",
        blog: "Overcoming Stress Daily",
        comment:
            "I needed to read this today. Thank you!",
        time: "1h",
    },
];



export default function CommentsPreview() {

    return (

        <Box
            sx={{

                backgroundColor: "white",

                borderRadius: "28px",

                p: 3,

                border:
                    "1px solid rgba(0,0,0,0.04)",

                boxShadow:
                    "0 10px 40px rgba(0,0,0,0.04)",

                height: "100%",
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

                        fontSize: "1.3rem",

                        color: "#111827",


                    }}
                >
                    Comments Preview
                </Typography>



                <Typography
                    sx={{

                        color: "#2E7D32",

                        fontWeight: 700,

                        cursor: "pointer",

                        ml: "auto",
                    }}
                >
                    View all
                </Typography>

            </Stack>



            {/* COMMENTS */}

            <Stack spacing={3}>

                {comments.map((comment) => (

                    <Stack
                        key={comment.name}

                        direction="row"

                        spacing={2}

                        alignItems="flex-start"
                    >

                        {/* AVATAR */}

                        <Avatar
                            sx={{

                                width: 46,

                                height: 46,

                                backgroundColor:
                                    "#2E7D32",

                                fontWeight: 700,
                            }}
                        >
                            {comment.name.charAt(0)}
                        </Avatar>



                        {/* CONTENT */}

                        <Box
                            sx={{
                                flex: 1,
                            }}
                        >

                            <Stack
                                direction="Column"

                                justifyContent="space-between"

                                alignItems="center"
                            >

                                <Typography
                                    sx={{

                                        fontWeight: 700,

                                        color: "#111827",
                                    }}
                                >
                                    {comment.name}
                                </Typography>



                                <Typography
                                    sx={{

                                        color: "#9CA3AF",

                                        fontSize: "0.82rem",

                                    }}
                                >
                                    {comment.time}
                                </Typography>

                            </Stack>



                            <Typography
                                sx={{

                                    color: "#6B7280",

                                    mt: 0.5,

                                    fontWeight: 600,

                                    fontSize: "0.92rem",
                                }}
                            >
                                On: {comment.blog}
                            </Typography>



                            <Typography
                                sx={{

                                    color: "#6B7280",

                                    mt: 0.8,

                                    lineHeight: 1.7,

                                    fontSize: "0.95rem",
                                }}
                            >
                                {comment.comment}
                            </Typography>

                        </Box>

                    </Stack>

                ))}

            </Stack>

        </Box>
    );
}