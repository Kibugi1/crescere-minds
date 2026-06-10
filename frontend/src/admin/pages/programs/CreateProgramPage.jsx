import {
    Box,
} from "@mui/material";

import CreateProgramHeader from
    "../../components/programs/create-program/CreateProgramHeader";

import ProgramForm from
    "../../components/programs/create-program/ProgramForm";

import ProgramActions from
    "../../components/programs/create-program/ProgramActions";

export default function CreateProgramPage() {

    return (

        <Box>

            <CreateProgramHeader />

            <ProgramForm />

            <ProgramActions />

        </Box>

    );
}