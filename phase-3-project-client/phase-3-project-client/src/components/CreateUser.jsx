import { Typography, TextField, Container, Button} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from '../App';

export default function CreateUser(){
    const [user, setUser] = useContext(Context);
    const navigate = useNavigate()
    const [name, setName] = useState('')


const handleSubmit = (e)=>{
    e.preventDefault()
    fetch('http://localhost:8000/users', {
          method: 'POST',
          headers: {"Content-type": "application/json"},
          body: JSON.stringify({name})
        })
        // .then(res => res.text())
        .then(res => res.json())
        .then(data => setUser(data.id))
        .then(() => navigate('/')) 
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
