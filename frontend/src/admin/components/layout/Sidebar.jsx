import {
    LayoutDashboard,
    FileText,
    MessageSquare,
    Mail,
    BookOpen,
    CalendarDays,
    Video,
    Users,
    Bell,
    BarChart3,
    Settings,
    UserCircle2,
    ChevronDown,
} from "lucide-react";

import {
    Badge,
    Box,
    Button,
    Divider,
    Stack,
    Typography,
} from "@mui/material";

import {
    NavLink,
} from "react-router-dom";



const mainLinks = [

    {
        label: "Dashboard",
        icon: <LayoutDashboard size={20} />,
        path: "/admin/dashboard",
    },

    {
        label: "Blogs",
        icon: <FileText size={20} />,
        path: "/admin/blogs",
        dropdown: true,
    },

    {
        label: "Comments",
        icon: <MessageSquare size={20} />,
        path: "/admin/comments",
    },

    {
        label: "Inbox / Messages",
        icon: <Mail size={20} />,
        path: "/admin/inbox",
        badge: 8,
    },

    {
        label: "Programs",
        icon: <BookOpen size={20} />,
        path: "/admin/programs",
    },
];



const managementLinks = [

    {
        label: "Events",
        icon: <CalendarDays size={20} />,
        path: "/admin/events",
    },

    {
        label: "Live Sessions",
        icon: <Video size={20} />,
        path: "/admin/live-sessions",
    },

    {
        label: "Program Members",
        icon: <Users size={20} />,
        path: "/admin/members",
    },

    {
        label: "Notifications",
        icon: <Bell size={20} />,
        path: "/admin/notifications",
    },
];



const analyticsLinks = [

    {
        label: "Analytics",
        icon: <BarChart3 size={20} />,
        path: "/admin/analytics",
    },
];



const settingsLinks = [

    {
        label: "Settings",
        icon: <Settings size={20} />,
        path: "/admin/settings",
    },

    {
        label: "Profile",
        icon: <UserCircle2 size={20} />,
        path: "/admin/profile",
    },
];



