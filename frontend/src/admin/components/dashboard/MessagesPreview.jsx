import {
    Avatar,
    Box,
    Stack,
    Typography,
} from "@mui/material";



const messages = [

    {
        name: "Faith K.",
        message:
            "I would like to inquire about counseling support.",
        time: "5 mins ago",
    },

    {
        name: "Daniel M.",
        message:
            "Interested in partnership opportunities.",
        time: "22 mins ago",
    },

    {
        name: "Mercy W.",
        message:
            "Thank you for the wellness session.",
        time: "1 hour ago",
    },
];



export default function MessagesPreview() {

    return (

        <Box
            sx={{

                backgroundColor: "white",

                borderRadius: "28px",

                p: 3,

                border:
                    "1px solid rgba(0,0,0,0.04)",

                boxShadow:
                    "0 10px 40px rgba(0,0,0,0.04)",

                height: "100%",
            }}
        >

            {/* HEADER */}

            <Stack
                direction="row"

                justifyContent="space-between"

                alignItems="center"

                sx={{
                    mb: 3,
                }}
            >

                <Typography
                    sx={{

                        fontWeight: 800,

                        fontSize: "1.3rem",

                        color: "#111827",
                    }}
                >
                    Messages
                </Typography>



                <Typography
                    sx={{

                        color: "#2E7D32",

                        fontWeight: 700,

                        cursor: "pointer",

                        ml: "auto",
                    }}
                >
                    Inbox
                </Typography>

            </Stack>



            {/* MESSAGE LIST */}

            <Stack spacing={3}>

                {messages.map((msg) => (

                    <Stack
                        key={msg.name}

                        direction="row"

                        spacing={2}

                        alignItems="flex-start"
                    >

                        {/* AVATAR */}

                        <Avatar
                            sx={{

                                width: 46,

                                height: 46,

                                backgroundColor:
                                    "#2E7D32",

                                fontWeight: 700,
                            }}
                        >
                            {msg.name.charAt(0)}
                        </Avatar>



                        {/* CONTENT */}

                        <Box
                            sx={{
                                flex: 1,
                            }}
                        >

                            <Stack
                                direction="column"

                                justifyContent="space-between"

                                alignItems="center"
                            >

                                <Typography
                                    sx={{

                                        fontWeight: 700,

                                        color: "#111827",
                                    }}
                                >
                                    {msg.name}
                                </Typography>



                                <Typography
                                    sx={{

                                        color: "#9CA3AF",

                                        fontSize: "0.82rem",


                                    }}
                                >
                                    {msg.time}
                                </Typography>

                            </Stack>



                            <Typography
                                sx={{

                                    color: "#6B7280",

                                    mt: 0.7,

                                    lineHeight: 1.7,

                                    fontSize: "0.95rem",
                                }}
                            >
                                {msg.message}
                            </Typography>

                        </Box>

                    </Stack>

                ))}

            </Stack>

        </Box>
    );
}