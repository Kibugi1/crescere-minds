import {
    Box,
} from "@mui/material";

import BlogHeader from
    "../../components/blogs/all-blogs/BlogHeader";

import BlogFilters from
    "../../components/blogs/all-blogs/BlogFilters";

import BlogTable from
    "../../components/blogs/all-blogs/BlogTable";

export default function BlogsPage() {

    return (

        <Box>

            <BlogHeader />

            <BlogFilters />

            <BlogTable />

        </Box>

    );
}