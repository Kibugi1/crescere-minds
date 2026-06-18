import {
    Avatar,
    Box,
    Button,
    Chip,
    Stack,
    Typography,
} from "@mui/material";

import { useState, useEffect } from "react";
import axios from "axios";

import { Link, } from "react-router-dom";

import {
    Edit3,
    Trash2,
} from "lucide-react";



export default function BlogTable() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:5000/api/blogs"
            );
            setBlogs(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete =
        async (id) => {

            const confirmed =
                window.confirm(
                    "Delete this blog?"
                );

            if (!confirmed) return;

            try {

                const token =
                    localStorage.getItem(
                        "token"
                    );

                await axios.delete(

                    `http://127.0.0.1:5000/api/blogs/${id}`,

                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`,
                        },
                    }
                );

                setBlogs(

                    blogs.filter(

                        (blog) =>
                            blog.id !== id
                    )
                );

            } catch (error) {

                console.error(
                    error
                );
            }
        };

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

                            src={
                                blog.image
                                    ? `http://127.0.0.1:5000/api/blogs/uploads/${blog.image}`
                                    : ""
                            }

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
                                blog.status === "published"
                                    ? "success"
                                    : "default"
                            }

                            size="small"
                        />

                    </Box>



                    {/* DATE */}

                    <Box sx={{ flex: 1 }}>

                        <Typography>
                            {blog.created_at}
                        </Typography>

                    </Box>



                    {/* ACTIONS */}

                    <Box sx={{ width: 120 }}>

                        <Button

                            component={Link}

                            to={`/admin/blogs/edit/${blog.id}`}

                            startIcon={
                                <Edit3 size={16} />
                            }

                            size="small"
                        >
                            Edit
                        </Button>

                        <Button

                            color="error"

                            startIcon={
                                <Trash2 size={16} />
                            }

                            size="small"

                            sx={{
                                textTransform:
                                    "none",
                            }}
                            onClick={() =>
                                handleDelete(blog.id)
                            }
                        >
                            Delete
                        </Button>

                    </Box>

                </Stack>

            ))}

        </Box>

    );
}