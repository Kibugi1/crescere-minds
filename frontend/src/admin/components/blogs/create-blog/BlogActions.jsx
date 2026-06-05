import {
    Box,
    Button,
    Stack,
} from "@mui/material";

export default function BlogActions() {

    return (

        <Box>

            <Stack

                direction="row"

                justifyContent="flex-end"

                spacing={2}
            >

                <Button

                    variant="outlined"

                    sx={{

                        borderRadius: "14px",

                        px: 3,

                        py: 1.2,

                        textTransform: "none",

                        fontWeight: 600,
                    }}
                >
                    Save Draft
                </Button>



                <Button

                    variant="contained"

                    sx={{

                        borderRadius: "14px",

                        px: 3,

                        py: 1.2,

                        textTransform: "none",

                        fontWeight: 600,

                        backgroundColor:
                            "#2E7D32",

                        "&:hover": {

                            backgroundColor:
                                "#256428",
                        },
                    }}
                >
                    Publish Blog
                </Button>

            </Stack>

        </Box>

    );
}