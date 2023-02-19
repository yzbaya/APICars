import React from 'react'
import Box from "@mui/material/Box";
import Location from './pages/Location/Location';
import DivHome from './pages/DivHome/DivHome';
import DivHome2 from './pages/DivHome2/DivHome2'
 const Acceuil = () => {
  return (
    <div className='All'>
        <Box  >
            {Location()}
            {DivHome()}
            {DivHome2()}
    </Box>   
    </div>
  )
}
export default Acceuil;