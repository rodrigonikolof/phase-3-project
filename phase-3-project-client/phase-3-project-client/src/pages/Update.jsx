import { Typography, Button, Container, TextField, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
  }
})
  

export default function Update({ noteForUpdate }) {

    const classes = useStyles()
    const navigate = useNavigate()
    const [title, setTitle] = useState(noteForUpdate.title)
    const [details, setDetails] = useState(noteForUpdate.details)
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState(noteForUpdate.category)


    const handleSubmit = (e)=>{
      e.preventDefault()
      title? setTitleError(false) : setTitleError(true)
      details? setDetailsError(false) : setDetailsError(true)

      if (title && details && note == {}){
        // fetch('http://localhost:8000/notes', {
        //   method: 'POST',
        //   headers: {"Content-type": "application/json"},
        //   body: JSON.stringify({title, details, category})
        // }).then(() => navigate('/'))
        newNote()
      }
      // if (title && details && note.id){
      //     updateNote()
      // }
    }

    const newNote = ()=>{
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({title, details, category})
      }).then(() => navigate('/'))
    }

    const updateNote = ()=>{

    }


    useEffect(() => {
      console.log(noteForUpdate.category)
    });
 
    noteForUpdate == {} ? console.log(note) : console.log('nothing here')

    return (
      
      <Container>
      
        <Typography 
          variant="h6" component="h2" color="textSecondary" gutterBottom>
          {noteForUpdate.id? 'Update Your Note' : 'Create New Note '}
        </Typography>

        <form onSubmit={handleSubmit}
          autoComplete="off" noValidate>
          <TextField 
            onChange={(e)=>{setTitle(e.target.value)}} 
            label="Title" color="error" fullWidth required sx={{marginBottom: 1 }} error={titleError}
            value={title}
            />
          <TextField 
            onChange={(e)=>{setDetails(e.target.value)}} 
            label="Note Details" color="error" fullWidth required sx={{marginBottom: 1 }} 
            multiline rows={4} error={detailsError} 
            value={details}
            />
          <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)} defaultValue="Non-Urgent">
            <FormControlLabel value="Non-Urgent" control={<Radio/>} label="Non-Urgent"/>
            <FormControlLabel value="Attention" control={<Radio/>} label="Needs Attention"/>
            <FormControlLabel value="Urgent" control={<Radio/>} label="Urgent"/>
          </RadioGroup>

          <Button type="submit" color="secondary" variant="contained" endIcon={<KeyboardArrowRightIcon/>}
          >
          Submit
          </Button>

        </form>

      </Container>

      
    )
  }