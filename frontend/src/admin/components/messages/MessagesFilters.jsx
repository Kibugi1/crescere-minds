import {
    Box,
    MenuItem,
    Stack,
    TextField,
} from "@mui/material";

export default function MessagesFilters() {

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

                    size="small"

                    placeholder="Search messages..."
                />

                <TextField

                    select

                    size="small"

                    defaultValue="all"

                    sx={{
                        minWidth: 180,
                    }}
                >

                    <MenuItem value="all">
                        All Status
                    </MenuItem>

                    <MenuItem value="new">
                        New
                    </MenuItem>

                    <MenuItem value="read">
                        Read
                    </MenuItem>

                </TextField>

            </Stack>

        </Box>

    );
}