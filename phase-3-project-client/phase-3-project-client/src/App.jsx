import { Routes, Route, useNavigate } from "react-router-dom";
import Notes from './pages/Notes'
import Create from './pages/Create'
import Layout from "./components/Layout";
import { useEffect, useState } from "react";





function App() {
  
const [noteForUpdate, setNoteForUpdate] = useState({})
const navigate = useNavigate()

function noteForUpdateSetter (note){
  setNoteForUpdate(note)
  // console.log(noteForUpdate)
  navigate('/create')
}

// useEffect(()=>{
 
// },[noteForUpdate])

  return (
   
    <Layout>
      <Routes>
        <Route exact path="/" element={<Notes noteForUpdateSetter={noteForUpdateSetter}/>}/>
        <Route path="/create" element={<Create noteForUpdate={noteForUpdate}/>}/>      
      </Routes>
    </Layout>

  )
}

export default App


