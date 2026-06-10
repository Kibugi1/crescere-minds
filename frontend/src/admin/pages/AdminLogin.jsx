import {
    Box,
    Button,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

import {
    Lock,
} from "lucide-react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        setError("");

        try {

            const response =
                await axios.post(

                    "http://127.0.0.1:5000/api/auth/login",

                    {
                        email,
                        password,
                    }
                );

            console.log(response.data);

            localStorage.setItem(
                "token",
                response.data.token
            );

            localStorage.setItem(
                "admin",

                JSON.stringify(
                    response.data.admin
                )
            );

            navigate(
                "/admin/dashboard"
            );

        }

        catch (err) {

            console.error(err);

            setError(
                "Invalid email or password."
            );
        }

        finally {

            setLoading(false);
        }
    };

    return (

        <Box
            sx={{

                minHeight: "100vh",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                px: 2,

                backgroundColor: "#F9FAFB",
            }}
        >

            <Paper
                elevation={0}

                sx={{

                    width: "100%",

                    maxWidth: 450,

                    p: 5,

                    borderRadius: "32px",

                    border:
                        "1px solid rgba(0,0,0,0.06)",

                    boxShadow:
                        "0 20px 60px rgba(0,0,0,0.06)",
                }}
            >

                <Stack spacing={4}>

                    {/* HEADER */}

                    <Box textAlign="center">

                        <Box
                            sx={{

                                width: 72,

                                height: 72,

                                borderRadius: "20px",

                                backgroundColor:
                                    "rgba(46,125,50,0.12)",

                                display: "flex",

                                alignItems: "center",

                                justifyContent: "center",

                                mx: "auto",

                                mb: 2,

                                color: "#2E7D32",
                            }}
                        >

                            <Lock size={32} />

                        </Box>

                        <Typography
                            sx={{

                                fontSize: "2rem",

                                fontWeight: 800,

                                color: "#111827",
                            }}
                        >
                            Admin Login
                        </Typography>

                        <Typography
                            sx={{

                                color: "#6B7280",

                                mt: 1,
                            }}
                        >
                            Sign in to access the
                            Crescere dashboard.
                        </Typography>

                    </Box>



                    {/* FORM */}
                    <Box
                        component="form"

                        onSubmit={handleSubmit}
                        sx={{

                            display: "flex",

                            flexDirection: "column",

                            gap: 3,
                        }}
                    >
                        <Stack spacing={3}>

                            <TextField

                                label="Email"

                                type="email"

                                fullWidth

                                value={email}

                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                            />

                            <TextField

                                label="Password"

                                type="password"

                                fullWidth

                                value={password}

                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                            />


                        </Stack>

                        {/* BUTTON */}
                        {
                            error && (

                                <Typography
                                    color="error"
                                >
                                    {error}
                                </Typography>
                            )
                        }
                        <Button
                            type="submit"

                            disabled={loading}

                            variant="contained"

                            size="large"

                            fullWidth

                            sx={{

                                py: 1.6,

                                borderRadius: "16px",

                                textTransform: "none",

                                fontWeight: 700,

                                backgroundColor: "#2E7D32",

                                "&:hover": {

                                    backgroundColor:
                                        "#256428",
                                },
                            }}

                        >

                            {loading ? "Signing In..." : "Sign In"}

                        </Button>
                    </Box>

                </Stack>

            </Paper>

        </Box>

    );
}