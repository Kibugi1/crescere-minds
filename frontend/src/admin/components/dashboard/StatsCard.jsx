import {
    Box,
    Stack,
    Typography,
} from "@mui/material";



export default function StatsCard({

    title,
    value,
    growth,
    icon,
}) {

    return (

        <Box
            sx={{

                backgroundColor: "white",

                borderRadius: "28px",

                p: 3,

                minHeight: 180,

                display: "flex",

                flexDirection: "column",

                justifyContent: "space-between",

                border:
                    "1px solid rgba(0,0,0,0.04)",

                boxShadow:
                    "0 10px 40px rgba(0,0,0,0.04)",

                transition:
                    "all 0.3s ease",

                "&:hover": {

                    transform:
                        "translateY(-4px)",

                    boxShadow:
                        "0 18px 50px rgba(0,0,0,0.08)",
                },

                // Manipulation point:
                // increase borderRadius
                // for softer dashboard cards
            }}
        >

            {/* TOP */}

            <Stack
                direction="row"

                justifyContent="space-between"

                alignItems="center"
            >

                <Typography
                    sx={{

                        color: "#6B7280",

                        fontWeight: 600,

                        fontSize: "0.95rem",
                    }}
                >
                    {title}
                </Typography>



                <Box
                    sx={{

                        width: 52,

                        height: 52,

                        borderRadius: "18px",

                        backgroundColor:
                            "rgba(76,175,80,0.10)",

                        display: "flex",

                        alignItems: "center",

                        justifyContent: "center",

                        color: "#2E7D32",
                    }}
                >
                    {icon}
                </Box>

            </Stack>



            {/* VALUE */}

            <Box>

                <Typography
                    sx={{

                        fontSize: {
                            xs: "2.3rem",
                            md: "2.8rem",
                        },

                        fontWeight: 800,

                        color: "#111827",

                        lineHeight: 1,
                    }}
                >
                    {value}
                </Typography>



                <Typography
                    sx={{

                        color: "#2E7D32",

                        fontWeight: 700,

                        mt: 1,

                        fontSize: "0.95rem",
                    }}
                >
                    {growth} this week
                </Typography>

            </Box>

        </Box>
    );
}