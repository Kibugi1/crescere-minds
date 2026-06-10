import {
    Box,
    Grid,
    MenuItem,
    TextField,
} from "@mui/material";

export default function ProgramForm() {

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

            <Grid
                container

                spacing={3}
            >

                <Grid size={{ xs: 12 }}>

                    <TextField

                        fullWidth

                        label="Program Name"

                        placeholder="Teen Wellness Program"
                    />

                </Grid>



                <Grid size={{ xs: 12 }}>

                    <TextField

                        fullWidth

                        multiline

                        rows={5}

                        label="Description"

                        placeholder="Describe the program objectives..."
                    />

                </Grid>



                <Grid size={{ xs: 12, md: 6 }}>

                    <TextField

                        select

                        fullWidth

                        label="Category"

                        defaultValue=""
                    >

                        <MenuItem value="">
                            Select Category
                        </MenuItem>

                        <MenuItem value="mental">
                            Mental Wellness
                        </MenuItem>

                        <MenuItem value="teen">
                            Teen Wellness
                        </MenuItem>

                        <MenuItem value="selfcare">
                            Self Care
                        </MenuItem>

                    </TextField>

                </Grid>



                <Grid size={{ xs: 12, md: 6 }}>

                    <TextField

                        fullWidth

                        label="Duration"

                        placeholder="8 Weeks"
                    />

                </Grid>



                <Grid size={{ xs: 12, md: 6 }}>

                    <TextField

                        fullWidth

                        type="date"

                        label="Start Date"

                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </Grid>



                <Grid size={{ xs: 12, md: 6 }}>

                    <TextField

                        fullWidth

                        type="date"

                        label="End Date"

                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </Grid>



                <Grid size={{ xs: 12, md: 6 }}>

                    <TextField

                        fullWidth

                        type="number"

                        label="Capacity"

                        placeholder="50"
                    />

                </Grid>



                <Grid size={{ xs: 12, md: 6 }}>

                    <TextField

                        select

                        fullWidth

                        label="Status"

                        defaultValue="draft"
                    >

                        <MenuItem value="draft">
                            Draft
                        </MenuItem>

                        <MenuItem value="active">
                            Active
                        </MenuItem>

                    </TextField>

                </Grid>

            </Grid>

        </Box>

    );
}