import {
    Box,
    Button,
    Stack,
    Typography,
} from "@mui/material";

import {
    CalendarDays,
} from "lucide-react";



export default function DashboardHeader() {

    return (

        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                mb: 6,
            }}
        >

            {/* LEFT SIDE */}

            <Box>

                <Typography
                    sx={{

                        fontSize: {
                            xs: "2rem",
                            md: "2.8rem",
                        },

                        fontWeight: 800,

                        color: "#111827",

                        lineHeight: 1.1,

                        letterSpacing: "-0.03em",

                        // Manipulation point:
                        // increase fontSize
                        // for stronger visual hierarchy
                    }}
                >
                    Welcome back, Brian
                </Typography>



                <Typography
                    sx={{

                        color: "#6B7280",

                        mt: 1,

                        fontSize: {
                            xs: "1rem",
                            md: "1.05rem",
                        },
                    }}
                >
                    Here’s what’s happening
                    across Crescere Minds today.
                </Typography>

            </Box>



            {/* RIGHT SIDE */}
            <Box
                sx={{
                    ml: "auto",
                }}
            >
                <Button

                    startIcon={
                        <CalendarDays size={18} />
                    }

                    sx={{

                        borderRadius: "16px",

                        px: 2.5,

                        py: 1.2,

                        textTransform: "none",

                        backgroundColor: "white",

                        color: "#111827",

                        border:
                            "1px solid rgba(0,0,0,0.06)",

                        boxShadow:
                            "0 10px 30px rgba(0,0,0,0.04)",

                        fontWeight: 600,

                        "&:hover": {

                            backgroundColor:
                                "rgba(76,175,80,0.06)",
                        },

                        // Manipulation point:
                        // increase borderRadius
                        // for softer premium feel
                    }}
                >
                    Calendar
                </Button>
            </Box>


        </Box>
    );
}