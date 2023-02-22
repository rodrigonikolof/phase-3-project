import { Typography, Button, Container, TextField, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
  }
})

export default function CreateNote({ noteForUpdate, noteForUpdateSetter }) {

    const classes = useStyles()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('Non-Urgent')
    const [user] = useContext(Context);

    const handleSubmit = (e)=>{
      e.preventDefault()
      title? setTitleError(false) : setTitleError(true)
      details? setDetailsError(false) : setDetailsError(true)

      if (title && details && !noteForUpdate.id ){
        fetch('http://localhost:8000/notes', {
          method: 'POST',
          headers: {"Content-type": "application/json"},
          body: JSON.stringify({title, details, category, user})
        }).then(() => navigate('/')) 
      }
      else if (title && details && noteForUpdate.id ){
        
        fetch(`http://localhost:8000/notes/${noteForUpdate.id}`,{
            method: "PATCH",
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({ title, details, category})
        })
        .then(res => res.json())
        .then(()=>noteForUpdateSetter({}))
        .then(() => navigate('/'))
      }
    }


    useEffect(() => {
      if (noteForUpdate != {}){
        setTitle(noteForUpdate.title)
        setDetails(noteForUpdate.details)
        setCategory(noteForUpdate.category)
      }
    },[]);

    return (
      <Container>
        <Typography 
          variant="h6" component="h2" color="textSecondary" gutterBottom>
          {noteForUpdate.id? "Update Note" : "Create New Note"}
        </Typography>

        <form onSubmit={handleSubmit}
          autoComplete="off" noValidate>
          <TextField 
            onChange={(e)=>{setTitle(e.target.value)}} 
            label="Title"  fullWidth required sx={{marginBottom: 1 }} error={titleError}
            value={title}
            />
          <TextField 
            onChange={(e)=>{setDetails(e.target.value)}} 
            label="Note Details" fullWidth required sx={{marginBottom: 1 }} 
            multiline rows={4} error={detailsError} 
            value={details}
            />
          <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)} 
          defaultValue={"Non-Urgent"}>
            <FormControlLabel value="Non-Urgent" control={<Radio/>} label="Non-Urgent"/>
            <FormControlLabel value="Attention" control={<Radio/>} label="Needs Attention"/>
            <FormControlLabel value="Urgent" control={<Radio/>} label="Urgent"/>
          </RadioGroup>

          <Button type="submit" color="primary" variant="contained" endIcon={<KeyboardArrowRightIcon/>}
          >
          Submit
          </Button>
        </form>
      </Container>
    )
  }