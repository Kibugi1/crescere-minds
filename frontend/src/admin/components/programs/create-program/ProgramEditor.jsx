import { CKEditor } from "@ckeditor/ckeditor5-react";

import ClassicEditor from
    "@ckeditor/ckeditor5-build-classic";

import {
    Box,
} from "@mui/material";

export default function ProgramEditor({
    value,
    onChange,
}) {

    return (

        <Box
            sx={{

                backgroundColor:
                    "white",

                borderRadius:
                    "24px",

                overflow:
                    "hidden",

                border:
                    "1px solid rgba(0,0,0,0.04)",

                boxShadow:
                    "0 10px 40px rgba(0,0,0,0.04)",
            }}
        >

            <CKEditor

                editor={
                    ClassicEditor
                }

                data={value}

                onChange={(
                    event,
                    editor
                ) => {

                    const data =
                        editor.getData();

                    onChange(data);
                }}

                config={{

                    placeholder:
                        "Start writing your program's details here...",
                }}

            />

        </Box>

    );
}