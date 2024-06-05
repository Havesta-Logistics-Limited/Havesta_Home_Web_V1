import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { Box } from "@mui/material";


const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Box 
    overFlow="hidden"
    flexGrow={1}
    >
    <Outlet/>

    </Box>

    
    <Footer/>
    
    </>
  )
}

export default MainLayout
