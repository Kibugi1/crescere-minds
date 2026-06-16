import {
    Box,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

export default function BlogForm({ title,
    setTitle,

    excerpt,
    setExcerpt,

    category,
    setCategory, }) {

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

                        value={title}

                        onChange={(e) =>

                            setTitle(
                                e.target.value
                            )
                        }
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

                        value={category}

                        onChange={(e) =>

                            setCategory(
                                e.target.value
                            )
                        }
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

                        value={excerpt}

                        onChange={(e) =>

                            setExcerpt(
                                e.target.value
                            )
                        }
                    />

                </Box>

            </Stack>

        </Box>

    );
}