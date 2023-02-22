import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../App';

export default function UserSelect(){
    const [user, setUser] = useContext(Context);
    const [allUsers, setAllUsers] = useState([])

    const handleChange = (event) => {
      setUser(event.target.value);
    };

    useEffect(()=>{
          fetch(' http://localhost:8000/users')
          .then(res => res.json())
          .then(data => setAllUsers(data))
    },[])


    return(
        
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>User</InputLabel>
        <Select 
          value={user}
          label="User"
          onChange={handleChange}
        >
          {allUsers.map((user)=>(
            <MenuItem value={user.id} key={user.id}>{user.name}</MenuItem>
          ))}

        </Select>
      </FormControl>
    </Box>
    )
}