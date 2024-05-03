import { useState } from 'react'
import Content from './Content'
import Grid from '@mui/material/Grid';

//import './App.css'

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
        <Grid container spacing={2} sx={{height:"100%"}}>
          <Grid item xs={collapsed ? 4 : 12} sx={{transition: "all .5s ease-in-out"}}>
            <Content smalluns={collapsed} setSmalluns={setCollapsed} />
          </Grid>

          {collapsed && <Grid item xs={8}>
            {/* <iframe style={{height: "100%", width:"100%", border :"0px"}} src={"https://andreantonitsch.github.io/portfolio-simulation3js/"} /> */}
            {/* <iframe style={{height: "100vh", width:"100%", border :"0px", backgroundColor:"rgba(209, 136, 87, 1)"}}
             src={"http://localhost:5174/portfolio-simulation3js/"} /> */}
            <iframe style={{height: "100vh", width:"100%", border :"0px", backgroundColor:"rgba(209, 136, 87, 1)"}}
             src={"https://andreantonitsch.github.io/portfolio-simulation3js/"} />

          </Grid>}
        </Grid>


    </>
  )
}

export default App
