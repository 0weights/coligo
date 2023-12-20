import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DateRangeIcon from '@mui/icons-material/DateRange';
import BookIcon from '@mui/icons-material/Book';
import SchoolIcon from '@mui/icons-material/School';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CampaignIcon from '@mui/icons-material/Campaign';
// import { makeStyles } from '@mui/styles';
// import styled from '@emotion/styled';

import { Button } from '@mui/material';
import { styled } from '@mui/system';

const drawerWidth = 240;

export default function Sidebar({ open, onClose }) {

  // const CustomButton = styled(ListItemButton)`
  // color : '#1976d2',
  //   &:hover {
  //     backgroundColor: 'white';
  //     color : '#1976d2';
  //   }
  // `;

  // const CustomButton = styled('<div>')({
    
  //   color: '#ff5252',
  //   backgroundColor: 'aliceblue',
  //   padding: 8,
  //   borderRadius: 4,
  // });
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, 
        ml: `${drawerWidth}px`,
        }}
      >

      </AppBar>
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          background: '#1976d2' 
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
      onClose={onClose} 
      
    >
      <Toolbar />
      <Divider />
      <List>
        {
      [[<DateRangeIcon />, "Schedule"],
       [<BookIcon />, "Courses"],
       [<SchoolIcon />, "Gradebook"],
       [<ShowChartIcon />, "Performance"],
       [<CampaignIcon />, "Announcement"]].map((iteam, index)=>(
        <ListItem disablePadding sx={{
          transition: "box-shadow 0.4s ease-in-out",
          "&:hover": {
            color: "#1976d2",
            background : "#ffffff"
          }}} >
        <ListItemButton >
          <ListItemIcon>
           { iteam[0]}
          </ListItemIcon>
          <ListItemText primary={iteam[1]} />
        </ListItemButton>
      </ListItem>
      ))
      }
      </List>
    </Drawer>
    </Box>
  );
}