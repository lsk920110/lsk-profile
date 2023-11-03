// import logo from './logo.svg';
import {
  Box,
  Grid
} from "@mui/material";
import "./App.css";
import BasicTabs from "./component/BasicTabs";
import ComplexGrid from "./component/ComplexGrid";
import About from "./component/About";
import ContactMe from "./component/ContactMe";
import Protfolio from "./component/Protfolio";
import Skills from "./component/Skills";
import Works from "./component/Works";
import { useState } from "react";

function App() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="App">
      <Box className="container">
        <Box marginTop={1}>
          <ComplexGrid />
        </Box>
        <Box>
          <BasicTabs />
        </Box>
        <Box>
          <Grid container spacing={3}>
            <Grid item sm={3} xs={12}>
              <Grid container direction={"column"} spacing={3}>
                <Grid item>
                  <Works />
                </Grid>
                <Grid item>
                  <Protfolio />
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Grid container direction={"column"} spacing={3}>
                <Grid item>
                  <About />
                </Grid>
                <Grid item>
                  <Skills />
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={3} xs={12}>
              <ContactMe success={success} setSuccess={setSuccess}/>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <iframe name="frAttachFiles" style={{ display: "none" }}></iframe> */}
    </div>
  );
}

export default App;
