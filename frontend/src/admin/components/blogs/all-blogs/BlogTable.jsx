import {
    Avatar,
    Box,
    Button,
    Chip,
    Stack,
    Typography,
} from "@mui/material";

import {
    Edit3,
} from "lucide-react";

const blogs = [

    {
        id: 1,
        title: "Managing Stress in Everyday Life",
        category: "Mental Wellness",
        status: "Published",
        date: "12 Jun 2026",
        image:
            "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    },

    {
        id: 2,
        title: "The Importance of Sleep",
        category: "Self Care",
        status: "Draft",
        date: "10 Jun 2026",
        image:
            "https://images.unsplash.com/photo-1511296265581-c2450046447d",
    },

    {
        id: 3,
        title: "Helping Teens Navigate Anxiety",
        category: "Teen Wellness",
        status: "Published",
        date: "08 Jun 2026",
        image:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    },

];

export default function BlogTable() {

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

            <Stack

                direction="row"

                sx={{

                    pb: 2,

                    borderBottom:
                        "1px solid rgba(0,0,0,0.08)",

                    fontWeight: 700,
                }}
            >

                <Box sx={{ width: 90 }}>
                    <Typography fontWeight={700}>
                        Image
                    </Typography>
                </Box>

                <Box sx={{ flex: 2 }}>
                    <Typography fontWeight={700}>
                        Title
                    </Typography>
                </Box>

                <Box sx={{ flex: 1 }}>
                    <Typography fontWeight={700}>
                        Category
                    </Typography>
                </Box>

                <Box sx={{ flex: 1 }}>
                    <Typography fontWeight={700}>
                        Status
                    </Typography>
                </Box>

                <Box sx={{ flex: 1 }}>
                    <Typography fontWeight={700}>
                        Date
                    </Typography>
                </Box>

                <Box sx={{ width: 120 }}>
                    <Typography fontWeight={700}>
                        Actions
                    </Typography>
                </Box>

            </Stack>



            {/* BLOG ROWS */}

            {blogs.map((blog) => (

                <Stack

                    key={blog.id}

                    direction="row"

                    alignItems="center"

                    sx={{

                        py: 2,

                        borderBottom:
                            "1px solid rgba(0,0,0,0.06)",
                    }}
                >

                    {/* IMAGE */}

                    <Box sx={{ width: 90 }}>

                        <Avatar

                            src={blog.image}

                            variant="rounded"

                            sx={{
                                width: 56,
                                height: 56,
                            }}
                        />

                    </Box>



                    {/* TITLE */}

                    <Box sx={{ flex: 2 }}>

                        <Typography
                            fontWeight={700}
                        >
                            {blog.title}
                        </Typography>

                    </Box>



                    {/* CATEGORY */}

                    <Box sx={{ flex: 1 }}>

                        <Typography>
                            {blog.category}
                        </Typography>

                    </Box>



                    {/* STATUS */}

                    <Box sx={{ flex: 1 }}>

                        <Chip

                            label={blog.status}

                            color={
                                blog.status === "Published"
                                    ? "success"
                                    : "default"
                            }

                            size="small"
                        />

                    </Box>



                    {/* DATE */}

                    <Box sx={{ flex: 1 }}>

                        <Typography>
                            {blog.date}
                        </Typography>

                    </Box>



                    {/* ACTIONS */}

                    <Box sx={{ width: 120 }}>

                        <Button

                            startIcon={
                                <Edit3 size={16} />
                            }

                            size="small"

                            sx={{
                                textTransform: "none",
                            }}
                        >
                            Edit
                        </Button>

                    </Box>

                </Stack>

            ))}

        </Box>

    );
}