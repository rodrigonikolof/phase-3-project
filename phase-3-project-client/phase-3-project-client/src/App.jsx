import { Routes, Route, useNavigate } from "react-router-dom";
import Notes from './pages/Notes'
import CreateNote from './pages/CreateNote'
import Layout from "./components/Layout";
import { useEffect, useState, useContext } from "react";


// export const Context = React.createContext();


function App() {
  
const [noteForUpdate, setNoteForUpdate] = useState({})
const navigate = useNavigate()

function noteForUpdateSetter (note){
  setNoteForUpdate(note)
  // console.log(noteForUpdate)
  navigate('/create')
}

useEffect(()=>{
 
},[noteForUpdate])

  return (
   
    // <Context.Provider value={[noteForUpdate, setNoteForUpdate]}>
    <Layout noteForUpdateSetter={noteForUpdateSetter}>
      <Routes>
        <Route exact path="/" element={<Notes noteForUpdateSetter={noteForUpdateSetter}/>}/>
        <Route path="/create" element={<CreateNote noteForUpdate={noteForUpdate} noteForUpdateSetter={noteForUpdateSetter}/>}/>      
      </Routes>
    </Layout>
    /* </Context.Provider> */

  )
}

export default App


