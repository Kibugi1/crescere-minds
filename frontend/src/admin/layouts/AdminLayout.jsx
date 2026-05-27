import { Box } from "@mui/material";

import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";

import Topbar from "../components/layout/Topbar";



export default function AdminLayout() {

    return (

        <Box
            sx={{

                display: "flex",

                minHeight: "100vh",

                backgroundColor: "#F5F7F2",

                // Manipulation point:
                // change background color
                // to affect overall dashboard tone
            }}
        >

            {/* SIDEBAR */}

            <Sidebar />



            {/* RIGHT SIDE */}

            <Box
                sx={{

                    flexGrow: 1,

                    display: "flex",

                    flexDirection: "column",

                    minHeight: "100vh",
                }}
            >

                {/* TOPBAR */}

                <Topbar />



                {/* MAIN PAGE CONTENT */}

                <Box
                    component="main"

                    sx={{

                        flexGrow: 1,

                        px: {
                            xs: 2,
                            md: 4,
                        },

                        py: {
                            xs: 2,
                            md: 4,
                        },

                        overflowX: "hidden",

                        // Manipulation point:
                        // increase px for more horizontal spacing

                        // Manipulation point:
                        // increase py for more vertical spacing
                    }}
                >

                    <Outlet />

                </Box>

            </Box>

        </Box>
    );
}