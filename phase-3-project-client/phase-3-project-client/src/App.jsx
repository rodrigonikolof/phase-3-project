import { Routes, Route, useNavigate } from "react-router-dom";
import Notes from './pages/Notes'
import CreateNote from './pages/CreateNote'
import Layout from "./components/Layout";
import React, { useEffect, useState } from "react";

export const Context = React.createContext();

function App() {
  
const [noteForUpdate, setNoteForUpdate] = useState({})
const [user, setUser] = useState(1)
const navigate = useNavigate()

function noteForUpdateSetter (note){
  setNoteForUpdate(note)
  navigate('/create')
}

useEffect(()=>{
},[noteForUpdate])

  return (

    <Context.Provider value={[user, setUser]}>
      <Layout noteForUpdateSetter={noteForUpdateSetter}>
        <Routes>
          <Route exact path="/" element={<Notes noteForUpdateSetter={noteForUpdateSetter}/>}/>
          <Route path="/create" element={<CreateNote noteForUpdate={noteForUpdate} noteForUpdateSetter={noteForUpdateSetter}/>}/>      
        </Routes>
      </Layout>
    </Context.Provider>

  )
}

export default App


