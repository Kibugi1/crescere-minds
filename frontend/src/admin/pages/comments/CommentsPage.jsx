import {
    Box,
} from "@mui/material";

import CommentsHeader from
    "../../components/comments/CommentsHeader";

import CommentsFilters from
    "../../components/comments/CommentsFilters";

import CommentsTable from
    "../../components/comments/CommentsTable";

export default function CommentsPage() {

    return (

        <Box>

            <CommentsHeader />

            <CommentsFilters />

            <CommentsTable />

        </Box>

    );
}