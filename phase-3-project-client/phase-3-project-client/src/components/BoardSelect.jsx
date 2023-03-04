import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../App';

export default function UserSelect(){
    const [board, setBoard, user, setUser] = useContext(Context);
   
    const [allBoards, setAllBoards] = useState([])

    const handleChange = (event) => {
      setBoard(event.target.value);
      setUser(null)
    };

    useEffect(()=>{
          fetch(' http://localhost:8000/boards')
          .then(res => res.json())
          .then(data => setAllBoards(data))
    },[])


    return(
        
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Boards</InputLabel>
        <Select 
          value={''}
          label="Board"
          onChange={handleChange}
        >
          {allBoards.map((b)=>(
            <MenuItem value={b.id} key={b.id}>{b.name}</MenuItem>
          ))}

        </Select>
      </FormControl>
    </Box>
    )
}