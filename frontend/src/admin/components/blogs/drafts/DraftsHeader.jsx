import {
    Box,
    Button,
    Stack,
    Typography,
} from "@mui/material";

import {
    Plus,
} from "lucide-react";

export default function DraftsHeader() {

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
                    }}
                >
                    Draft Blogs
                </Typography>

                <Typography
                    sx={{
                        color: "#6B7280",

                        mt: 1,
                    }}
                >
                    Manage unpublished articles and
                    prepare content before publishing.
                </Typography>

            </Box>
            <Box>
                <Button

                    variant="contained"

                    startIcon={
                        <Plus size={18} />
                    }

                    sx={{

                        backgroundColor: "#2E7D32",

                        borderRadius: "16px",

                        px: 3,

                        py: 1.4,

                        textTransform: "none"
                    }}
                >
                    New Draft
                </Button>
            </Box>

        </Stack>
    );
}