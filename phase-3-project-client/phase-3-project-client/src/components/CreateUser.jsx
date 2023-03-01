import { Typography, TextField, Container, Button} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import {format} from 'date-fns'
import UserSelect from './UserSelect';

export default function CreateUser(){


    const [name, setName] = useState('')


const handleSubmit = (e)=>{
    e.preventDefault()
    fetch('http://localhost:8000/users', {
          method: 'POST',
          headers: {"Content-type": "application/json"},
          body: JSON.stringify({name})
        }).then(res => res.text()).then(res => console.log(res))
      }



return(
    <>
    <Container>
        <Typography 
          variant="h6" component="h2" color="textSecondary" gutterBottom>
          Create New User
        </Typography>

        <form onSubmit={handleSubmit}
          autoComplete="off" noValidate>
          <TextField 
            onChange={(e)=>{setName(e.target.value)}} 
            label="Title"  fullWidth required sx={{marginBottom: 1 }}
            value={name}
            />

          <Button type="submit" color="primary" variant="contained" endIcon={<KeyboardArrowRightIcon/>}
          >
          Submit
          </Button>
        </form>
      </Container>
    
    
    </>
)

}
