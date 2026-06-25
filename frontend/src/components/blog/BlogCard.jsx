import {
    Box,
    Button,
    Chip,
    Stack,
    Typography,
} from "@mui/material";

import {
    Link,
} from "react-router-dom";

export default function BlogCard({
    blog,
}) {

    return (

        <Box
            sx={{

                backgroundColor:
                    "white",

                borderRadius:
                    "24px",

                overflow:
                    "hidden",

                boxShadow:
                    "0 10px 40px rgba(0,0,0,0.05)",

                border:
                    "1px solid rgba(0,0,0,0.04)",

                height:
                    "100%",
            }}
        >

            {/* IMAGE */}

            <Box
                component="img"

                src={
                    blog.image
                        ? `http://127.0.0.1:5000/api/uploads/${blog.image}`
                        : ""
                }

                alt={blog.title}

                sx={{

                    width: "100%",

                    height: 240,

                    objectFit: "cover",
                }}
            />



            <Stack
                spacing={2}
                sx={{ p: 3 }}
            >

                <Chip

                    label={
                        blog.category
                    }

                    sx={{
                        width:
                            "fit-content",
                    }}
                />



                <Typography
                    variant="h5"

                    sx={{
                        fontWeight:
                            700,
                    }}
                >
                    {blog.title}
                </Typography>



                <Typography
                    sx={{
                        color:
                            "#6B7280",
                    }}
                >
                    {blog.excerpt}
                </Typography>



                <Typography
                    variant="body2"

                    sx={{
                        color:
                            "#9CA3AF",
                    }}
                >
                    {blog.created_at}
                </Typography>



                <Button
                    component={
                        Link
                    }

                    to={`/blog/${blog.id}`}
                >
                    Read More
                </Button>

            </Stack>

        </Box>
    );
}