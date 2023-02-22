import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { yellow, red, green } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import { useState, useEffect } from 'react';

export default function UserSelect(){
    const [user, setUser] = React.useState([]);

    const handleChange = (event) => {
      setUser(event.target.value);
    };

useEffect(()=>{

})


    return(
        
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>User</InputLabel>
        <Select 
          value={user}
          label="User"
        //   MenuProps={{ disablePortal: true }}
          onChange={handleChange}
        >

          <MenuItem value={10}>Ringo</MenuItem>
          <MenuItem value={20}>John</MenuItem>
          <MenuItem value={30}>Paul</MenuItem>
          <MenuItem value={30}>George</MenuItem>
        </Select>
      </FormControl>
    </Box>
    )
}