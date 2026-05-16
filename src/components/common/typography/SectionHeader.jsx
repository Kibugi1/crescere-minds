import { Box, Typography } from "@mui/material";

export default function SectionHeader({
    eyebrow,
    title,
    description,
    align = "left",
    maxWidth = "700px",
    titleVariant = "h2",
}) {
    return (
        <Box
            sx={{
                textAlign: align,

                mb: {
                    xs: 6,
                    md: 8,
                },

                mx: align === "center" ? "auto" : "unset",

                maxWidth,

                // Manipulation point:
                // increase mb to create more space below section header

                // Manipulation point:
                // change align prop to:
                // "left"
                // "center"
                // "right"
            }}
        >

            {/* SMALL LABEL */}

            <Typography
                variant="overline"
                sx={{
                    color: "primary.light",

                    fontWeight: 700,

                    letterSpacing: 2,

                    // Manipulation point:
                    // increase letterSpacing for more elegant spacing
                }}
            >
                {eyebrow}
            </Typography>



            {/* MAIN TITLE */}

            <Typography
                variant={titleVariant}
                sx={{
                    mt: 2,

                    mb: 3,

                    // Manipulation point:
                    // increase mt to push title downward

                    // Manipulation point:
                    // increase mb to separate title from description
                }}
            >
                {title}
            </Typography>



            {/* SUPPORTING DESCRIPTION */}

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