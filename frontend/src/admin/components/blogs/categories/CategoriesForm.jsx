import {
    Box,
    Button,
    Stack,
    TextField,
} from "@mui/material";

export default function CategoriesForm() {

    return (

        <Box
            sx={{

                backgroundColor: "white",

                borderRadius: "24px",

                p: 3,

                mb: 4,

                border:
                    "1px solid rgba(0,0,0,0.04)",

                boxShadow:
                    "0 10px 40px rgba(0,0,0,0.04)",
            }}
        >

            <Stack
                direction={{
                    xs: "column",
                    md: "row",
                }}

                spacing={2}
            >

                <TextField

                    fullWidth

                    label="Category Name"

                    placeholder="Mental Wellness"
                />

                <Button

                    variant="contained"

                    sx={{

                        minWidth: 180,

                        borderRadius: "16px",

                        backgroundColor: "#2E7D32",

                        textTransform: "none",
                    }}
                >
                    Save Category
                </Button>

            </Stack>

        </Box>
    );
}