import { CoPresent, Smartphone, Storage } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
const Backend = [
  {
    src: "https://blog.kakaocdn.net/dn/d8Ppmq/btqxTKFM6rs/M7Tlhge739Ch4Spe8AjbkK/img.png",
    title: "springboot",
  },
  {
    src: "https://blog.kakaocdn.net/dn/rnNzV/btrvSB2K02V/pBeTjYH70UEdTKUJ1b65O0/img.png",
    title: "express",
  },
  // {
  //   src: "https://miro.medium.com/v2/resize:fit:1400/1*gxOA6-EF8P8vnYdk3Bc9bg.png",
  //   title: "nextjs",
  // },
];
const Frontend = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    title: "react",
  },
  {
    src: "https://blog.kakaocdn.net/dn/bwLdHi/btqAIEhUJXu/ZJYz3SlI9zCZCf6wmKYlBK/img.png",
    title: "jquery",
  },
];
const App = [
  {
    src: "https://velog.velcdn.com/images/yhm8622/post/0cc51038-7969-4b91-b4e8-1bc09995513d/image.png",
    title: "flutter",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png",
    title: "React Native",
  },
];
export default function Skills() {
  return (
    <Card>
      <CardContent>
        <Typography height={"10px"} variant="h6">
          Skills
        </Typography>
      </CardContent>
      <CardContent>
        <SkillList
          title={"Backend"}
          icon={<Storage fontSize="small" />}
          list={Backend}
        />
      </CardContent>
      <CardContent>
        <SkillList
          title={"Frontend"}
          icon={<CoPresent fontSize="small" />}
          list={Frontend}
        />
      </CardContent>
      <CardContent>
        <SkillList
          title={"App"}
          icon={<Smartphone fontSize="small" />}
          list={App}
        />
      </CardContent>
    </Card>
  );
}

function SkillList({ list, title, icon }) {
  return (
    <Box>
      <Box marginBottom={"5px"} marginTop={"50px"}>
        <Typography
          sx={{ color: "grey" }}
          width={"50px"}
          marginTop={"30px"}
          marginBottom={"30px"}
          color={"black"}
        >
          {title}
        </Typography>
        {/* <Typography component={'span'} >{icon}</Typography> */}
        <Divider />
      </Box>
      <Grid container spacing={2}>
        {list.map((item, idx) => {
          return (
            <Grid xs={4} md={3} item>
              
                <img
                  src={item.src}
                  width={"100%"}
                  height={"100%"}
                  alt={item.title}
                />
              
                <Typography textAlign={"center"}>{item.title}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
