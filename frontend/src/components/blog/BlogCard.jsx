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
                display: "flex",
                flexDirection: "column",

                height: "100%",

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
                sx={{
                    p: 3,
                    flexGrow: 1,
                }}
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
                        fontWeight: 700,

                        display: "-webkit-box",

                        WebkitLineClamp: 2,

                        WebkitBoxOrient: "vertical",

                        overflow: "hidden",

                        minHeight: 72,
                    }}
                >
                    {blog.title}
                </Typography>



                <Typography
                    sx={{
                        color: "#6B7280",

                        display: "-webkit-box",

                        WebkitLineClamp: 3,

                        WebkitBoxOrient: "vertical",

                        overflow: "hidden",

                        minHeight: 72,
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
                    {new Date(
                        blog.created_at
                    ).toLocaleDateString(
                        "en-GB",
                        {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                        }
                    )}
                </Typography>



                <Button
                    component={
                        Link
                    }

                    to={`/blog/${blog.id}`}
                    sx={{
                        mt: "auto",
                    }}
                >
                    Read More
                </Button>

            </Stack>

        </Box>
    );
}