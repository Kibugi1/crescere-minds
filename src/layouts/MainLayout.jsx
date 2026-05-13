import { Box } from "@mui/material";

export default function MainLayout({ children }) {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        backgroundColor: "#F5F7F2",
      }}
    >
      {children}
    </Box>
  );
}
