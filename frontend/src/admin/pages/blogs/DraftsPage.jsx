import { Box } from "@mui/material";

import DraftsHeader from
    "../../components/blogs/drafts/DraftsHeader";

import DraftsFilters from
    "../../components/blogs/drafts/DraftsFilters";

import DraftsTable from
    "../../components/blogs/drafts/DraftsTable";

export default function DraftsPage() {

    return (

        <Box>

            <DraftsHeader />

            <DraftsFilters />

            <DraftsTable />

        </Box>
    );
}