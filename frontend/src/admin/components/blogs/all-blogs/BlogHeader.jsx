import {
    Box,
    Button,
    Stack,
    Typography,
} from "@mui/material";

import {
    Plus,
} from "lucide-react";

export default function BlogHeader() {

    return (

        <Stack
            direction={{
                xs: "column",
                md: "row",
            }}

            alignItems={{
                xs: "flex-start",
                md: "center",
            }}

            justifyContent="space-between"

            spacing={{
                xs: 3,
                md: 0,
            }}

            sx={{
                mb: 4,
                width: "100%",
            }}
        >

            {/* LEFT SIDE */}

            <Box
                sx={{
                    flexGrow: 1,
                }}
            >

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
                    }}
                >
                    Blog Management
                </Typography>

                <Typography
                    sx={{
                        color: "#6B7280",

                        mt: 1,

                        fontSize: {
                            xs: "1rem",
                            md: "1.05rem",
                        },

                        maxWidth: "650px",
                    }}
                >
                    Manage articles, wellness resources,
                    categories and published content
                    across the Crescere Minds platform.
                </Typography>

            </Box>



            {/* RIGHT SIDE */}
            <Box>
                <Button

                    startIcon={
                        <Plus size={18} />
                    }

                    variant="contained"

                    sx={{

                        borderRadius: "16px",

                        px: 3,

                        py: 1.4,

                        textTransform: "none",

                        fontWeight: 700,

                        backgroundColor: "#2E7D32",

                        boxShadow:
                            "0 10px 30px rgba(46,125,50,0.18)",

                        "&:hover": {

                            backgroundColor: "#256428",
                        },
                    }}
                >
                    Create Blog
                </Button>
            </Box>
        </Stack>

    );
}