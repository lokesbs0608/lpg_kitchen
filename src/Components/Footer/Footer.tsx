import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AltRouteSharpIcon from '@mui/icons-material/AltRouteSharp';
import { To, useNavigate } from 'react-router-dom';

export default function Footer() {
    let navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const handleNaviagtion= (path: string)=>{
    navigate(path);
  }

  return (
    <Box sx={{ width: 500 }}>
   <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction onClick={()=>handleNaviagtion('/')}  label="Order" icon={<AltRouteSharpIcon />} />
          <BottomNavigationAction onClick={()=>handleNaviagtion('menu')} label="Menu" icon={<MenuIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}