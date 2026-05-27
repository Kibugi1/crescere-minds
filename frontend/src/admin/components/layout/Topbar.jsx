import {
    Bell,
    Mail,
    Menu,
    Search,
    ChevronDown,
} from "lucide-react";

import {
    Avatar,
    Badge,
    Box,
    IconButton,
    InputBase,
    Stack,
    Typography,
} from "@mui/material";



export default function Topbar() {

    return (

        <Box
            sx={{

                height: 90,

                px: {
                    xs: 2,
                    md: 4,
                },

                display: "flex",

                alignItems: "center",

                justifyContent: "space-between",

                backgroundColor: "#F5F7F2",

                position: "sticky",

                top: 0,

                zIndex: 1200,

                // Manipulation point:
                // increase height
                // for larger topbar spacing
            }}
        >

            {/* LEFT SIDE */}

            <Stack
                direction="row"

                spacing={2}

                alignItems="center"

                sx={{
                    flex: 1,
                }}
            >

                {/* MENU BUTTON */}

                <IconButton
                    sx={{

                        width: 48,

                        height: 48,

                        borderRadius: "14px",

                        color: "#374151",

                        // Manipulation point:
                        // increase width/height
                        // for larger action buttons
                    }}
                >

                    <Menu size={24} />

                </IconButton>



                {/* SEARCH BAR */}

                <Box
                    sx={{

                        flex: 1,

                        maxWidth: 600,

                        height: 56,

                        display: "flex",

                        alignItems: "center",

                        gap: 1.5,

                        px: 2.5,

                        borderRadius: "18px",

                        backgroundColor:
                            "rgba(255,255,255,0.82)",

                        border:
                            "1px solid rgba(0,0,0,0.04)",

                        transition:
                            "all 0.3s ease",

                        "&:focus-within": {

                            border:
                                "1px solid rgba(76,175,80,0.22)",

                            boxShadow:
                                "0 0 0 4px rgba(76,175,80,0.06)",
                        },

                        // Manipulation point:
                        // increase maxWidth
                        // for wider desktop search
                    }}
                >

                    <Search
                        size={20}
                        color="#6B7280"
                    />



                    <InputBase
                        placeholder="Search anything..."

                        sx={{

                            flex: 1,

                            fontSize: "0.98rem",
                        }}
                    />



                    {/* KEYBOARD SHORTCUT */}

                    <Box
                        sx={{

                            px: 1,

                            py: 0.5,

                            borderRadius: "8px",

                            backgroundColor:
                                "rgba(0,0,0,0.04)",

                            display: {
                                xs: "none",
                                md: "flex",
                            },

                            alignItems: "center",

                            justifyContent: "center",
                        }}
                    >

                        <Typography
                            sx={{

                                fontSize: "0.78rem",

                                fontWeight: 700,

                                color: "#6B7280",
                            }}
                        >
                            ⌘ K
                        </Typography>

                    </Box>

                </Box>

            </Stack>



            {/* RIGHT SIDE */}

            <Stack
                direction="row"

                spacing={{
                    xs: 1,
                    md: 2,
                }}

                alignItems="center"

                sx={{
                    ml: 2,
                }}
            >

                {/* NOTIFICATIONS */}

                <IconButton
                    sx={{

                        position: "relative",

                        color: "#111827",

                        width: 48,

                        height: 48,

                        borderRadius: "14px",

                        "&:hover": {

                            backgroundColor:
                                "rgba(76,175,80,0.08)",
                        },
                    }}
                >

                    <Badge
                        badgeContent={8}

                        color="success"
                    >

                        <Bell size={22} />

                    </Badge>

                </IconButton>



                {/* MESSAGES */}

                <IconButton
                    sx={{

                        position: "relative",

                        color: "#111827",

                        width: 48,

                        height: 48,

                        borderRadius: "14px",

                        "&:hover": {

                            backgroundColor:
                                "rgba(76,175,80,0.08)",
                        },
                    }}
                >

                    <Badge
                        badgeContent={3}

                        color="success"
                    >

                        <Mail size={22} />

                    </Badge>

                </IconButton>



                {/* PROFILE */}

                <Stack
                    direction="row"

                    spacing={1.4}

                    alignItems="center"

                    sx={{

                        pl: {
                            xs: 1,
                            md: 2,
                        },
                    }}
                >

                    <Avatar
                        src=""

                        sx={{

                            width: 50,

                            height: 50,

                            backgroundColor:
                                "#2E7D32",

                            fontWeight: 700,
                        }}
                    >
                        B
                    </Avatar>



                    <Box
                        sx={{

                            display: {
                                xs: "none",
                                sm: "block",
                            },
                        }}
                    >

                        <Typography
                            sx={{

                                fontWeight: 700,

                                color: "#111827",

                                lineHeight: 1.1,

                                fontSize: "1rem",
                            }}
                        >
                            Brian Admin
                        </Typography>



                        <Typography
                            sx={{

                                color: "#6B7280",

                                fontSize: "0.9rem",

                                mt: 0.4,
                            }}
                        >
                            Super Admin
                        </Typography>

                    </Box>



                    <IconButton
                        sx={{

                            display: {
                                xs: "none",
                                sm: "flex",
                            },

                            color: "#6B7280",
                        }}
                    >

                        <ChevronDown size={18} />

                    </IconButton>

                </Stack>

            </Stack>

        </Box>
    );
}