export default function Sidebar() {

    return (

        <Box
            sx={{

                width: 300,

                minHeight: "100vh",

                backgroundColor: "white",

                borderRight:
                    "1px solid rgba(0,0,0,0.05)",

                px: 2.5,

                py: 3,

                display: {
                    xs: "none",
                    md: "flex",
                },

                flexDirection: "column",

                justifyContent: "space-between",

                overflowY: "auto",

                // Manipulation point:
                // increase width
                // for more spacious sidebar
            }}
        >

            {/* TOP CONTENT */}

            <Box>

                {/* LOGO SECTION */}

                <Stack
                    direction="row"

                    spacing={1.5}

                    alignItems="center"

                    sx={{
                        mb: 5,
                    }}
                >

                    <Box
                        component="img"

                        src="/logo.png"

                        alt="Crescere Minds"

                        sx={{

                            width: 60,

                            objectFit: "contain",

                            // Manipulation point:
                            // increase width
                            // for larger logo
                        }}
                    />



                    <Box>

                        <Typography
                            sx={{

                                fontWeight: 800,

                                fontSize: "1.7rem",

                                color: "#111827",

                                lineHeight: 1.1,
                            }}
                        >
                            Crescere Minds
                        </Typography>



                        <Typography
                            sx={{

                                color: "#6B7280",

                                fontSize: "0.98rem",

                                mt: 0.3,
                            }}
                        >
                            Admin Dashboard
                        </Typography>

                    </Box>

                </Stack>



                {/* MAIN NAVIGATION */}

                <Stack spacing={1}>

                    {mainLinks.map((item) => (

                        <Button

                            key={item.label}

                            component={NavLink}

                            to={item.path}

                            sx={{

                                justifyContent: "space-between",

                                px: 2,

                                py: 1.7,

                                borderRadius: "20px",

                                textTransform: "none",

                                color: "#374151",

                                fontWeight: 600,

                                transition:
                                    "all 0.3s ease",

                                "&.active": {

                                    backgroundColor:
                                        "rgba(76,175,80,0.10)",

                                    color: "#2E7D32",
                                },

                                "&:hover": {

                                    backgroundColor:
                                        "rgba(76,175,80,0.06)",
                                },

                                // Manipulation point:
                                // increase borderRadius
                                // for softer nav feel
                            }}
                        >

                            <Stack
                                direction="row"

                                spacing={1.5}

                                alignItems="center"
                            >

                                {item.icon}

                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                    }}
                                >
                                    {item.label}
                                </Typography>

                            </Stack>



                            <Stack
                                direction="row"

                                spacing={1}

                                alignItems="center"
                            >

                                {item.badge && (

                                    <Badge
                                        badgeContent={item.badge}

                                        color="success"
                                    />
                                )}



                                {item.dropdown && (

                                    <ChevronDown
                                        size={18}
                                    />
                                )}

                            </Stack>

                        </Button>

                    ))}

                </Stack>



                <Divider
                    sx={{
                        my: 4,
                    }}
                />



                {/* MANAGEMENT */}

                <Typography
                    sx={{

                        color: "#6B7280",

                        fontSize: "0.92rem",

                        fontWeight: 700,

                        mb: 2,

                        px: 1,
                    }}
                >
                    Management
                </Typography>



                <Stack spacing={1}>

                    {managementLinks.map((item) => (

                        <Button

                            key={item.label}

                            component={NavLink}

                            to={item.path}

                            sx={{

                                justifyContent: "flex-start",

                                gap: 1.5,

                                px: 2,

                                py: 1.6,

                                borderRadius: "18px",

                                textTransform: "none",

                                color: "#374151",

                                fontWeight: 600,

                                transition:
                                    "all 0.3s ease",

                                "&.active": {

                                    backgroundColor:
                                        "rgba(76,175,80,0.10)",

                                    color: "#2E7D32",
                                },

                                "&:hover": {

                                    backgroundColor:
                                        "rgba(76,175,80,0.06)",
                                },
                            }}
                        >

                            {item.icon}

                            {item.label}

                        </Button>

                    ))}

                </Stack>



                <Divider
                    sx={{
                        my: 4,
                    }}
                />



                {/* ANALYTICS */}

                <Typography
                    sx={{

                        color: "#6B7280",

                        fontSize: "0.92rem",

                        fontWeight: 700,

                        mb: 2,

                        px: 1,
                    }}
                >
                    Analytics
                </Typography>



                <Stack spacing={1}>

                    {analyticsLinks.map((item) => (

                        <Button

                            key={item.label}

                            component={NavLink}

                            to={item.path}

                            sx={{

                                justifyContent: "flex-start",

                                gap: 1.5,

                                px: 2,

                                py: 1.6,

                                borderRadius: "18px",

                                textTransform: "none",

                                color: "#374151",

                                fontWeight: 600,

                                transition:
                                    "all 0.3s ease",

                                "&.active": {

                                    backgroundColor:
                                        "rgba(76,175,80,0.10)",

                                    color: "#2E7D32",
                                },

                                "&:hover": {

                                    backgroundColor:
                                        "rgba(76,175,80,0.06)",
                                },
                            }}
                        >

                            {item.icon}

                            {item.label}

                        </Button>

                    ))}

                </Stack>



                <Divider
                    sx={{
                        my: 4,
                    }}
                />



                {/* SETTINGS */}

                <Typography
                    sx={{

                        color: "#6B7280",

                        fontSize: "0.92rem",

                        fontWeight: 700,

                        mb: 2,

                        px: 1,
                    }}
                >
                    Settings
                </Typography>



                <Stack spacing={1}>

                    {settingsLinks.map((item) => (

                        <Button

                            key={item.label}

                            component={NavLink}

                            to={item.path}

                            sx={{

                                justifyContent: "flex-start",

                                gap: 1.5,

                                px: 2,

                                py: 1.6,

                                borderRadius: "18px",

                                textTransform: "none",

                                color: "#374151",

                                fontWeight: 600,

                                transition:
                                    "all 0.3s ease",

                                "&.active": {

                                    backgroundColor:
                                        "rgba(76,175,80,0.10)",

                                    color: "#2E7D32",
                                },

                                "&:hover": {

                                    backgroundColor:
                                        "rgba(76,175,80,0.06)",
                                },
                            }}
                        >

                            {item.icon}

                            {item.label}

                        </Button>

                    ))}

                </Stack>

            </Box>



            {/* BOTTOM CARD */}

            <Box
                sx={{

                    mt: 5,

                    borderRadius: "28px",

                    background:
                        "linear-gradient(180deg,#F5FAF4,#EEF7EC)",

                    p: 3,

                    overflow: "hidden",

                    position: "relative",

                    // Manipulation point:
                    // increase p
                    // for larger card spacing
                }}
            >

                <Typography
                    sx={{

                        fontWeight: 800,

                        color: "#2E7D32",

                        fontSize: "1.7rem",

                        lineHeight: 1.2,
                    }}
                >
                    You’re making
                    <br />
                    a difference 💚
                </Typography>



                <Typography
                    sx={{

                        color: "#4B5563",

                        mt: 2,

                        lineHeight: 1.9,

                        maxWidth: 220,
                    }}
                >
                    Every action helps create
                    a healthier mind and
                    a better tomorrow.
                </Typography>



                {/* DECORATION */}

                <Box
                    sx={{

                        position: "absolute",

                        right: -10,

                        bottom: -10,

                        fontSize: "7rem",

                        opacity: 0.12,
                    }}
                >
                    🌿
                </Box>

            </Box>

        </Box>
    );
}