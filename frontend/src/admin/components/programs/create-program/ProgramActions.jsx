import {
    Button,
    Stack,
} from "@mui/material";

export default function ProgramActions({
    onPublish,

    onSaveDraft,

    publishLoading,

    draftLoading,

}) {

    return (

        <Stack
            direction="row"

            spacing={2}

            justifyContent="center"
        >

            <Button

                variant="outlined"
                onClick={onSaveDraft}
                disabled={draftLoading}
                sx={{

                    borderRadius: "16px",

                    px: 3,

                    py: 1.3,

                    textTransform: "none",
                }}
            >
                Save Draft
            </Button>



            <Button

                variant="contained"
                onClick={onPublish}
                disabled={publishLoading}
                sx={{

                    borderRadius: "16px",

                    px: 3,

                    py: 1.3,

                    textTransform: "none",

                    backgroundColor: "#2E7D32",
                }}
            >
                Publish Program
            </Button>

        </Stack>

    );
}