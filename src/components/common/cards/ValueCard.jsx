import {
    Box,
    Typography,
} from "@mui/material";

export default function ValueCard({
    title,
    description,
}) {
    return (
        <Box
            sx={{
                backgroundColor: "background.paper",

                borderRadius: "24px",

                p: {
                    xs: 4,
                    md: 5,
                },

                height: "100%",

                border:
                    "1px solid rgba(46,125,50,0.08)",

                boxShadow:
                    "0 10px 30px rgba(0,0,0,0.04)",

                transition: "all 0.3s ease",

                "&:hover": {
                    transform: "translateY(-4px)",

                    boxShadow:
                        "0 18px 40px rgba(0,0,0,0.07)",
                },
            }}
        >

            {/* ICON PLACEHOLDER */}

            <Box
                sx={{
                    width: 60,
                    height: 60,

                    borderRadius: "18px",

                    backgroundColor:
                        "rgba(76,175,80,0.12)",

                    mb: 3,
                }}
            />



            {/* TITLE */}

            <Typography
                variant="h4"
                sx={{
                    mb: 2,
                }}
            >
                {title}
            </Typography>



            {/* DESCRIPTION */}

            <Typography
                variant="body1"
                sx={{
                    color: "text.secondary",

                    lineHeight: 1.8,
                }}
            >
                {description}
            </Typography>

        </Box>
    );
}