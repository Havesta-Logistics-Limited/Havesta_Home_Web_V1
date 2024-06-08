import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Box overFlow="hidden" flexGrow={1}>
        <Outlet />
      </Box>

      {/* <Footer/> */}
    </>
  );
};

export default MainLayout;
