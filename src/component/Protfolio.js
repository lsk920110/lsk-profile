import {
  Avatar,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Protfolio() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Portfolio</Typography>
      </CardContent>
      <CardContent>
        <List>
          <Link to={"http://www.yourbrow.co.kr"} target="_blank">
            <ListItem>
              <ListItemAvatar>
                <Avatar src="http://www.yourbrow.co.kr/hani-profile.jpg"/>
              </ListItemAvatar>
              <Typography>Yourbrow 랜딩페이지</Typography>
            </ListItem>
          </Link>
          <Link
            to={
              "https://play.google.com/store/apps/details?id=com.habit_project.daily_counter&hl=en-KR"
            }
            target="_blank"
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar src="https://play-lh.googleusercontent.com/jfXPJV1-xlorPFtQ_8Vt_th0XXdkgOdyjXrC9khFtZK8p7je24uqMsVPek2SGFYQz9BZ=w480-h960-rw"/>
              </ListItemAvatar>
              <Typography>Flutter 카운터 앱 개발</Typography>
            </ListItem>
          </Link>
        </List>
      </CardContent>
    </Card>
  );
}
