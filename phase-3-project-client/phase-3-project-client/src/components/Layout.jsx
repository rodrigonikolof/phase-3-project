
import { Typography, Drawer, ListItem, List, ListItemIcon, ListItemText, ListItemButton, AppBar, Toolbar, Box, IconButton, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { useNavigate } from "react-router-dom";
import {format} from 'date-fns'
import UserSelect from './UserSelect';


export default function Layout({children, noteForUpdateSetter}){
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const navigate = useNavigate()

    const menuItems = [
        { 
          text: 'My Notes', 
          icon: <TextSnippetIcon color="primary" />, 
          path: '/' 
        },
        { 
          text: 'Create Note', 
          icon: <AddIcon color="primary" />, 
          path: '/create' 
        },
        { 
          text: 'Add User', 
          icon: <AddIcon color="primary" />, 
          path: '/createuser' 
        },
      ];

    return (
<div>
<Box sx={{ flexGrow: 1, mb: 3  }}>
      <AppBar position="static" color='default'>
        <Toolbar>
          <IconButton
            onClick={()=>setIsDrawerOpen(true)}
            size="large"
            edge="start"
            color="transparent"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'grey' }}>
          {format(new Date(), 'dd MMMM Y')}
          </Typography>
          <UserSelect/>
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
                      noteForUpdateSetter({})
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