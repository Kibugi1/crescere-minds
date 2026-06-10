import {
    Box,
} from "@mui/material";

import MessagesHeader from
    "../../components/messages/MessagesHeader";

import MessagesFilters from
    "../../components/messages/MessagesFilters";

import MessagesTable from
    "../../components/messages/MessagesTable";

export default function MessagesPage() {

    return (

        <Box>

            <MessagesHeader />

            <MessagesFilters />

            <MessagesTable />

        </Box>

    );
}