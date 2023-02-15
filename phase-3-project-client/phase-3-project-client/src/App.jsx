import { Routes, Route } from "react-router-dom";
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, ThemeProvider } from "@mui/system";
import { red } from "@mui/material/colors";


// const theme = createTheme({
//   palette: {
//     primary: {
//       main: red[500],
//     },
//   },
// });

function App() {
  

  return (
    // <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Notes/>}/>
        <Route path="/create" element={<Create/>}/>      
      </Routes>
    // </ThemeProvider>
  )
}

export default App
