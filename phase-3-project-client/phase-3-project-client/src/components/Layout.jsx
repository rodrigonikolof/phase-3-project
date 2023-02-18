import { styled } from '@mui/system';
import { Typography, Drawer, ListItem, List, ListItemIcon, ListItemText, ListItemButton, AppBar, Toolbar, Box, IconButton, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { useNavigate } from "react-router-dom";
import DrawerMenu from './DrawerMenu'
import {format} from 'date-fns'

export default function Layout({children}){
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const navigate = useNavigate()
    // const classes = useStyles()

    const menuItems = [
        { 
          text: 'My Notes', 
          icon: <TextSnippetIcon color="secondary" />, 
          path: '/' 
        },
        { 
          text: 'Create Note', 
          icon: <AddIcon color="secondary" />, 
          path: '/create' 
        },
      ];

    return (
<div>
<Box sx={{ flexGrow: 1, mb: 3  }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
          <IconButton
            onClick={()=>setIsDrawerOpen(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               Note Tracker
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <Typography>{format(new Date(), 'do MMMM Y')}</Typography>
        </Toolbar>
      </AppBar>
    </Box>  

    <Drawer
    anchor='left'
    open={isDrawerOpen}
    onClose={()=>setIsDrawerOpen(false)}
    >
      <Box>
      <Container sx={{mt:2}}>
        <Typography variant="h6"> Menu </Typography>
      </Container>
          <List>
          {menuItems.map((item) => (
              <ListItem 
              key={item.text} 
              >
                <ListItemButton 
                    onClick={()=>{
                      navigate(item.path)
                      setIsDrawerOpen(false)
                    }} 
                >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
          ))}
          </List>        
      </Box>
    </Drawer>

  
  <div className="page-container">
      {children}
  </div>
</div>

    )
}