import { useEffect, useState } from "react";

import axios from "axios";

import {
    Container,
    Grid,
    Typography,
    Box,
} from "@mui/material";

import MainLayout from "../layouts/MainLayout";

import BlogCard from
    "../components/blog/BlogCard";

export default function Blog() {

    const [blogs, setBlogs] =
        useState([]);

    useEffect(() => {

        fetchBlogs();

    }, []);

    const fetchBlogs =
        async () => {

            try {

                const response =

                    await axios.get(

                        "http://127.0.0.1:5000/api/blogs"
                    );

                setBlogs(
                    response.data
                );

            } catch (error) {

                console.error(
                    error
                );
            }
        };

    return (

        <MainLayout>

            <Container
                maxWidth="lg"

                sx={{
                    py: 8,
                }}
            >

                <Box
                    sx={{
                        mt: 6,
                        mb: 4,
                        textAlign:
                            "center",
                    }}
                >

                    <Typography
                        variant="h2"

                        sx={{
                            fontWeight:
                                700,
                            mb: 2,
                        }}
                    >
                        Crescere Blog
                    </Typography>

                    <Typography
                        sx={{
                            maxWidth:
                                700,
                            mx: "auto",
                            color:
                                "#6B7280",
                        }}
                    >
                        Insights,
                        wellness
                        resources,
                        stories,
                        and guidance
                        from the
                        Crescere team.
                    </Typography>

                </Box>

                <Grid
                    container
                    spacing={4}
                >

                    {blogs.map(
                        (blog) => (

                            <Grid
                                item
                                xs={12}
                                md={6}
                                lg={4}

                                key={
                                    blog.id
                                }
                            >

                                <BlogCard
                                    blog={blog}
                                />

                            </Grid>

                        )
                    )}

                </Grid>

            </Container>

        </MainLayout>

    );
}