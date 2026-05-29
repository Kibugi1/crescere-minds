import {
    Box,
    MenuItem,
    Select,
    Stack,
    Typography,
} from "@mui/material";

{/*import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
*/}

const data = [

    {
        day: "May 1",
        engagements: 420,
    },

    {
        day: "May 7",
        engagements: 980,
    },

    {
        day: "May 13",
        engagements: 760,
    },

    {
        day: "May 19",
        engagements: 870,
    },

    {
        day: "May 25",
        engagements: 1680,
    },

    {
        day: "May 31",
        engagements: 1120,
    },
];



export default function EngagementOverview() {

    return (

        <Box
            sx={{

                backgroundColor: "white",

                borderRadius: "28px",

                p: {
                    xs: 2,
                    md: 3,
                },

                border:
                    "1px solid rgba(0,0,0,0.04)",

                boxShadow:
                    "0 10px 40px rgba(0,0,0,0.04)",

                height: "100%",

                display: "flex",

                flexDirection: "column",

                justifyContent: "space-between",
            }}
        >

            {/* TOP SECTION */}

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
                    Engagement Overview
                </Typography>



                <Select
                    size="small"

                    defaultValue="month"

                    sx={{

                        borderRadius: "14px",

                        backgroundColor:
                            "rgba(0,0,0,0.02)",

                        minWidth: 120,

                        ".MuiOutlinedInput-notchedOutline":
                        {
                            border:
                                "1px solid rgba(0,0,0,0.05)",
                        },

                        "&:hover .MuiOutlinedInput-notchedOutline":
                        {
                            border:
                                "1px solid rgba(76,175,80,0.30)",
                        },

                        // Manipulation point:
                        // increase minWidth
                        // for larger selector
                    }}
                >

                    <MenuItem value="week">
                        This Week
                    </MenuItem>

                    <MenuItem value="month">
                        This Month
                    </MenuItem>

                    <MenuItem value="year">
                        This Year
                    </MenuItem>

                </Select>

            </Stack>



            {/* METRICS */}

            <Stack
                direction="row"

                spacing={1.5}

                alignItems="center"

                sx={{
                    mb: 3,
                }}
            >

                <Typography
                    sx={{

                        fontSize: {
                            xs: "2rem",
                            md: "2.5rem",
                        },

                        fontWeight: 800,

                        color: "#111827",

                        lineHeight: 1,
                    }}
                >
                    1,256
                </Typography>



                <Typography
                    sx={{
                        color: "#6B7280",
                    }}
                >
                    Total Engagements
                </Typography>



                <Typography
                    sx={{

                        color: "#2E7D32",

                        fontWeight: 700,

                        fontSize: "0.92rem",
                    }}
                >
                    ▲ 18%
                </Typography>

            </Stack>



            {/* CHART */}

            <Box
                sx={{
                    flex: 1,
                    minHeight: 280,
                }}
            >

                <Box
                    sx={{
                        height: 300,
                        borderRadius: 2,
                        backgroundColor: "#f5f5f5",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    Chart Placeholder
                </Box>

                {/*
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <AreaChart data={data}>

                        <defs>

                            <linearGradient
                                id="engagementGradient"

                                x1="0"
                                y1="0"

                                x2="0"
                                y2="1"
                            >

                                <stop
                                    offset="0%"

                                    stopColor="#4CAF50"

                                    stopOpacity={0.28}
                                />

                                <stop
                                    offset="100%"

                                    stopColor="#4CAF50"

                                    stopOpacity={0}
                                />

                            </linearGradient>

                        </defs>



                        <CartesianGrid
                            strokeDasharray="3 3"

                            vertical={false}

                            stroke="rgba(0,0,0,0.06)"
                        />



                        <XAxis
                            dataKey="day"

                            tickLine={false}

                            axisLine={false}

                            tick={{
                                fill: "#6B7280",
                                fontSize: 12,
                            }}
                        />



                        <YAxis
                            tickLine={false}

                            axisLine={false}

                            tick={{
                                fill: "#6B7280",
                                fontSize: 12,
                            }}
                        />



                        <Tooltip />



                        <Area
                            type="monotone"

                            dataKey="engagements"

                            stroke="#2E7D32"

                            strokeWidth={3}

                            fill="url(#engagementGradient)"
                        />

                    </AreaChart>



            </ResponsiveContainer>
                */}

            </Box>

        </Box >
    );
}