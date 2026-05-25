import { Box } from "@mui/material";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";

export default function MainLayout({ children }) {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        backgroundColor: "#F5F7F2",
      }}
    >
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
}
