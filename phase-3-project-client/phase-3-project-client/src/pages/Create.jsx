import { Typography, Button, Container, TextField } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import { useState } from "react";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
  }
})


export default function Create() {

    const classes = useStyles()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)

    const handleSubmit = (e)=>{
      e.preventDefault()
      title? setTitleError(false) : setTitleError(true)
      details? setDetailsError(false) : setDetailsError(true)
      if (title && details){
      console.log(`Title is ${title} and body is ${details}`)
      }
    }
 

    return (
      
      <Container>
       
        <Typography 
          variant="h6" component="h2" color="textSecondary" gutterBottom>
          Create New Note 
        </Typography>

        <form onSubmit={handleSubmit}
          autoComplete="off" noValidate>
          <TextField 
            onChange={(e)=>{setTitle(e.target.value)}} 
            label="Title" color="error" fullWidth required sx={{marginBottom: 1 }} error={titleError}
            />
          <TextField 
            onChange={(e)=>{setDetails(e.target.value)}} 
            label="Note Details" color="error" fullWidth required sx={{marginBottom: 1 }} 
            multiline rows={4} error={detailsError}
            />

          <Button type="submit" color="error" variant="contained" endIcon={<KeyboardArrowRightIcon/>}
          >
          Submit
          </Button>

        </form>

      </Container>

      
    )
  }