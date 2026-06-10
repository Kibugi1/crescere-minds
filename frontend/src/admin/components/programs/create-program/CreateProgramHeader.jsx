import {
    Box,
    Button,
    Stack,
    Typography,
} from "@mui/material";

import {
    Plus,
} from "lucide-react";

export default function CreateProgramHeader() {

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
            }}
        >

            <Box
                sx={{
                    flex: 1,
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
                    }}
                >
                    Create Program
                </Typography>

                <Typography
                    sx={{
                        color: "#6B7280",

                        mt: 1,
                    }}
                >
                    Design and launch wellness
                    programs for Crescere Minds.
                </Typography>

            </Box>

            <Button

                variant="contained"

                startIcon={
                    <Plus size={18} />
                }

                sx={{

                    borderRadius: "16px",

                    px: 3,

                    py: 1.3,

                    textTransform: "none",

                    fontWeight: 700,

                    backgroundColor: "#2E7D32",

                    ml: "auto",
                }}
            >
                Program Guide
            </Button>

        </Stack>

    );
}