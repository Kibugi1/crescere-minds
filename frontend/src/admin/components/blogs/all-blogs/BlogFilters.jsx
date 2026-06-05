import {
    Box,
    MenuItem,
    Stack,
    TextField,
} from "@mui/material";

export default function BlogFilters() {

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

                {/* SEARCH */}

                <TextField

                    fullWidth

                    placeholder="Search blogs..."

                    size="small"

                    sx={{
                        flex: 1,
                    }}
                />



                {/* CATEGORY */}

                <TextField

                    select

                    size="small"

                    defaultValue="all"

                    sx={{
                        minWidth: {
                            xs: "100%",
                            md: 220,
                        },
                    }}
                >

                    <MenuItem value="all">
                        All Categories
                    </MenuItem>

                    <MenuItem value="wellness">
                        Mental Wellness
                    </MenuItem>

                    <MenuItem value="anxiety">
                        Anxiety
                    </MenuItem>

                    <MenuItem value="relationships">
                        Relationships
                    </MenuItem>

                    <MenuItem value="growth">
                        Personal Growth
                    </MenuItem>

                </TextField>



                {/* STATUS */}

                <TextField

                    select

                    size="small"

                    defaultValue="all"

                    sx={{
                        minWidth: {
                            xs: "100%",
                            md: 180,
                        },
                    }}
                >

                    <MenuItem value="all">
                        All Status
                    </MenuItem>

                    <MenuItem value="published">
                        Published
                    </MenuItem>

                    <MenuItem value="draft">
                        Draft
                    </MenuItem>

                </TextField>

            </Stack>

        </Box>

    );
}