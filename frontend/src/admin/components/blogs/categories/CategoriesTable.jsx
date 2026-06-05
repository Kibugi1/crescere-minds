import {
    Box,
    Button,
    Stack,
    Typography,
} from "@mui/material";

import {
    Pencil,
    Trash2,
} from "lucide-react";

const categories = [

    {
        id: 1,
        name: "Mental Wellness",
        blogs: 12,
    },

    {
        id: 2,
        name: "Teen Wellness",
        blogs: 7,
    },

    {
        id: 3,
        name: "Relationships",
        blogs: 5,
    },

    {
        id: 4,
        name: "Self Care",
        blogs: 8,
    },
];

export default function CategoriesTable() {

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

            {categories.map((category) => (

                <Stack

                    key={category.id}

                    direction="row"

                    justifyContent="space-between"

                    alignItems="center"

                    sx={{

                        py: 2,

                        borderBottom:
                            "1px solid rgba(0,0,0,0.06)",
                    }}
                >

                    <Box
                        sx={{
                            flexGrow: 1,
                        }}
                    >

                        <Typography
                            fontWeight={700}
                        >
                            {category.name}
                        </Typography>

                        <Typography
                            sx={{
                                color: "#6B7280",
                            }}
                        >
                            {category.blogs} blogs
                        </Typography>

                    </Box>

                    <Stack
                        direction="row"
                        spacing={1}
                    >

                        <Button

                            startIcon={
                                <Pencil size={16} />
                            }

                            sx={{
                                textTransform: "none",
                            }}
                        >
                            Edit
                        </Button>

                        <Button

                            startIcon={
                                <Trash2 size={16} />
                            }

                            color="error"

                            sx={{
                                textTransform: "none",
                            }}
                        >
                            Delete
                        </Button>

                    </Stack>

                </Stack>

            ))}

        </Box>

    );
}