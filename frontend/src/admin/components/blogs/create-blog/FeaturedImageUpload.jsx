import {
    Box,
    Button,
    Stack,
    Typography,
} from "@mui/material";

import {
    ImagePlus,
} from "lucide-react";

import {
    useRef,
} from "react";

export default function FeaturedImageUpload({
    image,
    setImage,
    existingImage,
}) {

    const fileInputRef =
        useRef(null);


    const handleImageChange =
        (event) => {

            const file =
                event.target.files[0];

            if (file) {

                setImage(file);
            }
        };


    return (

        <Box
            sx={{

                backgroundColor:
                    "white",

                borderRadius:
                    "24px",

                p: 3,

                border:
                    "1px solid rgba(0,0,0,0.04)",

                boxShadow:
                    "0 10px 40px rgba(0,0,0,0.04)",
            }}
        >

            <Typography
                sx={{

                    fontWeight: 700,

                    fontSize: "1.1rem",

                    color: "#111827",

                    mb: 2,
                }}
            >
                Featured Image
            </Typography>



            <Stack
                spacing={3}
            >

                <Box
                    sx={{

                        width: "100%",

                        height: 250,

                        borderRadius:
                            "20px",

                        overflow:
                            "hidden",

                        border:
                            "2px dashed rgba(0,0,0,0.1)",

                        display: "flex",

                        justifyContent:
                            "center",

                        alignItems:
                            "center",

                        backgroundColor:
                            "#F9FAFB",
                    }}
                >

                    {image || existingImage ? (

                        <Box
                            component="img"

                            src={
                                image
                                    ? URL.createObjectURL(
                                        image
                                    )
                                    : `http://127.0.0.1:5000/api/blogs/uploads/${existingImage}`
                            }

                            alt="Featured"

                            sx={{

                                width: "100%",

                                height: "100%",

                                objectFit:
                                    "cover",
                            }}
                        />

                    ) : (

                        <Typography
                            sx={{
                                color:
                                    "#9CA3AF",
                            }}
                        >
                            No image selected
                        </Typography>

                    )}

                </Box>



                <input
                    hidden

                    type="file"

                    accept="image/*"

                    ref={
                        fileInputRef
                    }

                    onChange={
                        handleImageChange
                    }
                />



                <Button
                    variant="outlined"

                    startIcon={
                        <ImagePlus
                            size={18}
                        />
                    }

                    onClick={() =>

                        fileInputRef
                            .current
                            ?.click()
                    }

                    sx={{

                        borderRadius:
                            "16px",

                        textTransform:
                            "none",

                        fontWeight: 700,

                        py: 1.4,
                    }}
                >
                    Choose Featured Image
                </Button>

            </Stack>

        </Box>

    );
}