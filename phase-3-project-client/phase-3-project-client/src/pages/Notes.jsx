import { useEffect, useState } from "react"
import { Grid, Container } from '@mui/material';
import NoteCard from "../components/NoteCard";
import Masonry from 'react-masonry-css';




export default function Notes({noteForUpdateSetter}) {

const [notes, setNotes] = useState([])

useEffect(()=>{
  fetch(' http://localhost:8000/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
},[])


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

    return (
      <Container>
        
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