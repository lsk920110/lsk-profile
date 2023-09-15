// import logo from './logo.svg';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import "./App.css";
import BasicTabs from "./BasicTabs";
function App() {
  return (
    <div className="App">
      <Paper sx={{ margin: 10, padding: 5, marginBottom: 5 }}>
        나의 프로필과 사진이 배치됨
      </Paper>
      <Box marginLeft={10} marginRight={10}>
        <BasicTabs />
      </Box>
      <Box marginLeft={10} marginRight={10}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Card>
              <CardContent>
                <Typography>Works</Typography>
                <Typography>
                  Fullstack Developer
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography>About</Typography>
                <Typography>저는....</Typography>
              </CardContent>
              <CardContent>
            <Divider />

              </CardContent>
            
            
              <CardContent>
                <Typography>Skills</Typography>
                <Typography>저는....</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>asd</Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
