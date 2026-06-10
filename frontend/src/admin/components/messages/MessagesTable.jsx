import {
    Box,
    Button,
    Chip,
    Stack,
    Typography,
} from "@mui/material";

import {
    Archive,
    Eye,
} from "lucide-react";

const messages = [

    {
        id: 1,

        sender:
            "Brian Kibugi",

        subject:
            "Program Enrollment Inquiry",

        received:
            "2 hours ago",

        status:
            "New",
    },

    {
        id: 2,

        sender:
            "Mary Wanjiku",

        subject:
            "Counseling Support Request",

        received:
            "Yesterday",

        status:
            "Read",
    },

    {
        id: 3,

        sender:
            "John Kamau",

        subject:
            "Partnership Opportunity",

        received:
            "3 days ago",

        status:
            "New",
    },
];

export default function MessagesTable() {

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

            {/* HEADER */}

            <Box
                sx={{

                    display: {
                        xs: "none",
                        lg: "grid",
                    },

                    gridTemplateColumns:
                        "minmax(180px, 2fr) minmax(250px, 3fr) 150px 120px 220px",

                    gap: 2,

                    pb: 2,

                    borderBottom:
                        "1px solid rgba(0,0,0,0.08)",
                }}
            >

                <Typography fontWeight={700}>
                    Sender
                </Typography>

                <Typography fontWeight={700}>
                    Subject
                </Typography>

                <Typography fontWeight={700}>
                    Received
                </Typography>

                <Typography fontWeight={700}>
                    Status
                </Typography>

                <Typography fontWeight={700}>
                    Actions
                </Typography>

            </Box>



            {/* ROWS */}

            {messages.map((message) => (

                <Box

                    key={message.id}

                    sx={{

                        display: {
                            xs: "flex",
                            lg: "grid",
                        },

                        flexDirection: "column",

                        gridTemplateColumns:
                            "minmax(180px, 2fr) minmax(250px, 3fr) 150px 120px 220px",

                        gap: 2,

                        py: 3,

                        borderBottom:
                            "1px solid rgba(0,0,0,0.06)",
                    }}
                >

                    <Typography fontWeight={700}>
                        {message.sender}
                    </Typography>



                    <Typography
                        color="#6B7280"
                    >
                        {message.subject}
                    </Typography>



                    <Typography
                        color="#6B7280"
                    >
                        {message.received}
                    </Typography>



                    <Chip

                        label={message.status}

                        color={
                            message.status ===
                                "New"

                                ? "success"

                                : "default"
                        }

                        sx={{
                            width: "fit-content",
                        }}
                    />



                    <Stack

                        direction="row"

                        spacing={1}
                    >

                        <Button

                            startIcon={
                                <Eye size={16} />
                            }

                            sx={{
                                textTransform:
                                    "none",
                            }}
                        >
                            View
                        </Button>



                        <Button

                            startIcon={
                                <Archive size={16} />
                            }

                            color="warning"

                            sx={{
                                textTransform:
                                    "none",
                            }}
                        >
                            Archive
                        </Button>

                    </Stack>

                </Box>

            ))}

        </Box>

    );
}