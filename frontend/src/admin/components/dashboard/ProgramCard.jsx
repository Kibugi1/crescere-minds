import {
    Box,
    Stack,
    Typography,
} from "@mui/material";

import {
    Users,
} from "lucide-react";



export default function ProgramCard({

    title,
    status,
    participants,
    nextSession,
    image,
}) {

    return (

        <Box
            sx={{

                position: "relative",

                height: 250,

                borderRadius: "24px",

                overflow: "hidden",

                backgroundImage: `url(${image})`,

                backgroundSize: "cover",

                backgroundPosition: "center",

                display: "flex",

                flexDirection: "column",

                justifyContent: "space-between",

                p: 2.5,

                boxShadow:
                    "0 10px 30px rgba(0,0,0,0.06)",

                transition:
                    "all 0.3s ease",

                cursor: "pointer",

                "&:hover": {

                    transform:
                        "translateY(-4px)",

                    boxShadow:
                        "0 20px 40px rgba(0,0,0,0.12)",
                },

                // Manipulation point:
                // increase height
                // for taller cards
            }}
        >

            {/* DARK OVERLAY */}

            <Box
                sx={{

                    position: "absolute",

                    inset: 0,

                    background:
                        "linear-gradient(to top, rgba(0,0,0,0.70), rgba(0,0,0,0.15))",
                }}
            />



            {/* CONTENT */}

            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                }}
            >

                {/* TITLE */}

                <Typography
                    sx={{

                        color: "white",

                        fontWeight: 800,

                        fontSize: "1.25rem",

                        lineHeight: 1.3,

                        maxWidth: 180,
                    }}
                >
                    {title}
                </Typography>



                {/* STATUS */}

                <Box
                    sx={{

                        mt: 2,

                        display: "inline-flex",

                        alignItems: "center",

                        justifyContent: "center",

                        px: 1.6,

                        py: 0.6,

                        borderRadius: "999px",

                        backgroundColor:

                            status === "Active"
                                ? "rgba(76,175,80,0.18)"
                                : "rgba(255,193,7,0.18)",

                        color:

                            status === "Active"
                                ? "#A5D6A7"
                                : "#FFD54F",

                        fontWeight: 700,

                        fontSize: "0.82rem",

                        backdropFilter: "blur(8px)",
                    }}
                >
                    {status}
                </Box>

            </Box>



            {/* BOTTOM CONTENT */}

            <Stack
                spacing={1.2}

                sx={{
                    position: "relative",
                    zIndex: 2,
                }}
            >

                {/* PARTICIPANTS */}

                <Stack
                    direction="row"

                    spacing={1}

                    alignItems="center"
                >

                    <Users
                        size={16}
                        color="white"
                    />



                    <Typography
                        sx={{

                            color:
                                "rgba(255,255,255,0.92)",

                            fontSize: "0.92rem",
                        }}
                    >
                        {participants} Participants
                    </Typography>

                </Stack>



                {/* NEXT SESSION */}

                <Box>

                    <Typography
                        sx={{

                            color:
                                "rgba(255,255,255,0.72)",

                            fontSize: "0.82rem",
                        }}
                    >
                        Next session
                    </Typography>



                    <Typography
                        sx={{

                            color: "white",

                            mt: 0.3,

                            fontWeight: 700,
                        }}
                    >
                        {nextSession}
                    </Typography>

                </Box>

            </Stack>

        </Box>
    );
}