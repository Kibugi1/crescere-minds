import {
    Box,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

export default function BlogForm() {

    return (

        <Box
            sx={{

                backgroundColor: "white",

                borderRadius: "24px",

                p: 4,

                border:
                    "1px solid rgba(0,0,0,0.04)",

                boxShadow:
                    "0 10px 40px rgba(0,0,0,0.04)",

                mb: 3,
            }}
        >

            <Stack spacing={3}>

                {/* TITLE */}

                <Box>

                    <Typography
                        sx={{
                            mb: 1,
                            fontWeight: 600,
                        }}
                    >
                        Blog Title
                    </Typography>

                    <TextField
                        fullWidth
                        placeholder="Enter blog title"
                    />

                </Box>



                {/* CATEGORY */}

                <Box>

                    <Typography
                        sx={{
                            mb: 1,
                            fontWeight: 600,
                        }}
                    >
                        Category
                    </Typography>

                    <TextField
                        select
                        fullWidth
                        defaultValue=""
                    >

                        <MenuItem value="">
                            Select Category
                        </MenuItem>

                        <MenuItem value="wellness">
                            Mental Wellness
                        </MenuItem>

                        <MenuItem value="teen">
                            Teen Wellness
                        </MenuItem>

                        <MenuItem value="relationships">
                            Relationships
                        </MenuItem>

                        <MenuItem value="selfcare">
                            Self Care
                        </MenuItem>

                    </TextField>

                </Box>



                {/* FEATURED IMAGE */}

                <Box>

                    <Typography
                        sx={{
                            mb: 1,
                            fontWeight: 600,
                        }}
                    >
                        Featured Image
                    </Typography>

                    <TextField
                        type="file"
                        fullWidth
                    />

                </Box>



                {/* EXCERPT */}

                <Box>

                    <Typography
                        sx={{
                            mb: 1,
                            fontWeight: 600,
                        }}
                    >
                        Excerpt
                    </Typography>

                    <TextField

                        fullWidth

                        multiline

                        rows={3}

                        placeholder="
Provide a short summary..."
                    />

                </Box>



                {/* CONTENT */}

                <Box>

                    <Typography
                        sx={{
                            mb: 1,
                            fontWeight: 600,
                        }}
                    >
                        Content
                    </Typography>

                    <TextField

                        fullWidth

                        multiline

                        rows={12}

                        placeholder="
Write your blog content..."
                    />

                </Box>

            </Stack>

        </Box>

    );
}