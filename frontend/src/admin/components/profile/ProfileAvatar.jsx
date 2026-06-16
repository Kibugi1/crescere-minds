import {
    Avatar,
    Box,
    Button,
    Stack,
    Typography,
} from "@mui/material";

import {
    Camera,
} from "lucide-react";

import {
    useRef,
    useState,
} from "react";

export default function ProfileAvatar() {

    const [image, setImage] =
        useState(null);

    const fileInputRef =
        useRef(null);


    const handleImageChange =
        (event) => {

            const file =
                event.target.files[0];

            if (file) {

                setImage(

                    URL.createObjectURL(
                        file
                    )
                );
            }
        };


    return (

        <Box
            sx={{

                backgroundColor:
                    "white",

                borderRadius:
                    "24px",

                p: 4,

                boxShadow:
                    "0 10px 40px rgba(0,0,0,0.04)",

                border:
                    "1px solid rgba(0,0,0,0.04)",
            }}
        >

            <Stack
                spacing={3}

                alignItems="center"
            >

                <Avatar
                    src={image}

                    sx={{

                        width: 140,

                        height: 140,

                        backgroundColor:
                            "#2E7D32",

                        fontSize:
                            "3rem",

                        fontWeight: 700,
                    }}
                >
                    B
                </Avatar>



                <Typography
                    sx={{

                        color: "#6B7280",

                        textAlign: "center",
                    }}
                >
                    Upload a profile picture
                    for your administrator
                    account.
                </Typography>



                <input
                    type="file"

                    accept="image/*"

                    hidden

                    ref={fileInputRef}

                    onChange={
                        handleImageChange
                    }
                />



                <Button
                    variant="contained"

                    startIcon={
                        <Camera
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

                        px: 3,

                        py: 1.2,

                        textTransform:
                            "none",

                        fontWeight: 700,

                        backgroundColor:
                            "#2E7D32",

                        "&:hover": {

                            backgroundColor:
                                "#256428",
                        },
                    }}
                >
                    Change Photo
                </Button>

            </Stack>

        </Box>
    );
}