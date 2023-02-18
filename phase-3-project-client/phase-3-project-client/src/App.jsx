import { Routes, Route } from "react-router-dom";
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, ThemeProvider } from "@mui/system";
import Layout from "./components/Layout";


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
    <Layout>
      <Routes>
        <Route exact path="/" element={<Notes/>}/>
        <Route path="/create" element={<Create/>}/>      
      </Routes>
    </Layout>
    // </ThemeProvider>
  )
}

export default App


