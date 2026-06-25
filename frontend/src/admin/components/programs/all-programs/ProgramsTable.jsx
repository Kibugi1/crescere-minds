import {
    Box,
    Button,
    Chip,
    Stack,
    Avatar,
    Typography,
} from "@mui/material";

import {
    useEffect,
    useState,
} from "react";

import axios from "axios";

import {
    Pencil,
    Trash2,
} from "lucide-react";



export default function ProgramsTable() {

    const [programs, setPrograms] = useState([]);

    useEffect(() => { fetchPrograms(); }, []);

    const fetchPrograms =
        async () => {

            try {

                const response =
                    await axios.get(

                        "http://127.0.0.1:5000/api/programs"
                    );

                setPrograms(
                    response.data
                );

            } catch (error) {

                console.error(
                    error
                );
            }
        };

    return (

        <Box
            sx={{

                backgroundColor: "white",

                borderRadius: "24px",

                p: 3,

                border:
                    "1px solid rgba(0,0,0,0.04)",

                boxShadow:
                    "0 10px 40px rgba(0,0,0,0.04)",
            }}
        >

            {/* TABLE HEADER */}

            <Box
                sx={{

                    display: {
                        xs: "none",
                        lg: "grid",
                    },

                    gridTemplateColumns:
                        "minmax(250px, 3fr) minmax(150px, 1.5fr) 120px 120px 120px 180px",

                    gap: 2,

                    pb: 2,

                    borderBottom:
                        "1px solid rgba(0,0,0,0.08)",
                }}
            >

                <Typography fontWeight={700}>
                    Image
                </Typography>

                <Typography fontWeight={700}>
                    Program
                </Typography>

                <Typography fontWeight={700}>
                    Category
                </Typography>

                <Typography fontWeight={700}>
                    Status
                </Typography>

                <Typography fontWeight={700}>
                    Date
                </Typography>

                <Typography fontWeight={700}>
                    Actions
                </Typography>
            </Box>



            {/* PROGRAMS */}

            {programs.map((program) => (

                <Box

                    key={program.id}

                    sx={{

                        display: {
                            xs: "flex",
                            lg: "grid",
                        },

                        flexDirection: "column",

                        gridTemplateColumns:
                            "90px minmax(250px, 3fr) minmax(150px, 1.5fr) 120px 120px 180px",

                        gap: 2,

                        py: 3,

                        borderBottom:
                            "1px solid rgba(0,0,0,0.06)",
                    }}
                >

                    {/* IMAGE */}

                    <Avatar

                        src={
                            `http://127.0.0.1:5000/api/uploads/${program.image}`
                        }

                        variant="rounded"

                        sx={{
                            width: 56,
                            height: 56,
                        }}
                    />



                    {/* TITLE */}

                    <Typography fontWeight={700}>
                        {program.title}
                    </Typography>



                    {/* CATEGORY */}

                    <Typography
                        color="#6B7280"
                    >
                        {program.category}
                    </Typography>



                    {/* STATUS */}

                    <Chip

                        label={program.status}

                        color={
                            program.status ===
                                "published"

                                ? "success"

                                : "default"
                        }

                        sx={{
                            width: "fit-content",
                        }}
                    />



                    {/* DATE */}

                    <Typography
                        color="#6B7280"
                    >
                        {
                            new Date(
                                program.created_at
                            ).toLocaleDateString()
                        }
                    </Typography>



                    {/* ACTIONS */}

                    <Stack

                        direction="row"

                        spacing={1}
                    >

                        <Button

                            startIcon={
                                <Pencil size={16} />
                            }

                            sx={{
                                textTransform:
                                    "none",
                            }}
                        >
                            Edit
                        </Button>

                        <Button

                            color="error"

                            startIcon={
                                <Trash2 size={16} />
                            }

                            sx={{
                                textTransform:
                                    "none",
                            }}
                        >
                            Delete
                        </Button>

                    </Stack>

                </Box>

            ))}

        </Box>

    );
}