import {
    Box,
    Typography,
} from "@mui/material";

export default function ProfileHeader() {

    return (

        <Box
            sx={{
                mb: 4,
            }}
        >

            <Typography
                sx={{
                    fontSize: {
                        xs: "2rem",
                        md: "2.8rem",
                    },

                    fontWeight: 800,

                    color: "#111827",

                    lineHeight: 1.1,

                    letterSpacing: "-0.03em",
                }}
            >
                Edit Profile
            </Typography>



            <Typography
                sx={{
                    color: "#6B7280",

                    mt: 1,

                    fontSize: {
                        xs: "1rem",
                        md: "1.05rem",
                    },

                    maxWidth: "650px",
                }}
            >
                Manage your personal information
                and account settings.
            </Typography>

        </Box>

    );
}