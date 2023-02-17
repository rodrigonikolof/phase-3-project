import { styled } from '@mui/system';
import { Typography, Drawer, ListItem, List, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { useNavigate } from "react-router-dom";


const drawerWidth = 220

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%',
  },
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    
  },
  drawerPaper: {
    width: drawerWidth,
  },
})



export default function Layout({children}){
    const navigate = useNavigate()
    const classes = useStyles()

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

    const Styled = styled('div')({
        background: 'rgb(241, 240, 235)',
        width: '100%'
    })

    return (
        <div className={classes.root}>
             <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{ paper: classes.drawerPaper }}
                anchor="left"
                > 
                <div>
                    <Typography variant="h5" className={classes.title}> Note Tracker </Typography>
                </div>

                    <List>
                    {menuItems.map((item) => (
                        <ListItem 
                        key={item.text} 
                        >
                            <ListItemButton 
                                onClick={()=>navigate(item.path)} 
                            >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                        </ListItemButton>
                        </ListItem>
                    ))}
                    </List>
            </Drawer>
            

            <Styled>
            <div className="page-container">
                {children}
            </div>
            </Styled>
        </div>
    )
}