import { useEffect, useState, useContext } from "react"
import { Container, Typography, Select, Box , FormControl, InputLabel, MenuItem} from '@mui/material';
import NoteCard from "../components/NoteCard";
import Masonry from 'react-masonry-css';
import { Context } from "../App";

import { Link } from "react-router-dom";



export default function Notes({noteForUpdateSetter, boards, setBoards, currentBoard, setCurrentBoard}) {

const [notes, setNotes] = useState([])
const [showMessage, setShowMessage] = useState(false)
const [user] = useContext(Context);


useEffect(()=>{
  fetch(`http://localhost:8000/user/${user}`)
  .then(res => res.json())
  .then(data => setBoards(data))
},[user])

const handleChange = (event) => {
 setCurrentBoard(event.target.value)
  };

 const getNotes = async ()=> {
   await fetch(`http://localhost:8000/boards/${currentBoard}`)
      .then(res => res.json())
      .then(data => setNotes(data)) 
 }

useEffect(()=>{
  setNotes([]) 
  setShowMessage(false)
},[user])

useEffect(()=>{
  getNotes()
},[currentBoard])



const handleDelete = async (id) => {
  await fetch(`http://localhost:8000/notes/${id}`, {
    method: 'DELETE'
  })
  setNotes(notes.filter(note => note.id != id ))
}

const breakpoints = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
}


const message = <Typography><Link to='/create' style={{ textDecoration: 'none' }}>Select a Board or Create Your First Note To Get Started</Link></Typography>
    



    return (
      
      <Container >
       
      <Box sx={{ minWidth: 80, mb: 3}}>
        <FormControl fullWidth>
          <InputLabel>Select Board</InputLabel>
            <Select 
              value={currentBoard}
              label="Select a Board"
              onChange={handleChange}
            >
              {boards.map((board)=>(
                <MenuItem value={board.id} key={board.id}>{board.board_name}</MenuItem>
              ))}

          </Select>
        </FormControl>
      </Box>

      {showMessage? message : null}

        <Masonry 
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        >
          {notes.map(note => (
            <div key={note.id}>
              <NoteCard note={note} handleDelete={handleDelete} noteForUpdateSetter={noteForUpdateSetter}/>
            </div>
        ))}
        </Masonry>
      </Container>
    
          
    )
  }