import { Routes, Route, useNavigate } from "react-router-dom";
import Notes from './pages/Notes'
import CreateNote from './pages/CreateNote'
import Layout from "./components/Layout";
import React, { useEffect, useState } from "react";
import CreateUser from "./components/CreateUser";

export const Context = React.createContext();

function App() {
  
const [noteForUpdate, setNoteForUpdate] = useState({})
const [user, setUser] = useState(1)
const [boards, setBoards] = useState([])
const [currentBoard, setCurrentBoard] = useState('')

const navigate = useNavigate()

function noteForUpdateSetter (note){
  setNoteForUpdate(note)
  navigate('/create')
}

useEffect(()=>{
},[noteForUpdate])

useEffect(()=>{
  navigate('/')
},[user])

  return (

    <Context.Provider value={[user, setUser]}>
      <Layout noteForUpdateSetter={noteForUpdateSetter}>
        <Routes>
          <Route exact path="/" 
            element={
              <Notes 
                noteForUpdateSetter={noteForUpdateSetter}
                boards={boards} setBoards={setBoards}
                currentBoard={currentBoard} setCurrentBoard={setCurrentBoard}
              />}/>
          <Route path="/create" element={<CreateNote noteForUpdate={noteForUpdate} noteForUpdateSetter={noteForUpdateSetter}/>}/>   
          <Route path="/createuser" element={<CreateUser/>}/> 

        </Routes>
      </Layout>
    </Context.Provider>

  )
}

export default App


