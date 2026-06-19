import {
    Box,
    Grid,
    MenuItem,
    TextField,
} from "@mui/material";

export default function ProgramForm({
    title,
    setTitle,

    excerpt,
    setExcerpt,

    category,
    setCategory,
}
) {

    return (

        <Box
            sx={{

                backgroundColor: "white",

                borderRadius: "24px",

                p: 4,

                mb: 4,

                border:
                    "1px solid rgba(0,0,0,0.04)",

                boxShadow:
                    "0 10px 40px rgba(0,0,0,0.04)",
            }}
        >

            <Grid container spacing={3}>

                {/* PROGRAM NAME */}

                <Grid size={{ xs: 12 }}>

                    <TextField
                        fullWidth
                        label="Program Name"
                        placeholder="Teen Wellness Program"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                    />

                </Grid>



                {/* EXCERPT */}

                <Grid size={{ xs: 12 }}>

                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        label="Excerpt"
                        placeholder="Short summary shown on program cards..."
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                    />

                </Grid>



                {/* CATEGORY */}

                <Grid size={{ xs: 12, md: 6 }}>

                    <TextField
                        select
                        fullWidth
                        label="Category"
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)
                        }
                    >

                        <MenuItem value="">
                            Select Category
                        </MenuItem>

                        <MenuItem value="teen">
                            Teen Programs
                        </MenuItem>

                        <MenuItem value="family">
                            Family Programs
                        </MenuItem>

                        <MenuItem value="community">
                            Community Programs
                        </MenuItem>

                        <MenuItem value="school">
                            School Programs
                        </MenuItem>

                    </TextField>

                </Grid>

            </Grid>

        </Box>

    );
}