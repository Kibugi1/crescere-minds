import {
    Box,
    Button,
    Stack,
} from "@mui/material";

export default function BlogActions({ onPublish, onSaveDraft, publishLoading, draftLoading }) {

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
                    onClick={onSaveDraft}
                    disabled={draftLoading}
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
                    onClick={onPublish}
                    disabled={
                        publishLoading
                    }
                >
                    {

                        publishLoading

                            ? "Publishing..."

                            : "Publish"

                    }
                </Button>

            </Stack>

        </Box>

    );
}