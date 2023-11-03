import ButtonBase from "@mui/material/ButtonBase";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import * as React from "react";
import MyProfileJpg from "../my-profile.jpg";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  //   borderRadius : '25px'
});

export default function ComplexGrid() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        // width : '50%',
        // maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={5} sm={1.5}>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={MyProfileJpg} />
          </ButtonBase>
        </Grid>
        <Grid item xs={7} sm={10.5} container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                이승규
              </Typography>
              <Typography variant="body2" gutterBottom>
                Fullstack Developer
              </Typography>
              <Typography variant="body2" gutterBottom>
                lsk7337@naver.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                서울 영등포구
              </Typography>
            </Grid>
            {/* <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                Remove
              </Typography>
            </Grid> */}
          </Grid>
          
          {/* <Grid item>
            <Typography
              variant="subtitle1"
              component="div"
              paddingLeft={5}
            ></Typography>
          </Grid> */}
        </Grid>
      </Grid>
    </Paper>
  );
}
