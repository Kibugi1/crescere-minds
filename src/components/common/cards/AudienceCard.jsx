import {
    Box,
    Typography,
} from "@mui/material";

export default function AudienceCard({
    title,
    description,
}) {
    return (
        <Box
            sx={{
                backgroundColor: "background.paper",

                borderRadius: "28px",

                p: {
                    xs: 4,
                    md: 5,
                },

                height: "100%",

                border:
                    "1px solid rgba(46,125,50,0.08)",

                boxShadow:
                    "0 12px 40px rgba(0,0,0,0.04)",

                transition: "all 0.3s ease",

                "&:hover": {
                    transform: "translateY(-4px)",

                    boxShadow:
                        "0 20px 50px rgba(0,0,0,0.07)",
                },
            }}
        >

            <Box
                sx={{
                    width: 56,
                    height: 56,

                    borderRadius: "18px",

                    backgroundColor: "rgba(76,175,80,0.12)",

                    mb: 3,
                }}
            />



            <Typography
                variant="h4"
                sx={{
                    mb: 2,
                }}
            >
                {title}
            </Typography>



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