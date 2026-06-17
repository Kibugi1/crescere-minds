import { useEffect, useState } from "react";

import axios from "axios";

import {
    Box,
    Chip,
    Container,
    Typography,
    CircularProgress,
} from "@mui/material";

import {
    useParams,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

export default function SingleBlog() {

    const { id } = useParams();

    const [blog, setBlog] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        fetchBlog();

    }, [id]);

    const fetchBlog =
        async () => {

            try {

                const response =

                    await axios.get(

                        `http://127.0.0.1:5000/api/blogs/${id}`
                    );

                setBlog(
                    response.data
                );

            } catch (error) {

                console.error(
                    error
                );

            } finally {

                setLoading(
                    false
                );
            }
        };

    if (loading) {

        return (

            <MainLayout>

                <Container
                    sx={{
                        py: 10,
                        textAlign:
                            "center",
                    }}
                >

                    <CircularProgress />

                </Container>

            </MainLayout>
        );
    }

    if (!blog) {

        return (

            <MainLayout>

                <Container
                    sx={{
                        py: 10,
                    }}
                >

                    <Typography
                        variant="h4"
                    >
                        Blog not found
                    </Typography>

                </Container>

            </MainLayout>
        );
    }

    return (

        <MainLayout>

            <Container
                maxWidth="md"

                sx={{
                    py: 8,
                }}
            >

                <Chip

                    label={
                        blog.category
                    }

                    sx={{
                        mb: 3,
                    }}
                />



                <Typography
                    variant="h2"

                    sx={{

                        fontWeight:
                            700,

                        mb: 2,
                    }}
                >
                    {blog.title}
                </Typography>



                <Typography
                    sx={{

                        color:
                            "#6B7280",

                        mb: 5,
                    }}
                >
                    {blog.created_at}
                </Typography>



                {/* IMAGE PLACEHOLDER */}

                <Box
                    sx={{

                        height: 400,

                        borderRadius:
                            "24px",

                        backgroundColor:
                            "#E8F5E9",

                        mb: 5,
                    }}
                />



                {/* BLOG CONTENT */}

                <Box

                    sx={{

                        "& p": {

                            mb: 2,

                            lineHeight:
                                1.9,
                        },

                        "& blockquote": {

                            borderLeft:
                                "4px solid #2E7D32",

                            pl: 3,

                            ml: 0,

                            color:
                                "#4B5563",

                            fontStyle:
                                "italic",
                        },
                    }}

                    dangerouslySetInnerHTML={{
                        __html:
                            blog.content,
                    }}
                />

            </Container>

        </MainLayout>
    );
}