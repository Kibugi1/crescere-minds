import {
    Box,
    Stack,
    Typography,
    Avatar,
} from "@mui/material";



const activities = [

    {
        title: "New comment awaiting moderation",
        subtitle: "Mental Wellness Blog",
        time: "2 mins ago",
    },

    {
        title: "New program registration",
        subtitle: "Youth Wellness Program",
        time: "15 mins ago",
    },

    {
        title: "Blog post published",
        subtitle: "Managing Anxiety",
        time: "1 hour ago",
    },

    {
        title: "Partnership inquiry received",
        subtitle: "Community Outreach",
        time: "3 hours ago",
    },
];



export default function RecentActivity() {

    return (

        <Box
            sx={{

                backgroundColor: "white",

                borderRadius: "28px",

                p: 3,

                border:
                    "1px solid rgba(0,0,0,0.04)",

                boxShadow:
                    "0 10px 40px rgba(0,0,0,0.04)",

                height: "100%",
            }}
        >

            {/* HEADER */}

            <Stack
                direction="row"

                justifyContent="space-between"

                alignItems="center"

                sx={{
                    mb: 3,
                }}
            >

                <Typography
                    sx={{

                        fontWeight: 800,

                        fontSize: "1.3rem",

                        color: "#111827",
                    }}
                >
                    Recent Activity
                </Typography>



                <Typography
                    sx={{

                        color: "#2E7D32",

                        fontWeight: 700,

                        cursor: "pointer",

                        ml: "auto",
                    }}
                >
                    View All
                </Typography>

            </Stack>



            {/* ACTIVITIES */}

            <Stack spacing={3}>

                {activities.map((activity) => (

                    <Stack
                        key={activity.title}

                        direction="row"

                        spacing={2}

                        alignItems="flex-start"
                    >

                        {/* DOT / AVATAR */}

                        <Avatar
                            sx={{

                                width: 42,

                                height: 42,

                                backgroundColor:
                                    "rgba(76,175,80,0.12)",

                                color: "#2E7D32",

                                fontWeight: 700,
                            }}
                        >
                            •
                        </Avatar>



                        {/* CONTENT */}

                        <Box>

                            <Typography
                                sx={{

                                    fontWeight: 700,

                                    color: "#111827",

                                    lineHeight: 1.4,
                                }}
                            >
                                {activity.title}
                            </Typography>



                            <Typography
                                sx={{

                                    color: "#6B7280",

                                    mt: 0.4,

                                    fontSize: "0.95rem",
                                }}
                            >
                                {activity.subtitle}
                            </Typography>



                            <Typography
                                sx={{

                                    color: "#9CA3AF",

                                    mt: 0.8,

                                    fontSize: "0.85rem",
                                }}
                            >
                                {activity.time}
                            </Typography>

                        </Box>

                    </Stack>

                ))}

            </Stack>

        </Box>
    );
}