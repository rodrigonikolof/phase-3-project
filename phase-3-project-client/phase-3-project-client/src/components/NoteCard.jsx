import { DeleteOutlined } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import { yellow, red, green } from '@mui/material/colors';
import { Card, CardHeader, CardContent, IconButton, Typography } from '@mui/material';

export default function NoteCard({note, handleDelete, noteForUpdateSetter}){
    
    const avatarBgColor = (note) => {
        if (note.category === "Urgent") {
          return red[300];
        }
        if (note.category === "Attention") {
            return yellow[400];
          }
          if (note.category === "Non-Urgent") {
            return green[300];
          }
      };

      function handleUpdate(){
        noteForUpdateSetter(note)
      }

    return(
        <div>
            <Card elevation={3} 
                >
                <CardHeader 
                    avatar={
                        <Avatar
                        sx={{ bgcolor: avatarBgColor(note) }}
                        >
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                  action={
                    <IconButton onClick={()=> handleDelete(note.id)}>
                        <DeleteOutlined/>
                    </IconButton>
                  }  
                  title={note.title}
                  subheader={note.category}
                />
                
                <CardContent sx={{overflow: 'visible'}}>
                    <Typography variant='body2' color="textSecondary" onClick={handleUpdate} sx={{cursor: 'pointer'}}> 
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>  
        </div>
    )
}