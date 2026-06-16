import {
    Box,
    Button,
    Grid,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

import {
    useState,
} from "react";

export default function ProfileForm() {

    const [formData, setFormData] =
        useState({

            name:
                "Brian Admin",

            email:
                "admin@crescere.com",

            phone:
                "+254 700 000 000",

            dob:
                "1998-01-01",
        });


    const handleChange = (e) => {

        const {
            name,
            value,
        } = e.target;


        setFormData((prev) => ({

            ...prev,

            [name]: value,
        }));
    };


    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(
            formData
        );

        // TODO:
        // Connect to backend
    };


    return (

        <Box
            sx={{

                backgroundColor:
                    "white",

                borderRadius:
                    "24px",

                p: {
                    xs: 3,
                    md: 4,
                },

                boxShadow:
                    "0 10px 40px rgba(0,0,0,0.04)",

                border:
                    "1px solid rgba(0,0,0,0.04)",
            }}
        >

            <Typography
                sx={{

                    fontSize: "1.3rem",

                    fontWeight: 700,

                    color: "#111827",

                    mb: 3,
                }}
            >
                Personal Information
            </Typography>


            <Box
                component="form"

                onSubmit={
                    handleSubmit
                }
            >

                <Grid
                    container

                    spacing={3}
                >

                    <Grid
                        size={{
                            xs: 12,
                            md: 6,
                        }}
                    >

                        <TextField

                            fullWidth

                            label="Full Name"

                            name="name"

                            value={
                                formData.name
                            }

                            onChange={
                                handleChange
                            }
                        />

                    </Grid>



                    <Grid
                        size={{
                            xs: 12,
                            md: 6,
                        }}
                    >

                        <TextField

                            fullWidth

                            label="Email"

                            name="email"

                            type="email"

                            value={
                                formData.email
                            }

                            onChange={
                                handleChange
                            }
                        />

                    </Grid>



                    <Grid
                        size={{
                            xs: 12,
                            md: 6,
                        }}
                    >

                        <TextField

                            fullWidth

                            label="Phone Number"

                            name="phone"

                            value={
                                formData.phone
                            }

                            onChange={
                                handleChange
                            }
                        />

                    </Grid>



                    <Grid
                        size={{
                            xs: 12,
                            md: 6,
                        }}
                    >

                        <TextField

                            fullWidth

                            label="Date of Birth"

                            name="dob"

                            type="date"

                            value={
                                formData.dob
                            }

                            onChange={
                                handleChange
                            }

                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                    </Grid>

                </Grid>



                <Stack
                    direction="row"

                    justifyContent="flex-end"

                    sx={{
                        mt: 4,
                    }}
                >

                    <Button

                        type="submit"

                        variant="contained"

                        sx={{

                            borderRadius:
                                "16px",

                            px: 4,

                            py: 1.4,

                            textTransform:
                                "none",

                            fontWeight: 700,

                            backgroundColor:
                                "#2E7D32",

                            boxShadow:
                                "0 10px 30px rgba(46,125,50,0.18)",

                            "&:hover": {

                                backgroundColor:
                                    "#256428",
                            },
                        }}
                    >
                        Save Changes
                    </Button>

                </Stack>

            </Box>

        </Box>
    );
}