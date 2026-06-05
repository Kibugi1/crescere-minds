import {
    Box,
    Stack,
    TextField,
} from "@mui/material";

export default function DraftsFilters() {

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

            <Stack>

                <TextField

                    placeholder="Search drafts..."

                    fullWidth

                    size="small"
                />

            </Stack>

        </Box>
    );
}