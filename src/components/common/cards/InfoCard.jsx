import {
    Box,
    Typography,
} from "@mui/material";

export default function InfoCard({
    eyebrow,
    title,
    description,
}) {
    return (
        <Box
            sx={{
                backgroundColor: "background.paper",

                borderRadius: "32px",

                p: {
                    xs: 4,
                    md: 6,
                },

                height: "100%",

                boxShadow:
                    "0 16px 50px rgba(0,0,0,0.05)",

                transition: "all 0.3s ease",

                border:
                    "1px solid rgba(46,125,50,0.08)",

                "&:hover": {
                    transform: "translateY(-6px)",

                    boxShadow:
                        "0 24px 60px rgba(0,0,0,0.08)",
                },

                // Manipulation point:
                // increase p to create more inner spacing

                // Manipulation point:
                // increase borderRadius for softer corners

                // Manipulation point:
                // modify transform value for hover movement
            }}
        >

            {/* SMALL LABEL */}

            <Typography
                variant="overline"
                sx={{
                    color: "primary.light",

                    fontWeight: 700,

                    letterSpacing: 2,
                }}
            >
                {eyebrow}
            </Typography>



            {/* CARD TITLE */}

            <Typography
                variant="h3"
                sx={{
                    mt: 2,

                    mb: 3,

                    maxWidth: "400px",

                    // Manipulation point:
                    // increase mt to move title downward

                    // Manipulation point:
                    // reduce maxWidth for tighter text width
                }}
            >
                {title}
            </Typography>



            {/* CARD DESCRIPTION */}

            <Typography
                variant="body1"
                sx={{
                    color: "text.secondary",

                    lineHeight: 1.9,

                    // Manipulation point:
                    // increase lineHeight for more breathing room
                }}
            >
                {description}
            </Typography>

        </Box>
    );
}