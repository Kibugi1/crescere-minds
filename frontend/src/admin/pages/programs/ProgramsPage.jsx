import {
    Box,
} from "@mui/material";

import ProgramsHeader from
    "../../components/programs/all-programs/ProgramsHeader";

import ProgramsFilters from
    "../../components/programs/all-programs/ProgramsFilters";

import ProgramsTable from
    "../../components/programs/all-programs/ProgramsTable";

export default function ProgramsPage() {

    return (

        <Box>

            <ProgramsHeader />

            <ProgramsFilters />

            <ProgramsTable />

        </Box>

    );
}