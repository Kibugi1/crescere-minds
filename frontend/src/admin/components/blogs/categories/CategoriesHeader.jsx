import {
    Box,
    Button,
    Stack,
    Typography,
} from "@mui/material";

import {
    Plus,
} from "lucide-react";

export default function CategoriesHeader() {

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
                        maxWidth: "100%",
                    }}
                >
                    Blog Categories
                </Typography>

                <Typography
                    sx={{
                        color: "#6B7280",

                        mt: 1,
                    }}
                >
                    Manage blog categories used across
                    Crescere Minds content.
                </Typography>

            </Box>
            <Box
                sx={{
                    ml: "auto",
                }}
            >
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

                        backgroundColor: "#2E7D32",
                    }}
                >
                    Add Category
                </Button>
            </Box>

        </Stack>
    );
}